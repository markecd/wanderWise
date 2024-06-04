const express = require('express');
const router = express.Router();
const { db, bucket } = require('../dbConn')
const { v4: uuidv4 } = require('uuid');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
const admin = require('firebase-admin');
const apiKey = process.env.API_KEY;
const jwt = require('jsonwebtoken');
const { arrayRemove } = require('@firebase/firestore');
const secretKey = 'secret-key';
const { exec } = require('child_process');
const fs = require('fs').promises;





router.get('/getNacrti', async (req, res) => {
    const { id } = req.query;

    if (!id) {
        throw new Error('Ni ID-ja destinacije')
    }

    try {
        const snapshot = await db.collection('plans')
            .where('destinationid', '==', id)
            .get();

        const nacrti = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.status(200).json(nacrti);

    }
    catch (error) {
        console.error("Error pri pridobivanju nacrtov: ", error);
        res.status(500).send("Error pri pridobivanju nacrtov");
    }
})

router.delete('/removeParticipant', async (req, res) => {
    try {
        const { userId, planId } = req.query;
        const savedPlanRef = db.collection('user').doc(userId).collection('saved_plans').doc(planId);
        const snapshot = await savedPlanRef.get();


        if (!snapshot.exists) {
            return res.status(404).send('Document not found');
        }

        const data = snapshot.data()
        const participants = data.participants;
        const userIdStr = userId.toString();
        for (const participant of participants) {
            const participantStr = participant.toString();
            if (participantStr !== userIdStr) {
                const participantPlanRef = db.collection('user').doc(participantStr).collection('saved_plans').doc(planId);

                const updatedParticipants = participants.filter(p => p !== userIdStr);


                await participantPlanRef.set({
                    participants: updatedParticipants,
                }, { merge: true });
            } else {
                const izbrisDoc = await db.collection('user').doc(participant).collection('saved_plans').doc(planId).delete();
            }
        }

        res.status(200).json("ajdee");
    }
    catch (error) {
        console.error("Error: ", error);
        res.status(500).send("Error");
    }
})

router.post('/addParticipantToPlan', async (req, res) => {
    try {
        const { planId, participants, added_username } = req.body;

        const response = await fetch(`http://localhost:6500/user/getIdByUsername?username=${added_username}`);
        if (!response.ok) {
            return res.status(404).json("Username not found!");
        }

        const userId = await response.json();
        const userIdStr = userId.toString();

        for (const participant of participants) {
            const participantStr = participant.toString();
            if (participantStr == userIdStr) {
                return res.status(404).json("User already added!");
            }
        }

        for (const participant of participants) {
            let updatedParticipants = [...participants];
            const participantStr = participant.toString();

            const participantPlanRef = db.collection('user').doc(participantStr).collection('saved_plans').doc(planId);

            updatedParticipants.push(userIdStr);

            await participantPlanRef.set({
                participants: updatedParticipants,
            }, { merge: true });
        }

        const snapshotPlanToCopy = await db.collection('user').doc(participants[0]).collection('saved_plans').doc(planId).get();
        const planToCopyData = snapshotPlanToCopy.data();

        await db.collection('user').doc(userIdStr).collection('saved_plans').doc(planId).set(planToCopyData)

        res.status(200).json({ message: "Participant added succesfully!", user: { id: userId, username: added_username } });


    } catch (error) {
        console.error("Error pri pridobivanju participantsov: ", error);
        res.status(500).send("Error pri pridobivanju participantsov");
    }
})

router.post('/getParticipantsData', async (req, res) => {
    try {
        const { participants } = req.body;

        const participantsArray = await constructParticipantsArray(participants);

        res.status(200).json(participantsArray);
    } catch (error) {
        console.error("Error pri pridobivanju participantsov: ", error);
        res.status(500).send("Error pri pridobivanju participantsov");
    }
})

async function constructParticipantsArray(participants) {
    let participantsData = [];

    for (const participant of participants) {
        const response = await fetch(`http://localhost:6500/user/getUsernameById?userId=${participant}`)
        if (!response.ok) {
            throw new Error('Error fetching participants');
        }
        const data = await response.json();
        participantsData.push(data);
    }

    return participantsData;
}

