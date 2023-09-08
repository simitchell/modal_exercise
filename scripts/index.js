document.addEventListener('DOMContentLoaded', function () {
    console.log("Document Ready");

    const overlay = this.querySelector('.overlay');
    const classses = overlay.classList;
    setTimeout(() => {
        classses.toggle("hidden");
    }, 3000);

    const closeModal = document.querySelector('#closeModal');
    closeModal.addEventListener('click', function() {
        classses.toggle('hidden');
    })
});

