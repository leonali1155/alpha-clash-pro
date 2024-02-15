// function play(){
//     // step 1: hide screen
//     const homeSection=document.getElementById('home-screen');
//     console.log(homeSection);
//     homeSection.classList.add('hidden');
//     // show playground
//     const playgroundSection=document.getElementById('play-ground');
//    playgroundSection.classList.remove('hidden');
//     // console.log(playgroundSection.classList)

// }

function continueGame() {
    const alphabet = getARandomAlphabet();
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerHTML = alphabet;
    setBackgroundColorById(alphabet);
}
function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}
