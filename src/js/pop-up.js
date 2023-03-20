let header = document.querySelector(`.header`);
let btn = document.querySelector(`.js-popup-btn`);
let links = document.querySelectorAll(`.header__nav-link`);
let body = document.querySelector(`.main__body`);


let modalShow = (modal) => {
    if(modal.classList.contains(`header--open`)) {
        modal.classList.remove(`header--open`);
        body.style.overflowY = `auto`;
    } else {
        modal.classList.add(`header--open`)
        body.style.overflowY = `hidden`;
    }
}

if (window.innerWidth <= 768) {
    btn.addEventListener(`click`, (evt) => {
        modalShow(header)
    })
    
    links.forEach(link => {
        link.addEventListener(`click`, (e) => {
            modalShow(header)
        })
    })
}

