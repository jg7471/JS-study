import gameData from "./gameData.js"; //함수만 호출
//gameData 호출
import { caseUp, caseDown, correctAnswer } from "./checkAnswer.js"; //여러 함수를 디스트럭쳐링로 불러오기 //caseUp : 이름 변경 가능

//게임이 시작되면 해야할 이름을 정의하는 함수
export default function gameStart() { // default 없을 시 {gameStart} , default : 바로 불러오기, 없을시 디스트럭쳐링으로 불러오는 것 {1, 2, 3}
  /*
  특정 클래스, 함수, 변수 등을 독립적으로 구성한 후에
  import하는 쪽에서 식별자로 바로 import하게 하려면 export default를 선언

  선언된 함수들, 클래스들, 변수들 모듈화 시켜서 객체 형태로 전달할 때는
  export만 붙입니다. import 받는 쪽에서는 디스트럭쳐링 문법을 이용하여 받아 사용합니다.

   */

  //console.log('gameStart 함수가 호출됨!');

  //숫자 아이콘을 담을 박스
  const $numbers = document.getElementById('numbers');

  //아이콘 박스를 생성하는 함수
  const makeIcon = () => {


    //가상 DOM 컨테이너 생성 %%
    const $frag = document.createDocumentFragment();



    for(let n=1; n<=100; n++) {
      // <div class = 'icon'>1</div>
      const $icon = document.createElement('div');
      $icon.classList.add('icon'); // 속성 부여
      $icon.textContent = n; // '' 없음
      $icon.dataset.iconNumber = n; //@@@ data : icon-number = 1 js=HTML 양식 다름 카멜/케밥
      //HTML에 data-icon-number="n" 속성으로 추가



      $frag.appendChild($icon); //가상돔 content 집어 넣기

    }
    $numbers.appendChild($frag); //한번만 만나게 삽입

  }

  makeIcon();//함수 실행 100개의 icon 생성됨

  //아이콘에 클릭 이벤트 생성
  //부모->자식 전파
  $numbers.onclick = e => {

    //아이콘이 아닌 곳을 클릭하면 이벤트가 발생하지 않도록
    if(!e.target.matches('#numbers .icon')) return; //#numbers.icon 이렇게 해서 오류뜸...ㅡㅡ //한줄이라 {} 생략
    //@@@ .icon 가상컨테이너라 HTML에 미기재? 그런데 왜 .은 있는지?

    console.log(`사용자가 클릭한 아이콘 번호 : ${e.target.dataset.iconNumber}번`); //생략하셈
    //dataset 사용

    //사용자가 클릭한 아이콘의 숫자를 answer에 저장(大小비교를 위해 정수로 변환)
    gameData.answer = +e.target.dataset.iconNumber;    //+ 잊지 말기 정수
    console.log(gameData.secret); //정답 출력

    //정답 검증 함수 -> 이벤트가 발생한 아이콘 요소를 넘기자
    checkNumber(e.target); //이벤트 함수 클릭이 되어야 실행됨



  };



};

//정답을 검증하는 함수
function checkNumber($target) {
  //gameData에서 정답과 사용자의 입력값 얻어오기
  const {secret, answer} = gameData;  //gameData.js 객체 디스트럭쳐링에서 에서 secret, answer만 가져오기

  //실제 정답과 사용자 선택값을 비교
  if (secret === answer) { // 정답인 경우
    correctAnswer($target);
  } else if(secret > answer) { // up인 경우
    caseUp($target);
  } else { // down인 경우
    caseDown($target);
  }
};

let x = 3;
const name = 'HGD';
export { x, name }; //객체형태로 배달