
const form = (url, forms) => {
    const status = {
        success: 'Благодарим за запрос! С Вами свяжутся в ближайшее время',
        loading: 'ОТПРАВКА',
        error: 'УПС, ВОЗНИКЛА ОШИБКА'
    };
    
    forms.forEach(elem => {
        elem.addEventListener('submit', (e) => {
            e.preventDefault();
            createRequest(url, elem);
        });
    });

    function  createRequest (url, element){
        const userData = new FormData(element),
              request = {};

        userData.forEach(function(value, key){
            request[key] = value;
        });

        fetch(url, 
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(request)
            })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            statusMessage(status.success);
        })
        .catch(err => {
            statusMessage(status.error);
        });

        element.reset();
    };

    function statusMessage(message){
        const modal = document.querySelector('.modal');
        modal.style.display = 'block';
        modal.innerHTML = `
        <div class="modal__dialog">
            <div class="modal__content">
                <form action="#">
                    <div class="modal__close">×</div>
                    <div class="modal__title">${message}</div>
                </form>
            </div>
        </div> 
        `;
        setTimeout(()=>{
            modal.style.display = 'none'
            document.body.style.overflow = '';
        }, 4000);
        resetModalWindow(modal);
    }

    function resetModalWindow(modal){
        modal =`
        <div class="modal" style="display: none;">
        <div class="modal__dialog">
            <div class="modal__content">
                <form action="#">
                    <div class="modal__close">×</div>
                    <div class="modal__title">Благодарим за запрос! С Вами свяжутся в ближайшее время</div>
                </form>
            </div>
        </div> 
        </div>
        `;
    }

}

export default form;

