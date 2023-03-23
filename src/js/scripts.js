const items = document.querySelectorAll(`.js-list-item`);
let openList = document.querySelector(`.questions__item--open`);



const open = (item) => {
    item.classList.add(`questions__item--open`)
}

const close = (item) => {
    item.classList.remove(`questions__item--open`)
}


items.forEach(item => {
    item.addEventListener(`click`, (e) => {


        if (!item.classList.contains(`questions__item--open`)) {
            items.forEach(el => {
                el.classList.remove(`questions__item--open`)
            })
            open(item);
        } else {
            close(item)
        }
    })
} )