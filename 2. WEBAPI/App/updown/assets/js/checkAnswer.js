
// ex1)정답 40, 사용자 선택 35, begin 36
function caseUp($icon) { // UP일 경우 나 icon

  // 1. #begin인 em의 숫자값을 선택한 값 +1로 변경        ex1) begin 35+1 : 36
  document.getElementById('begin').textContent = +$icon.dataset.iconNumber + 1; //사용자가 선택한 값보다 +1 받음
  //+ 정수값으로 변환

  // 2. up&down 요소에 animation 넣을 것. -> .selected를 추가해서.
  // #down 요소의 .selected를 제거, #up에 추가
  document.getElementById('down').classList.remove('selected');//#down에 css클래스 selected 효과 제거
  document.getElementById('up').classList.add('selected');//#up에 css클래스 selected 효과 적용

  // 3. 자기 자신 아이콘 포함 이전 형제 요소들 전부 삭제


  const $numbers = document.getElementById('numbers'); // 부모요소

  //  ex2)delTarget : 1 까지 남았 을 때
  let $delTarget = $icon; //지워져야 할 타겟, 변경 될 수도 있어 let //지워져야 할 타겟(previouswhile($delTargetElementSibling은 옆 밖에 안되는데 옆이 지워지고, 다음 타겟을 안내 못해서)
  //사용자가 선택한 icon -> delTarget

    
    // 삭제되는 요소는 자신의 이전 형제 요소를 지목해 놓고 삭제됩니다
    // 삭제되는 요소가 1번 아이콘인 경우에는 이전 요소가 없기 때문에 $delTarget이 null이 됩니다
    // $delTarget이 null이 되는 순간 반복문을 종료시키겠다는 조건식을 작성.

  //  사용자35       35 : down 일경우 예시
    while($delTarget) { // delTarget이 null이 되면 반복문 종료(디자인 요소)

    //  ex2)             1의 이전 요소 : null(0) 없다 -> delTarget : 0(null)
    //       34          내 이전요소 미리 지정
    const $nextTarget = $delTarget.previousElementSibling; //지워야할 다음 타켓 -> 지금 지워야할, 이전 형제요소    //이전형제 //; 빼먹음 //이전 형제요소 @@@
    $numbers.removeChild($delTarget); //내가 지워지기 전에, 다음 요소 지목하고 삭제
    //                   35삭제
    // ex2)                   1 삭제 


    $delTarget = $nextTarget;
    //   34         34
    // ex2) null만 남음 null 반복문 끝
  }


} //; 함수 안찍어도 됨


// 정답 10, 사용자 초이스 15, end 14
function caseDown($icon) {

  // 1. #end em의 숫자값을 선택한 값 -1로 변경
  document.getElementById('end').textContent = +$icon.dataset.iconNumber - 1;


  // #down 요소의 .selected를 제거, #up에 제거
  document.getElementById('up').classList.remove('selected');
  document.getElementById('down').classList.add('selected');

  // 3. 자기 자신 아이콘 포함 다음 형제 요소들 전부 삭제
  const $numbers = document.getElementById('numbers');

  let $delTarget = $icon; //지워져야 할 타겟(previousElementSibling은 옆 밖에 안되는데 옆이 지워지고, 다음 타겟을 안내 못해서)

  //null 시계방향 //인강참조
  while ($delTarget) {
    // 삭제되는 요소는 자신의 이전 형제 요소를 지목해 놓고 삭제됩니다
    // 삭제되는 요소가 1번 아이콘인 경우에는 이전 요소가 없기 때문에 $delTarget이 null이 됩니다
    // $delTarget이 null이 되는 순간 반복문을 종료시키겠다는 조건식을 작성.

    const $nextTarget = $delTarget.nextElementSibling; //다음 형제요소
    $numbers.removeChild($delTarget);

    $delTarget = $nextTarget;


  }
}

function correctAnswer($icon) {

  // 1. #finish 박스에 class 'show' 부여
  document.getElementById('finish').classList.add('#finish.show');
  
  // 2. #numbers 클릭 이벤트 해제
  $numbers.onclick = null;

  // 3. 사용자가 선택한 아이콘에 id 'move' 추가
  $icon.classList.add('move');
  


}

export { caseUp, caseDown, correctAnswer}; // 묶어서 export