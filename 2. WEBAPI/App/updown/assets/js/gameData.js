

//게임에 필요한 데이터
const gameData = { // 외부 반출 방법1 //export const gameData
  secret: makeRandomNumber(100), //실제 정답
  answer: null, //사용자의 선택값
  min: 1, //최소범위
  max: 100 //최대범위

}


//외부로 반출할 필요X
function makeRandomNumber(range){
  return Math.floor(Math.random() * range) + 1;
  /*
  Math.ceil 은 소수값이 존재할 때 값을 올리는 역활을 하는 함수이며,
  Math.floor 는 소수값이 존재할 때 소수값을 버리는 역활을 하는 함수이며,
  Math.round 는 소수값에 따라 올리거나 버리는 역활을 하는 반올림 함수입니다.
  */
}

//내보낼 데이터가 하나 
export default gameData; //방법2