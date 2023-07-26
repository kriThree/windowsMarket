import images from "./images";

const slider = document.getElementById('indexSlogansSlider');
const nextButton = document.getElementById('sliderButtonNext');
const backButton = document.getElementById('sliderButtonBack');
const sliderSize = getWidth();
let sliderCount = 0;

function getWidth(){
    
    const windowWidth = window.innerWidth;
    console.log(windowWidth);
    if(windowWidth >= 515){
        return 400; 
    }
    return 250;
}

function updateSlider(){
    nextButtonChecking();
    backButtonChecking();
    slider.style.transform = `translate(${-sliderSize * sliderCount}px)`;
}
function backButtonChecking(){
    if(sliderCount === 0) return backButton.style.opacity = '0.5' ;
    backButton.style.opacity = '1' ;
}
function nextButtonChecking(){
    if(sliderCount === 10)return nextButton.style.opacity = '0.5';
    nextButton.style.opacity = '1';
}

for (let index = 0; index < 11; index++) {
    const element = `<div class = "slogans__slider-element"><img src = "${images[index]}"alt = "#"/>${index + 1}</div>`;
    slider.innerHTML += element;
    
}
backButton.addEventListener('click',()=>{
    if(sliderCount > 0) sliderCount--; ;
    updateSlider();
});

nextButton.addEventListener('click',()=>{
    if(sliderCount < 10) sliderCount++;
    updateSlider();
});
slider.addEventListener('click',()=>{
    console.log('e');
})

console.log(slider);

updateSlider();
backButtonChecking();