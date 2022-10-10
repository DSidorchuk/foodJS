const slider = (currentDigitSelector, totalDigitSelector, nextRowSelector, prevRowSelector, slidesSelector) => {
    const current = document.querySelector(currentDigitSelector),
          total = document.querySelector(totalDigitSelector),
          next = document.querySelector(nextRowSelector),
          prev = document.querySelector(prevRowSelector),
          slides = document.querySelectorAll(slidesSelector);

    activeSlide(+current.textContent);

    next.addEventListener('click', () => {
        slide(1);
        activeSlide(+current.textContent);
    })

    prev.addEventListener('click', () => {
        slide(-1);
        activeSlide(+current.textContent);
    })

    function slide(direction){
        const max = +total.textContent;
        let curr = +current.textContent;
        if (direction > 0){
            if((curr + direction) > max){
                curr = 1;
            }else {
                curr++;
            }
        } else {
            if((curr + direction) <= 0){
                curr = 4;
            }else {
                curr--;
            }
        }
        current.textContent = `0${curr}`;
    }

    function activeSlide(index){
        index --; 
        slides.forEach((img, i) => {
            img.style.display = 'none';
            if (i == index) {
                img.style.display = 'block';
            }
        })
    }
}

export default slider;