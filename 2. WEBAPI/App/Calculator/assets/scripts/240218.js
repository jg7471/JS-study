/*
let currentResult = 0;
let logEntries = []; //$ 불필요

let seq = 0; //빼먹음

let getUserNumberInput = () => parseInt($userInput.value);//함수임, 위치, value 빼먹음


const calculate = type => {

  const originalResult = currentResult; //const
  const enteredNumber = getUserNumberInput(); // 빼먹음  

  if (!userInput && userInput !== 0) { //getUserNumberInput === '' && !getUserNumberInput === 0 잘못입력
    alert('숫자를 입력하세요');
    return; // 뻬먹음
  }

  let mark; // 여기
  if ( type === 'ADD') { //getUserNumberInput 잘못 적음
    mark = '+';
    $currentResult += enteredNumber; //currentResultOutput getUserNumberInput 잘못적음
  } else if (type === 'SUB') {
    mark = '-';
    $currentResult -= enteredNumber;
  } else if (type === 'MUL') {
    mark = 'x';
    $currentResult *= enteredNumber;
  } else{
    if (enteredNumber === 0) {
      alert('0이 아닌 값을 입력해수제쇼');
      return; //빼먹음
    }
    mark = '/';
    $currentResult /= enteredNumber;
  }
  $currentCalculationOutput.textContent = `${originalResult}${mark}${enteredNumber}`;
  $currentResultOutput.textContent = currentResult;

  writeToLog(originalResult, mark, enteredNumber, currentResult);
}

const writeToLog = (originalResult, mark, enteredNumber, currentResult) =>{

  const logObject = { //= 빼먹음
    originalResult,
    mark,
    enteredNumber,
    currentResult
  };
  
  $logEntries.push(logObject);

  renderToLog(logObject)//(originalResult, mark, userInput, currentResult);
  

}; //함수 뒤 ;


const renderToLog = ({originalResult, mark, enteredNumber, currentResult}) => {

  const $newLi = document.createElement('li');
  $newLi.classList.add('log-entries-item'); // ' '
  $newLi.textContent = `#${++seq}. ${originalResult}${mark}${enteredNumber}=${currentResult}`;

  $logEntries.appendChild($newLi); //push
}; //;




const addHandler = () => calculate('ADD'); // () calculate 빼먹음

$addBtn.addEventListener('click', addHandler); //const 붙임
*/



//2차

let seq = 0;
let currentResult = 0;
const logEntries = [];


//const getUserNumberInput = parseInt($userInput.textContent) => ();
const getUserNumberInput = () => parseInt($userInput.textContent);
//const originalResult = currentResult;

const calculate = type => {

  const enteredNumber = getUserNumberInput();
  const originalResult = currentResult;

  let mark;
  if (!enteredNumber && enteredNumber !== 0){
    alert(`정수를 입력해주세여`);
    return;
  }

  if(type === 'ADD'){
    mark = '+';
    currentResult += enteredNumber;
  }else if( type === 'SUB'){
    mark = '-';
    currentResult -= enteredNumber;
  }else if( type === ' MUL'){
    mark = 'x';
    currentResult *= enteredNumber;
  }else {
    if( enteredNumber === 0 ){
      alert('재입력 바람');
      return;
    }
    mark = '/';
    currentResult /= enteredNumber;
  }


  //빼먹음
  $currentCalculationOutput.textContent = `${originalResult} ${mark} ${enteredNumber}`;
  $currentResultOutput.textContent = currentResult;

  writeToLog(originalResult, mark, enteredNumber, currentResult);

};


const writeToLog = (originalResult, mark, enteredNumber, currentResult) => {

  const logObject = {
    originalResult,
    mark,
    enteredNumber,
    currentResult
  };

  logEntries.push(logObject);
  //console.log(logEntries);

  //renderToLog(originalResult, mark, enteredNumber, currentResult);
  renderToLog(logObject);

};


const renderToLog = ({originalResult, mark, enteredNumber, currentResult}) => {

  const $newLi = document.createElement('li');
  $newLi.classList.add('log-entries-item');
  $newLi.textContent = `${originalResult}, ${mark}, ${enteredNumber}, ${currentResult}`;
  $logEntries.appendChild($newLi);

};


const addHandler = ()  =>  calculate('ADD');

$addBtn.addEventListener('click', addHandler);