router.post('/createPlan', async (req, res) => {
    try {
        let { destinationId, planName, planDescription, startingPoint, endPoint, intermediatePoints, userId } = req.body;





        await db.collection('plans').add({

            destinationid: destinationId,
            plan_name: planName,
            plan_description: planDescription,
            starting_point: {
                latitude: startingPoint.latitude,
                longitude: startingPoint.longitude
            },
            end_point: {
                latitude: endPoint.latitude,
                longitude: endPoint.longitude
            },
            intermediate_points: intermediatePoints.map(point => ({
                latitude: point.latitude,
                longitude: point.longitude
            })),
            userid: userId
        });

        res.status(200).json({ message: "Plan was inserted" });
    } catch (error) {
        console.error("Error: ", error);
        res.status(500).json({ message: "Error creating plan" });
    }
});




router.get('/getNacrtiByUser', async (req, res) => {
    const { id } = req.query;

    if (!id) {
        throw new Error('Ni ID-ja userja')
    }

    try {
        const snapshot = await db.collection('plans')
            .where('userid', '==', id)
            .get();

        const nacrti = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.status(200).json(nacrti);

    }
    catch (error) {
        console.error("Error pri pridobivanju nacrtov: ", error);
        res.status(500).send("Error pri pridobivanju nacrtov");
    }
})



router.get('/getPlanById', async (req, res) => {
    try {
        const { planId } = req.query;
        const snapshot = await db.collection('plans').doc(planId).get();
        res.status(200).json(snapshot.data())
    } catch (error) {
        console.error("Error pri pridobivanju nacrtov: ", error);
        res.status(500).send("Error pri pridobivanju nacrtov");
    }
})

router.get('/getSavedPlanById', async (req, res) => {
    try {
        const { planId } = req.query;
        const webToken = req.cookies.auth_token
        let userId;

        jwt.verify(webToken, secretKey, (err, decoded) => {
            if (err) {
                return res.status(403).send("Invalid token");
            }

            userId = decoded.id;
        });

        const snapshot = await db.collection('user').doc(userId).collection('saved_plans').doc(planId).get();
        res.status(200).json(snapshot.data())
    } catch (error) {
        console.error("Error pri pridobivanju nacrtov: ", error);
        res.status(500).send("Error pri pridobivanju nacrtov");
    }
})

router.get('/mapData', async (req, res) => {
    try {
        const { start, end, intermediate } = req.query;
        const response = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${start}&destination=${end}&waypoints=optimize:true|${intermediate}&key=${apiKey}`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching directions' });
    }
})


router.post('/upload/:planId', async (req, res) => {
    try {
        const url = await uploadImage(req.file, req.params.planId);
        res.status(200).send({ url });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

router.post('/likeComment', async (req, res) => {
    try {
        const { commentId } = req.query;
        const { userId, planId } = req.body;

        console.log("PlanId:", planId);
        console.log("CommentId:", commentId);
        console.log("UserId:", userId);

        if (!commentId || !userId || !planId) {
            throw new Error('Missing required parameters');
        }

        const commentRef = db.collection('plans').doc(planId).collection('messages').doc(commentId);
        const commentDoc = await commentRef.get();

        if (!commentDoc.exists) {
            throw new Error('Comment not found');
        }

        let likedUsers = commentDoc.data().liked_users || [];
        console.log("Existing liked_users:", likedUsers);
        console.log("UserId to add:", userId);
        console.log("Type of userId:", typeof userId);

      
        if (!Array.isArray(likedUsers)) {
            throw new Error('liked_users must be an array');
        }

        if (likedUsers.includes(userId)) {
            likedUsers = likedUsers.filter(user => user !== userId);
            await commentRef.update({
                liked_users: likedUsers
            });
            res.status(200).json({ message: 'Comment unliked successfully' });
        } else {
            likedUsers.push(userId);
            await commentRef.update({
                liked_users: likedUsers
            });
            res.status(200).json({ message: 'Comment liked successfully' });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: error.message || 'Something went wrong' });
    }
});


router.post('/createComment', async (req, res) => {
    try {
        const { planId } = req.query;
        const { content, userId, time } = req.body;

        console.log(planId);

        const newComment = {
            content: content,
            liked_users: [],
            time: new Date(time),
            userid: userId
        };

        await db.collection('plans').doc(planId).collection('messages').add(newComment);

        res.status(200).send({ message: 'Comment added successfully' });
    } catch (error) {
        console.error('Error adding comment: ', error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
});

router.get('/getComments', async (req, res) => {
    try {
        const { planId } = req.query;

        const messagesSnapshot = await db.collection('plans').doc(planId).collection('messages').orderBy('time', 'desc').get();
        const comments = messagesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        res.status(200).json(comments);
    } catch (error) {
        console.error('Error getting comments: ', error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
});

const uploadImage = async (file, planId) => {
    const fileName = `${uuidv4()}_${file.originalname}`;
    const fileUpload = bucket.file(fileName);

    const blobStream = fileUpload.createWriteStream({
        metadata: {
            contentType: file.mimetype,
        }
    });

    return new Promise((resolve, reject) => {
        blobStream.on('error', (error) => {
            reject('Something is wrong! Unable to upload at the moment.');
        });

        blobStream.on('finish', async () => {
            const url = `https://storage.googleapis.com/${bucket.name}/${fileUpload.name}`;
            try {
                await db.collection('plans').doc(planId).update({
                    plan_images: firebase.firestore.FieldValue.arrayUnion(url)
                });
                resolve(url);
            } catch (error) {
                reject(error);
            }
        });

        blobStream.end(file.buffer);
    })
}


