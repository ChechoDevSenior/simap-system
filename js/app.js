// =========================
// FUNCIONES PRINCIPALES
// =========================

/**
 * Cierra la sesión del usuario
 */
function cerrarSesion() {
    if (confirm('¿Estás seguro de que deseas cerrar sesión?')) {
        localStorage.removeItem('usuario');
        localStorage.removeItem('sesionActiva');
        window.location.href = 'index.html';
    }
}

/**
 * Verifica si hay una sesión activa
 * @returns {boolean} - True si hay sesión activa
 */
function verificarSesion() {
    const sesionActiva = localStorage.getItem('sesionActiva');
    const usuario = localStorage.getItem('usuario');

    if (!sesionActiva || !usuario) {
        // Redirigir al login si no hay sesión
        if (window.location.pathname !== '/index.html' && !window.location.pathname.includes('recuperar')) {
            window.location.href = 'index.html';
        }
        return false;
    }
    return true;
}

/**
 * Obtiene los datos del usuario actual
 * @returns {Object} - Datos del usuario
 */
function obtenerUsuarioActual() {
    return {
        usuario: localStorage.getItem('usuario') || 'Usuario',
        nombre: 'Sergio Peña',
        grado: 'Capitán',
        cargo: 'Piloto'
    };
}

/**
 * Busca registros por término
 * @param {string} termino - Término de búsqueda
 */
function buscarRegistros(termino) {
    const registros = document.querySelectorAll('.registro');
    const terminoLower = termino.toLowerCase();

    registros.forEach(registro => {
        const texto = registro.textContent.toLowerCase();
        if (texto.includes(terminoLower)) {
            registro.style.display = 'block';
        } else {
            registro.style.display = 'none';
        }
    });
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Verificar sesión en páginas protegidas
    if (window.location.pathname.includes('dashboard') || 
        window.location.pathname.includes('ordenes') || 
        window.location.pathname.includes('registros')) {
        verificarSesion();
    }

    // Configurar búsqueda de registros
    const buscarInput = document.getElementById('buscarRegistro');
    if (buscarInput) {
        buscarInput.addEventListener('input', (e) => {
            buscarRegistros(e.target.value);
        });
    }
});