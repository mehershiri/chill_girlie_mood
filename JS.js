// script.js
function updateMood() {
    const mood = document.getElementById('moodInput').value.toLowerCase();
    const memeCharacter = document.getElementById('memeCharacter');
    const memeContainer = document.querySelector('.meme-container');

    let imageUrl = 'images/girlie.jpg';

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
            memeContainer.style.borderColor = '#87CEFA';
            break;
        case 'angry':
            imageUrl = 'images/angry.jpg';
            memeContainer.style.borderColor = '#FF0000';
            break;
        case 'anxious':
            imageUrl = 'images/anxious.png';
            memeContainer.style.borderColor = '#F08080'; 
            break;
        case 'hungry':
            imageUrl = 'images/hungry.jpg';
            memeContainer.style.borderColor = '#FF0000';
            break;
        case 'stressed':
            imageUrl = 'images/stress.jpg';
            memeContainer.style.borderColor = '#967BB6'; 
            break;
        case 'cozy':
            imageUrl = 'images/cozy.jpg';
            memeContainer.style.borderColor = '#E6E6FA'; 
            break;
        case 'working':
            imageUrl = 'images/work.jpg';
            memeContainer.style.borderColor = '#DCD0FF';
            break;
        case 'broke':
            imageUrl = 'images/broke.jpg';
            memeContainer.style.borderColor = '#87CEEB';
            break;
        default:
            imageUrl = 'images/girlie.png';
            memeContainer.style.borderColor = '#9E5D8E'; 
            break;
    }


    memeCharacter.style.backgroundImage = `url('${imageUrl}')`;
}
document.addEventListener('DOMContentLoaded', () => {
    const memeCharacter = document.getElementById('memeCharacter');
    memeCharacter.style.backgroundImage = "url('images/girlie.png')";
});
