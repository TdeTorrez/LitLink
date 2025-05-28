const logoK = document.getElementById('logoK');
const textoLitlink = document.getElementById('texto-litlink');
const contenedorLogo = document.querySelector('.contenedor-logo');
const wrapperFormularios = document.querySelector('.wrapper-formularios');
const formularioRegistro = document.getElementById('formulario-registro');
const formularioLogin = document.getElementById('formulario-login');
const body = document.body;
const footer = document.getElementById('footer');

let registroVisible = false;
let loginVisible = false;
footer.style.display = 'block';

logoK.addEventListener('click', () => {
    if (!registroVisible && !loginVisible) {
        contenedorLogo.classList.add('transicion-izquierda');
        wrapperFormularios.classList.add('mostrar-formularios');
        formularioRegistro.classList.add('activo');
        formularioLogin.classList.remove('activo');
        textoLitlink.style.display = 'none';
        footer.style.display = 'none'; 
        registroVisible = true;

        body.classList.remove('mostrar-login');
        body.classList.add('mostrar-registro');

    } else if (registroVisible && !loginVisible) {
        contenedorLogo.classList.remove('transicion-izquierda');
        contenedorLogo.classList.add('transicion-derecha');
        formularioRegistro.classList.remove('activo');
        formularioLogin.classList.add('activo');
        registroVisible = false;
        loginVisible = true;

        body.classList.remove('mostrar-registro');
        body.classList.add('mostrar-login');

    } else if (!registroVisible && loginVisible) {
        contenedorLogo.classList.remove('transicion-derecha');
        contenedorLogo.classList.add('transicion-izquierda');
        formularioLogin.classList.remove('activo');
        formularioRegistro.classList.add('activo');
        registroVisible = true;
        loginVisible = false;

        body.classList.remove('mostrar-login');
        body.classList.add('mostrar-registro');
    }
});
