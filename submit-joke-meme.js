document.getElementById('joke-meme-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload on form submission

    // Get the joke or meme from the input field
    const jokeOrMeme = document.getElementById('joke-meme-input').value;

    // Check if input is not empty
    if (jokeOrMeme.trim() !== "") {
        // Retrieve existing jokes/memes from localStorage (if any)
        let jokesMemes = JSON.parse(localStorage.getItem('jokesMemes')) || [];

        // Add the new joke or meme to the array with a "user-made" flag
        jokesMemes.push({ text: jokeOrMeme, userMade: true });

        // Save the updated array back to localStorage
        localStorage.setItem('jokesMemes', JSON.stringify(jokesMemes));

        // Display a success message
        document.getElementById('response-message').innerText = "Your joke or meme has been submitted successfully!";
        document.getElementById('response-message').style.color = 'green';

        // Clear the input field
        document.getElementById('joke-meme-input').value = "";
    } else {
        // Display an error message if the input is empty
        document.getElementById('response-message').innerText = "Please enter a valid joke or meme!";
        document.getElementById('response-message').style.color = 'red';
    }
});
