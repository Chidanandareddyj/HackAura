const express = require('express');
const Profile = require('../models/Profile');
const router = express.Router();

router.post('/', async (req, res) => {
    const profile = new Profile(req.body);
    try {
        await profile.save();
        res.status(201).json(profile);
    } catch (error) {
        res.status(500).json({ error });
    }
});

module.exports = router;
