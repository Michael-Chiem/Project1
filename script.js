emailjs.init('e4IMeDjiTLqb2QzFb'); // Replace 'YOUR_USER_ID' with your EmailJS user ID

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('emailForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form values
        var email = document.getElementById('email').value;
        var time = document.getElementById('time').value;

        // Validate email format
        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Schedule email sending logic here
        console.log('Email:', email);
        console.log('Time:', time);

        // Fetch a random dad joke from the icanhazdadjoke API and send email
        fetchDadJokeAndSendEmail(email, time);
    });

    function isValidEmail(email) {
        // Very basic email validation, you might want to use a more robust validation method
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    async function fetchDadJokeAndSendEmail(email, time) {
        try {
            // Fetch a random dad joke from the icanhazdadjoke API
            var response = await fetch('https://icanhazdadjoke.com/', {
                headers: {
                    'Accept': 'application/json'
                }
            });
            var data = await response.json();

            var joke = data.joke;

            // Send email with the dad joke content
            sendEmail(email, joke);
        } catch (error) {
            console.error('Error fetching dad joke:', error);
        }
    }

    function sendEmail(email, joke) {
        // Use EmailJS to send email
        emailjs.send('service_wv4ctg4', 'template_036nw4v', {
            to_email: email,
            joke_content: joke
        })
        .then(function(response) {
            console.log('Email sent:', response);
            alert('Email sent successfully!');
        }, function(error) {
            console.error('Error sending email:', error);
            alert('Failed to send email. Please try again later.');
        });
    }
});
