document.addEventListener('DOMContentLoaded', function() {
    const go_home = document.querySelector('.go_home')
    const under = document.querySelectorAll('.mb-3.under') // Cambiado aquí

    under.forEach(function(button) { // Iteramos sobre cada botón
        button.addEventListener('click', function(event){
            window.location.href = 'under_construction.html'
        });
    });

    go_home.addEventListener('click', function(event){
        window.location.href = 'index.html'
    });
});