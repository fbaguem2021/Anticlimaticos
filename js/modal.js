let eliminaModal = document.getElementById("eliminaModal");

eliminaModal.addEventListener('shown.bs.modal', event => {
    let button = event.relatedTarget;
    let id = button.getAttribute("data-bs-id");
    eliminaModal.querySelector('.modal-footer #id').value = id;
});