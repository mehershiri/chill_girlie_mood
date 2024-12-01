// script.js
function updateMood() {
    const mood = document.getElementById('moodInput').value.toLowerCase();
    const memeCharacter = document.getElementById('memeCharacter');
    const memeContainer = document.querySelector('.meme-container');

    // Set default image
    let imageUrl = 'images/girlie.jpg';

    // Change border color and image based on mood
    switch (mood) {
        case 'chill':
            imageUrl = 'images/chill.jpg';
            memeContainer.style.borderColor = '#87CEEB'; 
            break;
        case 'happy':
            imageUrl = 'images/happy.jpg';
            memeContainer.style.borderColor = '#FF69B4'; 
            break;
        case 'sad':
            imageUrl = 'images/sad.jpg';
            memeContainer.style.borderColor = '#87CEFA'; // Light blue
            break;
        case 'angry':
            imageUrl = 'images/angry.jpg';
            memeContainer.style.borderColor = '#FF0000'; // Red
            break;
        case 'anxious':
            imageUrl = 'images/anxious.png';
            memeContainer.style.borderColor = '#F08080'; // Light coral
            break;
        case 'hungry':
            imageUrl = 'images/hungry.jpg';
            memeContainer.style.borderColor = '#FF0000'; // Light coral
            break;
        case 'stressed':
            imageUrl = 'images/stress.jpg';
            memeContainer.style.borderColor = '#967BB6'; // Light coral
            break;
        case 'cozy':
            imageUrl = 'images/cozy.jpg';
            memeContainer.style.borderColor = '#E6E6FA'; // Light coral
            break;
        case 'working':
            imageUrl = 'images/work.jpg';
            memeContainer.style.borderColor = '#DCD0FF'; // Light coral
            break;
        case 'broke':
            imageUrl = 'images/broke.jpg';
            memeContainer.style.borderColor = '#87CEEB'; // Light coral
            break;
        default:
            imageUrl = 'images/girlie.png';
            memeContainer.style.borderColor = '#9E5D8E'; // Default magenta-like color
            break;
    }

    // Update the CSS background image with the selected image
    memeCharacter.style.backgroundImage = `url('${imageUrl}')`;
}
document.addEventListener('DOMContentLoaded', () => {
    const memeCharacter = document.getElementById('memeCharacter');
    memeCharacter.style.backgroundImage = "url('images/girlie.png')";
});