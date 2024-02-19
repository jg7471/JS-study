//일정 데이터가 들어 있는 배열 선언
const todos = [{
    id: 1,
    text: '할 일1',
    done: false //checkbox를 클릭해서 할 일을 마쳤는지의 여부 //체크박스에서 done: true/false여부 확인



  }, //객체
  {
    id: 2,
    text: '할 일2',
    done: false



  }, //객체
  {
    id: 3,
    text: '할 일3',
    done: false



  }, //객체
]; //할 일 데이터가 있는 배열




//화면에 표현할 li.todo-list-item 노드를 생성하는 함수 정의
function makeNewTodoNode(newTodo) { //함수 선언 $붙이는거 차이@@ -> 관례적으로 노드 변수는 이름 앞에 $
  const $li = document.createElement('li');//요소 노드 생성
  const $label = document.createElement('label'); // 체크박스 대장
  const $check = document.createElement('input'); //input 기본적으로 text임 //체크 V박스
  const $span = document.createElement('span'); //할 일 리스트 텍스트
  const $divMod = document.createElement('div'); //modify
  const $divRem = document.createElement('div'); //remove div+span
  const $remIcon = document.createElement('span'); //remove div+span


  // label 태그 작업
  $label.classList.add('checkbox'); //할 일 전체 묶음

  $check.setAttribute('type', 'checkbox'); // 속성 checkbox로 설정

  $span.classList.add('text');
  $span.textContent = newTodo.text;

  // 순서에 맡게 정리 : check(V) , span(할 일)
  $label.appendChild($check);
  $label.appendChild($span);

  //수정 div 태그 작업
  $divMod.classList.add('modify'); // 수정모드
  const $modIcon = document.createElement('span'); //@@@

  //클래스 이름을 두 개 이상 add할 때는 각각 지정해야함
  //한번에 공백 포함 두 개 이상 설정하면 에러
  //$modIcon.classList.add('lnr lnr-undo'); //오류
  $modIcon.classList.add('lnr', 'lnr-undo'); //각각 지목(add쓰는게 편함 className 보다)
  //lnr-undo 수정 완료-html
  $divMod.appendChild($modIcon);//자식요소로 추가됨

  
  // 삭제 div태그 작업
  //function makeNewId({
  $divRem.classList.add('remove'); //remove 묶음 remove : 上div-下span
  $remIcon.className = 'lnr lnr-cross-circle'; //클레스 이름을 설정(공백 가능) //삭제버튼
  $divRem.appendChild($remIcon);

  //li 태그 작업
  $li.dataset.id = newTodo.id; // 다른 ID랑 이름 같게 // data-id="1..."
  $li.classList.add('todo-list-item');

  for (let $ele of [$label, $divMod, $divRem]) { //라벨/수정/삭제 @@@이 순서대로 새 li에 추가한다는 의미?
    $li.appendChild($ele);
  }

  //[$label, $divMod, $divRem].forEach($ele => $li.appendChild($ele)); //배열 고차함수

  //ul 태그를 지목하여 $li를 자식 노드로 추가
  document.querySelector('.todo-list').appendChild($li); //.todo-list 전체 클래스


}












//추가될 할 일 객체의 ID를 생성해 주는 함수 정의.
function makeNewId() { //매개값x
  if (todos.length > 0) {
    //배열 내의 할 일 객체 중 마지막 객체의 id보다 하나 크게
    return todos[todos.length - 1].id + 1;
  } else { //할 일 하나도 없는 상태는 id가 1
    return 1;
  }

}












//할 일 추가 처리 함수 정의
//const insertTodoData 이렇게 함수 선언해도 됨
function insertTodoData() { //매개값x

  //사용자가 작성할 할 일 input 요소 얻기
  const $todoText = document.getElementById('todo-text'); //input 할 일을 입력하세요

  // 1.1 입력값이 없다면 추가처리 하지 않음(이벤트 끝냄)
  // 1.2 공백이 들어갈 가능성이 있기에 공백을 제거하고 비교  
  // 1.3 공백 제거 함수: trim() === ''; //양쪽 공백 제거하고 입력
  // 1.4 입력값이 공백이라면 -> background: orangered, placeholder: 필수 입력사항입니다!, 이벤트 강제 종료

  if ($todoText.value.trim() === '') { //공백여부
    $todoText.style.background = 'orangered';
    $todoText.setAttribute('placeholder', '필수 입력사항입니다'); //속성의 값을 변경
    $todoText.value = ''; // 공백 들어갔을 때

    return;
  } else {
    //제대로 입력이 되었다면 속성과 디자인 초기화
    $todoText.setAttribute('placeholder', '할 일을 입력하세요');
    $todoText.style.background = '';
  }

  /*내가 작성
  if($todoText.textContent=''){
    alert('입력값은 필수입니다, 값을 입력해주세요');
    $form.$todoText.focus();
    return;
  }
         
    $todoText.trim();
  */




  // 2.1 todos 배열에 객체를 생성한 후 추가(id 추가 순서대로 잘 진행하세요)
  const newTodo = { //@@@
    id: makeNewId(), //고정값 아님 //함수 호출
    text: $todoText.value,
    done: false ///@@@
  };
  todos.push(newTodo);
  //console.log(todos); //확인하기


  /*내가 작성
    const $newLi = document.createElement('li');
    $newLi.textContent = {
      id: ++i,
      text: '할 일3',
      done: false
  */



  // 3.1 추가된 데이터를 화면에 표현 (li 태그를 추가)

  /*내가 작성
  const $todoInsert = document.getElementById('todo-insert');
  $todoInsert.insertBefore($newLi.lastElementChild);
  */
  //makeNewTodoNode( /*2 번에서 생성할 할일 객체를 전달*/ );
  makeNewTodoNode(newTodo);

  // 4.1 입력 완료 후 input에 존재하는 문자열을 제거
  $todoText.value = ''; //input 창에 남아 있는 공백 지우기

}



