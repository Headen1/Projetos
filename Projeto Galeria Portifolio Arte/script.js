document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('imageModal');
    const modalImg = modal.querySelector('.modal-img');

    modal.addEventListener('show.bs.modal', (event) => {
        const trigger = event.relatedTarget; // Elemento que acionou o modal
        const imageSrc = trigger.getAttribute('data-bs-image'); // Caminho da imagem
        modalImg.src = imageSrc; // Define a imagem no modal
    });

    modal.addEventListener('hidden.bs.modal', () => {
        modalImg.src = ''; // Remove o caminho da imagem ao fechar o modal
    });
});
