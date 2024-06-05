const express = require('express');
const router = express.Router();
const { db, bucket } = require('../dbConn');

router.get('/getAll', async (req, res) => {
    try {
        const destinacijaSnapshot = await db.collection('destinations').get();
        const destinacije = destinacijaSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.status(200).json(destinacije);
    } catch (error) {
        console.error("Error getting users: ", error);
        res.status(500).send("Error getting users");
    }
});


router.get('/getFiltered', async (req, res) => {
    const { continent, priceRange, climate, searchCriteria } = req.query;

    const continentArray = continent ? continent.split(',') : [];
    const climateArray = climate ? climate.split(',') : [];
    const maxPrice = parseInt(priceRange, 10);


    const destinacijeSnapshot = await db.collection('destinations').get();
    const allDestinations = destinacijeSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    const filteredDestinations = allDestinations.filter(dest => {
        const matchesContinent = continentArray.length === 0 || continentArray.includes(dest.continent);
        const matchesPrice = !maxPrice || dest.price_standard <= maxPrice;
        const matchesClimate = climateArray.length === 0 || climateArray.includes(dest.climate);
        const matchesSearchCriteria = !searchCriteria || dest.destination_name.toLowerCase().includes(searchCriteria.toLowerCase());

        return matchesContinent && matchesPrice && matchesClimate && matchesSearchCriteria;
    });

    res.status(200).json(filteredDestinations);

})

router.get('/getDestinationById', async (req, res) => {
    try {
        const { destinationId } = req.query;

        const destinationSnapshot = await db.collection('destinations').doc(destinationId).get();
        const destinationData = destinationSnapshot.data();

        res.status(200).json(destinationData.destination_name)

    } catch (error) {
        console.error("Error getting destination: ", error);
        res.status(500).send("Error getting users");
    }
})

router.get('/getDestinationIdByName', async (req, res) => {
    try {
        const { destinationName } = req.query;

        const destinationSnapshot = await db.collection('destinations').where('destination_name', '==', destinationName).limit(1).get();
        if (!destinationSnapshot.empty) {
            const document = destinationSnapshot.docs[0];
            res.status(200).json(document.id);
        } else {
            console.log("No matching document found.");
            res.status(404).json("ni blou")
        }
    } catch (error) {
        console.error("Error getting destination: ", error);
        res.status(500).send("Error getting users");
    }
})




module.exports = router;