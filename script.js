document.addEventListener('DOMContentLoaded', function() {
    let clickCount = 0;
    const catButton = document.getElementById('cat-clicker');
    const catImage = document.getElementById('cat-image');

    // Incrementar contador al hacer clic en el botón
    catButton.addEventListener('click', function() {
        clickCount++;
        catButton.textContent = `Caricias a la ñeca: ${clickCount}`;
    });

    // Incrementar contador al hacer clic en la imagen del gato
    catImage.addEventListener('click', function() {
        clickCount++;
        catButton.textContent = `Caricias a la ñeca: ${clickCount}`;
    });
});
