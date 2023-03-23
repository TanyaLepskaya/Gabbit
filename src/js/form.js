let form = document.querySelector(`.my-contacts__form-info`);
let formBlock = document.querySelector(`.my-contacts__form`);

form.addEventListener(`submit`, (e) => {
    e.preventDefault();

    let formData = {
        name: document.querySelector(`.my-contacts__input-name`).value,
        contact: document.querySelector(`.my-contacts__input-contact`).value,
        comment: document.querySelector(`.my-contacts__input-wide`).value
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/send.php', true) //Поменять адрес если не будет работать
    xhr.setRequestHeader(`Content-Type`, `application/x-www-form-urlencoded; charset=UTF-8`);   
    xhr.send('name=' + encodeURIComponent(formData.name) + '&contact=' + encodeURIComponent(formData.contact) + '&comment=' + encodeURIComponent(formData.comment));
    // e.target.reset(); 
    formBlock.classList.add(`my-contacts__form--send`);
})