
let parallaxes = document.querySelectorAll(`.parallax`);
let topPadding = 50;

let parallaxEffect = (item, px) => {
    item.style.transform = `translateY(${px}px)`;
}

if (window.innerWidth < 768) {
    parallaxes.forEach((item) => {
        window.addEventListener(`scroll`, (evt) => {
            let {scrollY} = window;
            let Y = ((scrollY + topPadding) - item.offsetTop) * 0.2 ;
            if(item.offsetTop - topPadding <= scrollY) {
                parallaxEffect(item, Y)
            } else {
                parallaxEffect(item, 0)
            }
            
        })
})
}
