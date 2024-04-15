document.addEventListener('DOMContentLoaded', function() {
    // Obtener los botones de login y register
    const loginBtns1 = document.querySelectorAll('.login1');
    const loginBtns2 = document.querySelectorAll('.login2');
    const registerBtn1 = document.querySelector('.register1');
    const registerBtn2 = document.querySelector('.register2');
    

    // Redirigir al usuario al hacer clic en el botón de login
    loginBtns1.forEach(function(btn) {
        btn.addEventListener('click', function() {
            window.location.href = 'login1.html'; // Reemplaza 'login.html' con la ruta correcta al archivo de login
        });
    });

    loginBtns2.forEach(function(btn) {
        btn.addEventListener('click', function() {
            window.location.href = 'login2.html'; // Reemplaza 'login.html' con la ruta correcta al archivo de login
        });
    });

    // Redirigir al usuario al hacer clic en el botón de register1
    registerBtn1.addEventListener('click', function() {
        window.location.href = 'register1.html'; // Reemplaza 'register1.html' con la ruta correcta al archivo de register1
    });

    // Redirigir al usuario al hacer clic en el botón de register2
    registerBtn2.addEventListener('click', function() {
        window.location.href = 'register2.html'; // Reemplaza 'register2.html' con la ruta correcta al archivo de register2
    });
});


