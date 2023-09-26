const nombreBtn = document.getElementById('nombreBtn');
const nombreSection = document.getElementById('nombreSection');
const preguntaContainer = document.getElementById('preguntaContainer');
const siBtn = document.getElementById('siBtn');
const noBtn = document.getElementById('noBtn');
const respuestaContainer = document.getElementById('respuestaContainer');
const respuestaTexto = document.getElementById('respuestaTexto');
const notificationContainer = document.getElementById('notificationContainer');
const notificationText = document.getElementById('notificationText');
const closeNotificationBtn = document.getElementById('closeNotification');
const preguntaTexto = document.getElementById('preguntaTexto');

nombreBtn.addEventListener('click', () => {
    const nombre = document.getElementById('nombreInput').value;
    nombreSection.classList.add('hidden');
    preguntaContainer.classList.remove('hidden');
    preguntaTexto.innerHTML = `${nombre}, ¿Aceptarías ser la pareja de Karol?`;
});

siBtn.addEventListener('click', () => {
    respuestaTexto.innerHTML = '';
    respuestaContainer.classList.add('hidden');
    notificationText.innerHTML = '¡Sabía que aceptarías! Ahora, invítame algo.';
    notificationContainer.classList.remove('hidden');
});

noBtn.addEventListener('mouseover', () => {
    const randomX = Math.random() * (window.innerWidth - 100);
    const randomY = Math.random() * (window.innerHeight - 30);
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});

noBtn.addEventListener('click', () => {
    let mouseX = event.clientX;
    let mouseY = event.clientY;
    let newPosX = Math.random() * (window.innerWidth - 100);
    let newPosY = Math.random() * (window.innerHeight - 30);

    while (Math.abs(newPosX - mouseX) < 150 && Math.abs(newPosY - mouseY) < 50) {
        newPosX = Math.random() * (window.innerWidth - 100);
        newPosY = Math.random() * (window.innerHeight - 30);
    }

    noBtn.style.left = `${newPosX}px`;
    noBtn.style.top = `${newPosY}px`;
});

respuestaContainer.addEventListener('click', () => {
    respuestaContainer.classList.remove('visible');
});

notificationContainer.addEventListener('click', () => {
    notificationContainer.classList.add('hidden');
});

closeNotificationBtn.addEventListener('click', () => {
    notificationContainer.classList.add('hidden');
});



