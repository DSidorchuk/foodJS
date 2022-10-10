export class Menu {
    constructor (img, alt, subtitle, descr, price){
        this.img = img,
        this.alt = alt,
        this.subtitle = subtitle,
        this.descr = descr,
        this.price = price;
    };

    render (container){
        const div = document.createElement('div');
        div.classList.add('menu__item');
        div.style.width = '320px';
        div.style.height = '486px';

        div.innerHTML = `
        <img src="${this.img}" alt="${this.alt}">
        <h3 class="menu__item-subtitle">${this.subtitle}</h3>
        <div class="menu__item-descr">${this.descr}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
        </div>
        `;
        container.append(div);
    }

}

