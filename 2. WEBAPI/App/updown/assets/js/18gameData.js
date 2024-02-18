
const gameData = {
  secret : makeRandomNumber(100),
  answer : null,
  min : 1,
  max : 100
}


function makeRandomNumber(range){
  return Math.floor(Math.random() * range) + 1;

}

export default gameData;