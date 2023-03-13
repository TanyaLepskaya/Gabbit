
const items = document.querySelectorAll(`.js-list-item`);

const openList = (item) => {
    item.classList.add(`questions__item--open`)
}

const closeList = (item) => {
    item.classList.remove(`questions__item--open`)
}

items.forEach((item) => {
    const btn = item.querySelector(`.js-btn-list`);
    btn.addEventListener(`click`, (e) => {
        const openWindow = document.querySelector(`.questions__item--open`);
        if (openWindow) {
            openWindow.classList.remove(`questions__item--open`);
        }
        openList(item)
    })
})