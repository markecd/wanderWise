const express = require('express');
const router = express.Router();
const db = require('../dbConn')

router.get('/getAll', async (req, res) => {
    try {
        const destinacijaSnapshot = await db.collection('destinations').get();
        const destinacije = destinacijaSnapshot.docs.map(doc => doc.data());
 
        res.status(200).json(destinacije);
    } catch (error) {
        console.error("Error getting users: ", error);
        res.status(500).send("Error getting users");
    }
});


router.get('/getFiltered', async (req, res) => {
    const { continent, priceRange, climate } = req.query;

    const continentArray = continent ? continent.split(',') : [];
    const climateArray = climate ? climate.split(',') : [];
    const maxPrice = parseInt(priceRange, 10);


    const destinacijeSnapshot = await db.collection('destinations').get();
    const allDestinations = destinacijeSnapshot.docs.map(doc => doc.data());

    const filteredDestinations = allDestinations.filter(dest => {
        const matchesContinent = continentArray.length === 0 || continentArray.includes(dest.continent);
        const matchesPrice = !maxPrice || dest.price_standard <= maxPrice;
        const matchesClimate = climateArray.length === 0 || climateArray.includes(dest.climate);

        return matchesContinent && matchesPrice && matchesClimate;
    });

    res.status(200).json(filteredDestinations);
    
})






module.exports = router;