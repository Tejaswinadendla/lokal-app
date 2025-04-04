const express = require('express');
const axios = require('axios');
const Job = require('../models/Job');

const router = express.Router();

// Fetch jobs from external API
router.get('/', async (req, res) => {
    try {
        const { page = 1 } = req.query;
        const response = await axios.get(`https://testapi.getlokalapp.com/common/jobs?page=${page}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching jobs' });
    }
});

// Bookmark a job
router.post('/bookmarks', async (req, res) => {
    try {
        const job = new Job(req.body);
        await job.save();
        res.status(201).json(job);
    } catch (error) {
        res.status(500).json({ message: 'Error saving job' });
    }
});

// Get all bookmarked jobs
router.get('/bookmarks', async (req, res) => {
    try {
        const jobs = await Job.find();
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching bookmarks' });
    }
});

module.exports = router;
