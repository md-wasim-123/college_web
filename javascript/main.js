const corros = document.querySelector('.corros')
// console.log(iconBox);

const menu = document.querySelector('.menu');
const nuvbar = document.querySelector('.nav');

menu.addEventListener('click', function () {
  nuvbar.classList.add('show');
  menu.style.display = 'none';
  corros.style.display = 'block';
});


corros.addEventListener('click', function () {
  nuvbar.classList.remove('show');
  menu.style.display = 'block';
  corros.style.display = 'none';

})



const box = document.querySelector('.contBox');

const scrollover = new IntersectionObserver((entrise, observer) => {

    const [entry] = entrise;
    //   console.log(entry)
    if (!entry.isIntersecting) return;

    const allNumber = document.querySelectorAll(".count");
    const speed = 200;

    allNumber.forEach((ele) => {
        const apdatenumber = () => {
            const targetnumber = parseInt(ele.dataset.number);
            const initial = parseInt(ele.innerText);
            // console.log(initial);
            const incre = Math.ceil(targetnumber / speed);
            // console.log(incre);

            if (initial < targetnumber) {
                ele.innerText = `${initial + incre}+`;
                setTimeout(apdatenumber, 10);
            }
        }
        apdatenumber();
    });

},
    {
        root: null,
        threshold: 0,
    });

scrollover.observe(box);



 