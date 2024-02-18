
import gameData from "./gameData.js";
import { caseUp, caseDown, correctAnswer } from "./checkAnswer.js"

export default function gameStart(){

  const $numbers = document.getElementById('number');

  const makeIcon = () => {

    const $frag = document.createDocumentFragment();

    for(let n=1; n<=100; n++){
      const $icon = document.createElement('div');
      $icon.classList.add('icon');
      $icon.textContent = n;
      $icon.dataset.iconNumber = n;

      $frag.appendChild($icon);
    }
    $numbers.appendChild($frag);

  }

}

makeIcon();
$numbers.onclick = e =>{

  if(!e.target.matches('#number .icon')) return;

  gameData.answer = +e.target.dataset.icon


}