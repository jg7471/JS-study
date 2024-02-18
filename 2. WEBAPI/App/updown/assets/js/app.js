
// index.html에는 app.js(현재파일)이 import 되어 있습니다.
// 현재 파일을 실행부로 취급해서 각각의 기능은 파일별로 따로 구현해 보겠습니다.

//원래는 즉시실행하

import gameStart from './start.js'; //지정한 특정함수만 가져오기 : start의 gameStart
//import {x, name} from '.start.js'; // * 전부다씀
//각각의 기능별로 js 나눔


//즉시 실행함수 보다 위의 gameStart가 더 빨라야 하기에 html에 defer 설정해둠
//<script type="module" src="./assets/js/app.js" defer></script>
(function(){ 
  gameStart();
  //console.log(`import로 전달받은 값 : ${x}, ${name}`);
})();



