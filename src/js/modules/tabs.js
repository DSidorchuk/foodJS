const tabs = (headersSelector, tabContentSelector, active_class) => {
    const headers = document.querySelectorAll(headersSelector),
          content = document.querySelectorAll(tabContentSelector);

    activeHeader(0);
    showContent(0);

    headers.forEach((header, i) => {
        header.addEventListener('click', () =>{
            activeHeader(i);
            showContent(i)
        })
    })

    function activeHeader(index){
        headers.forEach((el, i) => {
            el.classList.remove(active_class);
            if (i == index){
                el.classList.add(active_class)
            }
        })
    }
    function showContent(index){
        content.forEach((el, i) => {
            el.style.display = 'none';
            if (i == index){
                el.style.display = 'block';
            }
        })
    }

}

export default tabs;