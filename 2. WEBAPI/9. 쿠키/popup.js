



function createCookie(name){
  const date = new Date(); //쿠키 date설정
  date.setDate(date.getDate()+1); //쿠키의 수명을 하루로 설정

  const cookie = `${name}=ture;expires=${date.toUTCString}`; //중간에 세미클론 꼭 찍기
  

  //쿠키 생성
  document.cookie = cookie;
  
  
}

function getCookie(name){
  const cookies = document.cookie.split('; ');

  for(let c of cookies){
    if(c.search(name) !== -1){ //쿠키 찾으면 종료
      return true;
    }
  }
  return false; //안써도 됨
}