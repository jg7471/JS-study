

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
}

//내보낼 데이터가 하나 
export default gameData; //방법2