let image1 = document.getElementById('img1-container');
let image2 = document.getElementById('img2-container');
let image3 = document.getElementById('img3-container');
let image4 = document.getElementById('img4-container');
let image5 = document.getElementById('img5-container');

function shrink1() {
    image1.style.width = '50%';
    image1.style.transition = 'width 1s';
    image2.style.width = '7%';
    image3.style.width = '7%';
    image4.style.width = '7%';
    image5.style.width = '7%';
}

function shrink2() {
    image1.style.width = '7%';
    image2.style.width = '50%';
    image2.style.transition = 'width 1s';
    image3.style.width = '7%';
    image4.style.width = '7%';
    image5.style.width = '7%';
}

function shrink3() {
    image1.style.width = '7%';
    image2.style.width = '7%';
    image3.style.width = '50%';
    image3.style.transition = 'width 1s';
    image4.style.width = '7%';
    image5.style.width = '7%';
}

function shrink4() {
    image1.style.width = '7%';
    image2.style.width = '7%';
    image3.style.width = '7%';
    image4.style.width = '50%';
    image4.style.transition = 'width 1s';
    image5.style.width = '7%';
}

function shrink5() {
    image1.style.width = '7%';
    image2.style.width = '7%';
    image3.style.width = '7%';
    image4.style.width = '7%';
    image5.style.width = '50%';
    image5.style.transition = 'width 1s';
}

image1.addEventListener('click', shrink1);
image2.addEventListener('click', shrink2);
image3.addEventListener('click', shrink3);
image4.addEventListener('click', shrink4);
image5.addEventListener('click', shrink5);