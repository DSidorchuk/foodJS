const modal = (modalSelector, modalCloseSelector, triggersSelector) => {
    const modal = document.querySelector(modalSelector),
          modal_close = document.querySelector(modalCloseSelector),
          triggers = document.querySelectorAll(triggersSelector),
          timer = setTimeout(openModal, 400000);
        

    function openModal() {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
    
    triggers.forEach(btn => {
        btn.addEventListener('click', () => {
            openModal();
            clearTimeout(timer);
        });
    })

    modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal') || e.target == modal_close){
            closeModal();
        }
    })


};

export default modal;