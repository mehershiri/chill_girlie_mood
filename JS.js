// script.js
function updateMood() {
    const mood = document.getElementById('moodInput').value.toLowerCase();
    const memeCharacter = document.getElementById('memeCharacter');
    const memeContainer = document.querySelector('.meme-container');

    let imageUrl = 'girlie.jpg';

    switch (mood) {
        case 'chill':
            imageUrl = 'chill.jpg';
            memeContainer.style.borderColor = '#87CEEB'; 
            break;
        case 'happy':
            imageUrl = 'happy.jpg';
            memeContainer.style.borderColor = '#FF69B4'; 
            break;
        case 'sad':
            imageUrl = 'sad.jpg';
            memeContainer.style.borderColor = '#87CEFA';
            break;
        case 'angry':
            imageUrl = 'angry.jpg';
            memeContainer.style.borderColor = '#FF0000';
            break;
        case 'anxious':
            imageUrl = 'anxious.png';
            memeContainer.style.borderColor = '#F08080'; 
            break;
        case 'hungry':
            imageUrl = 'hungry.jpg';
            memeContainer.style.borderColor = '#FF0000';
            break;
        case 'stressed':
            imageUrl = 'stress.jpg';
            memeContainer.style.borderColor = '#967BB6'; 
            break;
        case 'cozy':
            imageUrl = 'cozy.jpg';
            memeContainer.style.borderColor = '#E6E6FA'; 
            break;
        case 'working':
            imageUrl = 'work.jpg';
            memeContainer.style.borderColor = '#DCD0FF';
            break;
        case 'broke':
            imageUrl = 'broke.jpg';
            memeContainer.style.borderColor = '#87CEEB';
            break;
        default:
            imageUrl = 'girlie.png';
            memeContainer.style.borderColor = '#9E5D8E'; 
            break;
    }


    memeCharacter.style.backgroundImage = `url('${imageUrl}')`;
}
document.addEventListener('DOMContentLoaded', () => {
    const memeCharacter = document.getElementById('memeCharacter');
    memeCharacter.style.backgroundImage = "url('girlie.png')";
});