//data-id 값으로 배열을 탐색하여 이리하는 객체가 들어있는 인덱스 반환
function findIndexByDataId(dataId) {
  for (let i = 0; i < todos.length; i++) {
    if (dataId === todos[i].id) {
      return i;
    }
  }
}

//할 일 완료 처리 수행할 함수 정의
function changeCheckState($label) { //paranet 노드 정의했기 때문에 //이벤트가 발생한 그곳에 부모
  //@@@ label 항상?

  /*
  할 일 완료된 노드의 클래스 이름을 추가(디자인 주려고)
  checked라는 클래스 이름을 추가하세요, 근데, 할 일 완료는 껐다 켰다 할 수 있어야 함
  -> 클래스 이름을 뗏다 붙였다 할 수 있어야 함.
  */

  $label.lastElementChild.classList.toggle('checked');
  //add는 추가만 하면 끝

  /* 내가 작성
  const $label = document.createElement('label');
  $label.setAttribute('class', checked);
  if ($label === checked) {
    $label.classList.add('checked');
  } else {
    $label.classList.remove('checked');
  }
  */


  /*
  전역 변수로 선언한 배열 안의 객체의 done 값을 수정 해야함.
  시작은 false 완료 true
  data-id를 얻어서, 그와 일치하는 객체의 done 값을 true로 바꿔야 함
  만약, 기존의 값이 true였다면 false로 바꿔야 함
  */

  //$todos.dataset.Id = ;
  //li data-id 가지고 있음 데이터 숫자 얻기
  const dataId = +$label.parentNode.dataset.id; //+정수로 교체
  //@@ dataset
  // for (let i = 0; i < todos.length; i++) {
  //   if (dataId === todos[i].id) {
  //     //todos[i].done = true; //true로만 됨 false로 안돌아옴
  //     todos[i].done = !todos[i].done; //논리 반전 연산자 ture = flase 돌리기
  //   }
  // }
  const index = findIndexByDataId(dataId);
  todos[index].done = !todos[index].done;
  console.log(todos);

}

// 할 일 삭제 처리 함수 정의
function removeTodoData($delTarget) {

  // 애니메이션 적용을 위해 클래스 이름을 추가(delMoving)
  $delTarget.classList.add('delMoving'); //정답

  // ul 안에 있는 li를 removeChild를 제거하기 전에 애니메이션 발동 및
  // 배열 내부 객체 삭제가 진행될 수 있도록 시간을 일부러 지연.
  // 시간 지연은 1.5초 진행해 주세요.(시간을 지연하는 window 함수가 있음)
  setTimeout(() => {
    document.querySelector('.todo-list').removeChild($delTarget); //가능 하긴 하나 애니메이션이 안뜸->지연 필요
  }, 1500);

  // 내가 작성
  /*
  $delTarget.classList.add('delMoving'); 
  const $li = document.getElementById('todo-list.dataId[i]');
  (function(){
    createTime();
    setInterval($li.removeChild($delTarget), 1500);
  })();
  */




  // 배열 내에 있는 객체도 삭제를 진행.
  // 삭제되는 객체가 배열 안에 몇번째 인지를 확인
  //-> 할 일 완료 처리 함수쪽에 비슷한 로직이 있음 -> 함수화 해야함
  const index = findIndexByDataId(+$delTarget.dataset.id); //함수 호출 (삭제할 대상), index는 숫자라 + 붙임
  todos.splice(index, 1); //index에서 1개만 지우기

  console.log(todos);

}


/*내가 작성
function delArray($todoList) {

  const $todoList = document.getElementById('todo-list');
  const dataId = $label.parentNode.dataset.id;
  for (let i = 0; i < todos.length; i++) {
    if (dataId === todos[i].id) {
      $todoList.removeChild(todos[i]);

      }
    }
  }
*/


