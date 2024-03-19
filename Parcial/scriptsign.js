document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationForm');
    const registerButton = document.getElementById('registerButton');

    registerButton.addEventListener('click', function () {
        if (validateForm()) {
            const formData = {
                firstName: document.getElementById('firstName').value.trim(),
                lastName: document.getElementById('lastName').value.trim(),
                phone: document.getElementById('phone').value.trim(),
                email: document.getElementById('email').value.trim(),
                estrato: document.getElementById('estrato').value.trim(),
                fechaNacimiento: document.getElementById('fechaNacimiento').value.trim(),
                grupoSanguineo: document.getElementById('grupoSanguineo').value.trim(),
                genero: document.querySelector('input[name="genero"]:checked').value.trim(),
                actividadesFavoritas: getCheckedActivities()
            };

            console.log('Datos del formulario:', formData);
            alert('¡Formulario válido! Datos enviados: \n\n' + JSON.stringify(formData, null, 4));
        }
    });

    function validateForm() {
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const email = document.getElementById('email').value.trim();
        const fechaNacimiento = document.getElementById('fechaNacimiento').value.trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const fechaRegex = /^\d{4}-\d{2}-\d{2}$/;

        if (firstName === '' || lastName === '' || phone === '' || email === '' || fechaNacimiento === '') {
            alert('Todos los campos son obligatorios.');
            return false;
        }

        if (!emailRegex.test(email)) {
            alert('El email no es válido.');
            return false;
        }

        if (!fechaRegex.test(fechaNacimiento)) {
            alert('La fecha de nacimiento no es válida.');
            return false;
        }

        return true;
    }

    function getCheckedActivities() {
        const checkboxes = document.querySelectorAll('input[name="actividadesFavoritas"]:checked');
        const activities = [];
        checkboxes.forEach(function (checkbox) {
            activities.push(checkbox.value);
        });
        return activities;
    }
});

function redirectToAnotherPage() {
    // Redirige al usuario a parci2.html
    window.location.href = "parci2.html";
}