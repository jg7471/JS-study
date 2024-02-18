


function caseUp($icon){

  document.getElementById('begin').textContent = +$icon.dataset.$iconNumber + 1;

  document.getElementById('down').classList.remove('selected');
  document.getElementById('up').classList.add('selected');

  const $numbers = document.getElementById('numbers');

  let $delTarget = $icon;

  while($delTarget){

    const $nextTarget = $delTarget.previousElementSibling;
    $numbers.removeChild{
      const $nextTarget = $delTarget.previousElementSibling'
      $numbers.removeChild($delTarget);
      $delTarget = $nextTarget;

    }
  }
  
}


// 정답 10, 사용자 초이스 15, end 14
function caseDown($icon){

  document.getElementById('end').textContent = +$icon.dataset.$iconNumber - 1;

  document.getElementById('up').classList.remove('selected');
  document.getElementById('down').classList.add('selected');

  const $numbers = document.getElementById('number');
  
  let $delTarget = $icon;

  while($delTarget){

    const $nextTarget = $delTarget.nextElementSibling;
    $numbers.removeChild($delTarget);
    $delTarget = $nextTarget;
  }
}

  function correctAnswer($icon) {
    
  }
