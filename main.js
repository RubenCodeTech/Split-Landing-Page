document.querySelectorAll('.split').forEach(element => {
    element.addEventListener('mouseover', ()=>{element.classList.add('hoverContainerSplit');})
    element.addEventListener('mouseout', ()=>{element.classList.remove('hoverContainerSplit');})
});



// let left = document.querySelector('.left');
// let right = document.querySelector('.right');
// let container = document.querySelector('.container')

// left.addEventListener('mouseover', splitPageLeft);
// right.addEventListener('mouseover', splitPageRight);

// function splitPageLeft() {
// left.classList.add('leftHover')
// right.classList.remove('rightHover')
// }

// function splitPageRight() {
// left.classList.remove('leftHover')
// right.classList.add('rightHover')
// }

// container.addEventListener('mouseleave', resetSplit);
// function resetSplit(){
//     left.classList.remove('leftHover')
//     right.classList.remove('rightHover')
// }