router.post('/dobiLokacijo', async (req, res) => {
    try {
        const { latitude, longitude, cityName, dateFrom, dateTo } = req.body;

        const latLng = latitude.toString().concat(",", longitude.toString())

        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latLng}&key=${apiKey}`)

        if (!response.ok) {
            return res.status(404).json("Data is not gud!");
        }

        const result = await response.json();

        const countryName = extractCountryName(result);

        const filePath = path.join(__dirname, '../../countriesCapitals.json');
        const jsonData = await fs.readFile(filePath, 'utf8');
        const countries = JSON.parse(jsonData);

        const country = countries.find(c => c.country == countryName);
        const originName = country ? country.capital : "";


        if (originName !== "") {
            console.log(originName, cityName)

            const iataCodes = await runPythonScript(cityName);
            const iataCodesOrigin = await runPythonScript(originName);
        
            console.log("IATA Codes:", iataCodes, "origin:", iataCodesOrigin);
    
            if (iataCodes.length == 0) {
                return res.status(404).json("No iata codes found for that city")
            }
    
            let ticketData = null;
    
            for (const iataCode of iataCodes) {
                const apiResponse = await fetch(`https://api.travelpayouts.com/aviasales/v3/prices_for_dates?currency=eur&origin=${iataCodesOrigin[0]}&destination=${iataCode}&departure_at=${dateFrom}&return_at=${dateTo}&unique=false&sorting=price&direct=false&cy=usd&limit=5&page=1&one_way=true&token=aeccebeaa5b74c24f8d4fa31fccc2c90`);
                const data = await apiResponse.json();
                if (data.data.length !== 0) {
                    console.log(iataCode)
                    ticketData = data.data;
                    break;
                }
            }
            if (!ticketData) {
                return res.status(200).json([{ message: "No tickets available for the provided IATA codes." }]);
            } 

            res.status(200).json(ticketData);

        }
    } catch (error) {
        res.status(500).json({ error: 'Error getting plane tickets' });
    }
})

const runPythonScript = (cityName) => {
    return new Promise((resolve, reject) => {
        const scriptPath = path.join(__dirname, '../../findIATA.py');
        exec(`python "${scriptPath}" ${cityName}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error executing script: ${error.message}`);
                return reject('Error executing script');
            }
            if (stderr) {
                console.error(`Error: ${stderr}`);
                return reject(stderr);
            }
            try {
                const result = JSON.parse(stdout.trim());
                resolve(result);
            } catch (parseError) {
                console.error(`Error parsing JSON: ${parseError.message}`);
                reject('Error parsing script output');
            }
        });
    });
};

function extractCountryName(data) {
    for (let result of data.results) {
        for (let component of result.address_components) {
            if (component.types.includes("country")) {
                return component.long_name;
            }
        }
    }
    return null;
}


module.exports = router;