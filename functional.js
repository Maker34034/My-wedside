const button_1 = document.getElementById('buttonVHS');

// Обработчик события нажатия на кнопку
button_1.addEventListener('click', function() {
    window.location.href = 'Web tape.html'; 
});

const button_2 = document.getElementById('buttonART');
button_2.addEventListener('click', function() {
    window.location.href = 'Art.html'; 
});

const button_3 = document.getElementById('buttonCoo');
button_3.addEventListener('click', function() {
    window.location.href = 'Cooperation.html'; 
});

const button_4 = document.getElementById('buttonAlboms');
button_4.addEventListener('click', function() {
    window.location.href = 'alboms_menu.html'; 
});

const button = document.getElementById('buttonGoHome');
button.addEventListener('click', function() {
    window.location.href = 'Main.html'; 
});