// Inicializar animaciones de scroll
AOS.init({ duration: 1000, once: true });

// Efecto de Maquina de Escribir para el perfil
const text = "SISTEMAS // FULL_STACK // IA_DATA";
let i = 0;
function typeWriter() {
    if (i < text.length) {
        document.getElementById("type-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}
window.onload = typeWriter;

// Efecto de transparencia en el Nav al bajar
window.onscroll = function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) nav.style.background = '#020205';
    else nav.style.background = 'transparent';
};