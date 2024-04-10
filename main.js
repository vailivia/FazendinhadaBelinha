function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas.forEach(tecla => {
    tecla.addEventListener('click', function() {
        const instrumento = this.classList[1];
        const idAudio = `#som_${instrumento}`;
        tocaSom(idAudio);
    });
});
