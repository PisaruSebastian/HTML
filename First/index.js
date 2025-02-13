let scale = 1;

document.getElementById('no').addEventListener('click', function() {
    // Move the "No" button to a new position
    const noButton = document.getElementById('no');
    noButton.style.position = 'absolute';
    noButton.style.top = Math.random() * window.innerHeight + 'px';
    noButton.style.left = Math.random() * window.innerWidth + 'px';

    // Increase the size of the "Yes" button
    const yesButton = document.querySelector('.yes');
    scale += 0.5;
    yesButton.style.transform = `scale(${scale})`;
});