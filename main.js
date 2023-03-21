const tiles = document.querySelector('.tiles');
const roundBtn = document.querySelector('#round-btn');
const body = document.body;


function hoverPlay() {
    roundBtn.style.transform = 'scale(1)'
}

function hoverNone() {
    roundBtn.style.transform = 'scale(0)'
}


function x() {
    alert("welcome Jerome!")
}

// addEventListener('load', ()=>{

// })


const customizeBox = document.querySelector('.customize-box')
const customBtn = document.getElementById('custom-btn');
const colorName = document.querySelector('.color-name');

//colors
const black = document.getElementById('black');

function showCustomSec() {

}

colorName.addEventListener('click', () => {

    colorName.style.border = '3px solid black';
    colorName.isSameNode.style.body = '1px solid red'
})


const cancelBtn = document.getElementById('cancel-btn')

cancelBtn.addEventListener('click', () => {
    customizeBox.style.display = 'none'
})

const customSec = document.querySelector('.custom-sec')

customSec.addEventListener('click', () => {
    customizeBox.style.display = 'block'
    customizeBox.setAttribute('id', 'modalAnimation')

})



const searchBtn = document.getElementById('src-icon');
const searchInput = document.getElementById('search-input');

searchBtn.addEventListener('click', () => {
    const query = searchInput.value;
    window.location.href = `https://www.google.com/search?q=${query}`;
});