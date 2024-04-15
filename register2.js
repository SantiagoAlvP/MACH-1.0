document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm2');
    const go_home = document.querySelector('.go_home')

    go_home.addEventListener('click', function(event){
        window.location.href = 'index.html'
    })

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío del formulario

        // Redirigir a otro HTML
        window.location.href = 'index.html'; // Reemplaza 'otro.html' con la ruta correcta al archivo que deseas redirigir
    });
});
