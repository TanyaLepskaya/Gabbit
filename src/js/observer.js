let hiddenEl = document.querySelectorAll(`.show-el`);

let ShowEl = ((entries) => {
    entries.forEach(entry => {
        let {target, isIntersecting} = entry;
        if (isIntersecting) {
            target.style.opacity = '1'
            target.style.transform = 'translateY(0px)'
        }
    })
})

let options = {
    threshold: 1
}


let observer = new IntersectionObserver(ShowEl, options);

hiddenEl.forEach(item => {
    observer.observe(item);
})