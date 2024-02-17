// 기능

// 더하기 버튼 이벤트 핸들러
// 이벤트 등록, 클릭 이벤트 잘되어있는지 우선 체크


//현재 계산기에 그려질 숫자
let currentResult = 0; //전역변수 //시작값 0 // 저장값

//계산 이력을 모아 둘 배열
const logEntries = [];

let seq = 0; // 로그 번호



//입력창에 입력한 숫자를 읽는 함수.
const getUserNumberInput = () => parseInt($userInput.value); //계산값50



// 계산 기능을 담당하는 함수
const calculate = type => { //매개값 - type //1개일 경우 괄호 생략 가능


  //currentResult 0 = originalResult 0 ->
  //getUserNumberInput 1 = enteredNumber 1 ->

  //계산 전 값을 기억
  const originalResult = currentResult; //  오리지날 = 커렌트 : 초기값 0
  console.log(`1번 originalResult : ${originalResult}, currentResult : ${currentResult}`);
  //                                       0                                  0

  const enteredNumber = getUserNumberInput(); //1
  console.log(enteredNumber);

  //if(enteredNumber === NaN){
    if(!enteredNumber && enteredNumber !== 0){ //NaN === NaN false
    alert('문제발생');
    return;
  }

  let mark;
  if(type === 'ADD') {
    mark = '+'; //마크 생김
    currentResult += enteredNumber;
  } else if(type === 'SUB') {
    mark = '-';
    currentResult -= enteredNumber;
  } else if(type === 'MULTI') {
    mark = 'x';
    currentResult *= enteredNumber;
  } else {
    if(enteredNumber === 0) {
      alert('0으로 나눌 수 없습니다.');
      return;
    }
    mark = '/';
    currentResult /= enteredNumber;
  }
  //연산 끝난 뒤 originalResult : 0, currentResult : 3
  console.log(`2번 : originalResult: ${originalResult}, currentResult : ${currentResult}`);


  // 연산식과 결과값을 두번째 section에 렌더링   0               +           1   
  $currentCalculationOutput.textContent = `${originalResult} ${mark} ${enteredNumber}`;
  $currentResultOutput.textContent = currentResult;
  //       result                          = 1

  // 로그 이력 쌓기
  //            +       0                1             1
  writeToLog(mark, originalResult, enteredNumber, currentResult);  //매개값()
  //console.log(`3번 : originalResult : ${originalResult}, currentResult : ${currentResult}, enteredNumber : ${enteredNumber}`);
}//                                         0                                    3                                3


//로그 이력을 만드는 함수 : 위 로그 이력 쌓기와 이름 달라도 되는데 순서는 동일하게
const writeToLog = (mark, originalResult, enteredNumber, currentResult) => {
  //                   +           0         1       = 1
  

    //하나의 로그 객체 (연산타입, 이전결과, 연산숫자, 연산결과)
    const logObject = { //배열을 만든 뒤 초기 배열에 집어 넣음
      mark, //이름 동일해서 : 필요없음
      originalResult,
      enteredNumber,
      currentResult
    };
    logEntries.push(logObject); // 첫 배열에 집어 넣음
    console.log(logEntries); //배열값 출력

  // 화면에 로그를 li로 렌더링하는 함수 호출
  renderToLog(logObject);
};




//로그 이력을 화면에 렌더링하는 함수
//매개변수로 객체가 전달된다면 매개변수 위치에서 디스트럭쳐링이 가능 //매게0
  //const renderToLog = (obj) => {
  const renderToLog = ({mark, originalResult, enteredNumber, currentResult}) => {  //객체를 받자마자 디스트럭쳐링 하겠다 //매게1 //풀어낼 때는 이름 바꿔서 설정함 operation->mark
//                                   +      0          1       = 1
  //li태그 생성
  const $newLi = document.createElement('li');
  $newLi.classList.add('log-entries-item'); 
  console.log(`newLi 출력값 ${$newLi}`);

  //$newLi.textContent = `#${++seq}. ${obj.prevResult} ${obj.type} ${obj.enteredNumber} = ${obj.currentResult}`; //출력할 때 올려라, 함수 진행될 때 마다
  $newLi.textContent = `#${++seq}. ${originalResult} ${mark} ${enteredNumber} = ${currentResult}`; //출력할 때 올려라, 함수 진행될 때 마다 //매게2 //seq 전역변수

  //ul에 추가
  $logEntries.appendChild($newLi);
};


const addHandler = () => {
  calculate('ADD'); //ctrl 누르고 함수 누르면 선언부로 이동가능
  //console.log('덧셈 연산 발생'); 잘 등록되어 있는지 테스트용

  //currentResult += enteredNumber;


  //console.log(currentResult);
  //인풋태그 기본적으로 string이라 +테스트시 0+숫자 050으로 표기됨
  //-> +$userInput.value; +붙임 or parseInt($userInput.value); =>숫자로 변환

}
const subHandler = () => {
  calculate('SUB'); //const calculate = (type) =>{
  //console.log('뺄셈 연산 발생');
}
const multiHandler = () => calculate('MULTI') //한줄 표기 가능
//console.log('곱셈 연산 발생');

const divideHandler = () => calculate('DIVIDE')
//console.log('나눗셈 연산 발생');




// ================ 이벤트 핸들러 바인등(등록) ================
$addBtn.addEventListener('click', addHandler);
$subtractBtn.addEventListener('click', subHandler);
$multiplyBtn.addEventListener('click', multiHandler);
$divideBtn.addEventListener('click', divideHandler);