// =========================
// AUTENTICACIÓN
// =========================

/**
 * Valida el formulario de inicio de sesión
 * @param {string} usuario - Usuario ingresado
 * @param {string} password - Contraseña ingresada
 * @returns {boolean} - True si es válido
 */
function validarLoginForm(usuario, password) {
    let esValido = true;
    const usuarioError = document.getElementById('usuarioError');
    const passwordError = document.getElementById('passwordError');

    // Limpiar mensajes de error previos
    if (usuarioError) usuarioError.textContent = '';
    if (passwordError) passwordError.textContent = '';

    // Validar usuario
    if (!usuario || usuario.trim().length === 0) {
        if (usuarioError) usuarioError.textContent = 'El usuario es requerido';
        esValido = false;
    } else if (usuario.trim().length < 3) {
        if (usuarioError) usuarioError.textContent = 'El usuario debe tener al menos 3 caracteres';
        esValido = false;
    }

    // Validar contraseña
    if (!password || password.length === 0) {
        if (passwordError) passwordError.textContent = 'La contraseña es requerida';
        esValido = false;
    } else if (password.length < 6) {
        if (passwordError) passwordError.textContent = 'La contraseña debe tener al menos 6 caracteres';
        esValido = false;
    }

    return esValido;
}

/**
 * Valida el formulario de recuperación de contraseña
 * @param {string} usuario - Usuario ingresado
 * @returns {boolean} - True si es válido
 */
function validarRecuperarForm(usuario) {
    let esValido = true;
    const usuarioError = document.getElementById('usuarioRecuperarError');

    if (usuarioError) usuarioError.textContent = '';

    if (!usuario || usuario.trim().length === 0) {
        if (usuarioError) usuarioError.textContent = 'El usuario es requerido';
        esValido = false;
    } else if (usuario.trim().length < 3) {
        if (usuarioError) usuarioError.textContent = 'El usuario debe tener al menos 3 caracteres';
        esValido = false;
    }

    return esValido;
}

/**
 * Maneja el envío del formulario de login
 * @param {Event} e - Evento del formulario
 */
function manejarLogin(e) {
    e.preventDefault();

    const usuario = document.getElementById('usuario')?.value || '';
    const password = document.getElementById('password')?.value || '';

    if (validarLoginForm(usuario, password)) {
        // Guardar sesión en localStorage (desarrollo)
        localStorage.setItem('usuario', usuario);
        localStorage.setItem('sesionActiva', 'true');

        // Redirigir a dashboard
        window.location.href = 'dashboard.html';
    }
}

/**
 * Maneja el envío del formulario de recuperación
 * @param {Event} e - Evento del formulario
 */
function manejarRecuperar(e) {
    e.preventDefault();

    const usuario = document.getElementById('usuarioRecuperar')?.value || '';

    if (validarRecuperarForm(usuario)) {
        alert(`Se ha enviado un enlace de recuperación a ${usuario}@institucion.com`);
        window.location.href = 'index.html';
    }
}

// Inicializar event listeners cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const recuperarForm = document.getElementById('recuperarForm');

    if (loginForm) {
        loginForm.addEventListener('submit', manejarLogin);
    }

    if (recuperarForm) {
        recuperarForm.addEventListener('submit', manejarRecuperar);
    }
});