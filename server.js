const express = require('express');
const bodyParser = require('body-parser');
const schedule = require('node-schedule');
const emailjs = require('emailjs');

const app = express();
app.use(bodyParser.json());

// Endpoint to receive form submissions
app.post('/schedule-email', (req, res) => {
    const { email, time } = req.body;

    // Schedule the email sending task
    scheduleEmail(email, time);

    res.json({ message: 'Email scheduled successfully.' });
});

// Function to schedule email sending
function scheduleEmail(email, time) {
    schedule.scheduleJob(time, () => {
        sendEmail(email);
    });
}

// Function to send email
function sendEmail(email) {
    // Fetch a random dad joke and send email using EmailJS
    // Make sure to replace placeholders with actual data
    // emailjs.send(...);
}

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


// server.mjs or server.js (with "type": "module" in package.json)

import express from 'express';
import bodyParser from 'body-parser';
import schedule from 'node-schedule';
import emailjs from 'emailjs';

// Your server-side code using the imported modules
