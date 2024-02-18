import gameDate from "./gameData.js";
import {
  caseUp,
  caseDown,
  correctAnswer
} from "./checkAnswer.js";
import gameData from "./gameData.js";

export default function gameStart() {

  const $numbers = document.getElementById(numbers);

  const makeIcon = () => {

    const $frag = document.createDocumentFragment();

    for (let n = 1; n <= 100; n++) {
      const $icon = document.createElement('div');
      $icon.textContent = n;
      $icon.dataset.iconNumbers = n;
      $frag.appendChild($icon);
    }
    $numbers.appendChild($frag);

  }

  makeIcon();

  $numbers.onclick = e => {
    if(!e.target.matches('$numbers .icon') return;

    gameData.answer = +e.target.dataset.iconNumbers;

    checkNumber(e.target)

  };


  

}

function checkNumber($target){

  const {secret, answer} = ganmeData;

  if(secret === answer){
    correctAnswer($target);
  }else if(secret > answer){
    caseUp($target);
  }


}




