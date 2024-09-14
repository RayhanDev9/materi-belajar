const pembungkusTikus = document.getElementsByClassName('pembungkus-tikus');
const pembungkusTanah =document.getElementsByClassName('pembungkus-tanah');
const buttonMulai = document.getElementById('button');
const papanScore = document.getElementById('score');
const audio =document.getElementById('pop');
console.info(pop);

let score = 0 ;
let mulai = 0;

class Tikus {

    munculTikus () {

        const waktuRandom_1 = parseInt(Math.floor((Math.random()+ .3 ) * 4000)) ;
        const waktuRandom_2 = parseInt(Math.floor((Math.random()+ .3 ) * 3000));
        const waktuRandom_3 = parseInt(Math.floor((Math.random()+ .3 ) * 4000));
        const waktuRandom_4 = parseInt(Math.floor((Math.random()+ .3 ) * 3000));
        const waktuRandom_5 = parseInt(Math.floor((Math.random()+ .3 ) * 4000));
        const waktuRandom_6 = parseInt(Math.floor((Math.random()+ .3 ) * 3000));

        const clearInterval_1 = setInterval(() => {
            pembungkusTanah[0].classList.add('muncul');
            console.info(waktuRandom_1 +  'muncul')
        },waktuRandom_1);

        const clearInterval_2 =  setInterval(() => {
            pembungkusTanah[1].classList.add('muncul');
        },waktuRandom_2);

        const clearInterval_3 = setInterval(() => {
            pembungkusTanah[2].classList.add('muncul');
        },waktuRandom_3);

        const clearInterval_4 = setInterval(() => {
            pembungkusTanah[3].classList.add('muncul');
        },waktuRandom_4);

        const clearInterval_5 = setInterval(() => {
            pembungkusTanah[4].classList.add('muncul');
        },waktuRandom_5);

        const clearInterval_6 = setInterval(() => {
            pembungkusTanah[5].classList.add('muncul');
        },waktuRandom_6);

        setTimeout(() => {
            clearInterval(clearInterval_1)
            clearInterval(clearInterval_2)
            clearInterval(clearInterval_3)
            clearInterval(clearInterval_4)
            clearInterval(clearInterval_5)
            clearInterval(clearInterval_6)
        }, 20000);
    }

    hilangTikus () {
        const waktuRandom_1 = parseInt(Math.floor((Math.random() + .23) * 2000));
        const waktuRandom_2 = parseInt(Math.floor((Math.random() + .23) * 3200));
        const waktuRandom_3 = parseInt(Math.floor((Math.random() + .23) * 2000));
        const waktuRandom_4 = parseInt(Math.floor((Math.random() + .23) * 3200));
        const waktuRandom_5 = parseInt(Math.floor((Math.random() + .23) * 2000));
        const waktuRandom_6 = parseInt(Math.floor((Math.random() + .23) * 3200));

        const clearInterval_1 = setInterval(() => {
            pembungkusTanah[0].classList.remove('muncul');
        console.info(waktuRandom_1)
        },waktuRandom_1);

        const clearInterval_2 = setInterval(() => {
            pembungkusTanah[1].classList.remove('muncul');
        },waktuRandom_2);

        const clearInterval_3 = setInterval(() => {
            pembungkusTanah[2].classList.remove('muncul');
        },waktuRandom_3);

        const clearInterval_4 = setInterval(() => {
            pembungkusTanah[3].classList.remove('muncul');
        },waktuRandom_4);

        const clearInterval_5 = setInterval(() => {
            pembungkusTanah[4].classList.remove('muncul');
        },waktuRandom_5);

        const clearInterval_6 = setInterval(() => {
            pembungkusTanah[5].classList.remove('muncul');
        },waktuRandom_6);

        setTimeout(() => {
            clearInterval(clearInterval_1)
            clearInterval(clearInterval_2)
            clearInterval(clearInterval_3)
            clearInterval(clearInterval_4)
            clearInterval(clearInterval_5)
            clearInterval(clearInterval_6)
            mulai = 0;
            score = 0; 
        }, 22000);
    }

    pukulTikus () {
        for(const tikus of pembungkusTikus) {
            tikus.removeEventListener('click', handleClick);
            tikus.addEventListener('click' ,handleClick);
         }
    }
} 

function handleClick() {
    score += 1;
    papanScore.textContent = score;
    audio.play();
    this.parentNode.classList.remove('muncul');
}

buttonMulai.addEventListener('click', () => {
    mulai++;
    papanScore.textContent = 0;

    if (mulai === 1) {
        const hasilTikus = new Tikus();
        hasilTikus.munculTikus();
        hasilTikus.hilangTikus();
        hasilTikus.pukulTikus();
    }
})