// 수정 모드 진입 이벤트 함수
function enterModifyMode($modSpan) {

  // 수정 모드 진입 버튼을 교체 (lnr-undo -> lnr-checkmark-circle)
  //$modIcon.classList.replace('lnr', 'lnr-undo'); ???


  //요렇게도 가능
  // $modSpan.classList.remove('lnr-undo');
  // $modSpan.classList.add(lnr-checkmark-circle);

  $modSpan.classList.replace('lnr-undo', 'lnr-checkmark-circle'); //수정 모드

  /*내가 작성
  const $modSpan = document.querySelector('modify');

  $modSpan.addEventListener('click', () => {
    if ($modSpan.classList.contains('lnr-undo')) {
      $modSpan.setAttribute('class', lnr-undo);
    } else{
      $modSpan.setAttribute('class', lnr-checkmark-circle);
    }
  });
  */


  // span.text를 input태그로 교체(replaceChild)
  // input 태그에는 .modify-input을 추가하고, input에는 기존의 할 일 텍스트가 미리 작성되어 있어야 함
  const $label = $modSpan.parentNode.previousElementSibling; //@@@위치 어디에요?  //$modSpan lnr-undo
  const $textSpan = $label.lastElementChild; //<span class="text">할 일 1</span>

  const $modInput = document.createElement('input');
  //$modInput.setAttribute('type', 'text'); //안써도 input은 type이 text임 //이외는 세팅 해야함: 체크박스, 라디오, 넘버 등
  $modInput.classList.add('modify-input');
  $modInput.setAttribute('value', $textSpan.textContent); //@@@ 기존 할 일 text를 input에 미리 세팅 : value값

  $label.replaceChild($modInput, $textSpan); //교체 旧 $modInput, 新 $textSpan 
}









// 수정 완료 이벤트 처리 함수
function modifyTodoData($modCompleteSpan) {
  // 버튼을 원래대로 돌림. (lnr-undo)

  // 내가 작성
  $modCompleteSpan.classList.replace('lnr-checkmark-circle', 'lnr-undo'); //정답!!!

  // input을 다시 span.txt로 변경
  const $label = $modCompleteSpan.parentNode.previousElementSibling;
  const $modInput = $label.lastElementChild; //위에도 있음(text span)

  const $textSpan = document.createElement('span');
  $textSpan.textContent = $modInput.value;
  $textSpan.classList.add('text');

  $label.replaceChild($textSpan, $modInput);

  /* 내가 작성
  $modCompleteSpan.classList.setAttribute('class', 'text');
  */

  // 배열 내의 id가 일치하는 객체를 찾아서 text 프로퍼티 값을 수정된 값으로 변경해야 함(f12 참고).
  const idx = findIndexByDataId(+$label.parentNode.dataset.id); //작성 했었음 //ID 받음 //+뺴먹음 @@@
  todos[idx].text = $textSpan.textContent; //= $modeInput.value

  console.log(todos);

}




// 메인 역할을 하는 즉시 실행 함수.
(function () {

  //할 일 추가 이벤트 등록
  const $addBtn = document.getElementById('add');
  $addBtn.addEventListener('click', e => {

    //form태그 안의 button은 type을 명시하지 않으면 자동 submit이 동작합니다.
    e.preventDefault(); //버튼의 고유기능(submit)을 중지 //e.preventDefault() 챗gpt

    insertTodoData();

  });







  //할 일 완료(체크박스) 이벤트
  const $todoList = document.querySelector('ul.todo-list');

  $todoList.addEventListener('click', e => {
    if (!e.target.matches('input[type=checkbox')) { //속성선택자
      return; // checkbox에서만 이벤트가 동작하도록 처리
    }

    changeCheckState(e.target.parentNode); // label을 함수에 매개값으로 전달


  });







  //할 일 삭제 이벤트
  $todoList.addEventListener('click', e => {
    if (!e.target.matches('.todo-list .remove span')) {

      return;
    }
    console.log('삭제 아이콘 클릭!');

    removeTodoData(e.target.parentNode.parentNode); //이벤트가 발생한 곳의 조상을 매개값으로 전달(li) //함수임

  });









  //할 일 수정 이벤트(수정 모드 진입, 수정 완료)
  $todoList.addEventListener('click', e => { //누군지 확인하기 위해 e값 받음
    if (e.target.matches('.todo-list .modify span.lnr-undo')) {//수정 모드 完
      enterModifyMode(e.target); //수정 모드 진입 //함수 위에 선언
    } else if (e.target.matches('.todo-list .modify span.lnr-checkmark-circle')) {
      modifyTodoData(e.target); //수정모드에서 수정을 확정 지으려는 이벤트
    } else {
      return;
    }
  });


})(); //() 바로 호출