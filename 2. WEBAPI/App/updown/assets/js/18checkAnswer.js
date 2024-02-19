function caseUp($icon){
    document.getElementById('begin').textContent = +$icon.dataset.iconNumber + 1;
    
    document.getElementById('down').classList.remove('selected');
    document.getElementById('up').classList.add('selected');

    const $numbers = document.getElementById('numbers');

    let $delTarget = $icon;

    while($delTarget){

        const $nextTarget = $delTarget.previousElmentSibling;
        $numbers.removeChild($delTarget);
        $delTarget = $nextTarget;//1
    }


} 


function caseUp($icon){
    document.getElementById('begin').textContent.dataset.iconNumber +1;
    
    document.getElementById('up').classList.add('selected');
    document.getElementById('down').classList.remove('selected');

    const $numbers = document.getElementById('numbers');

    let $delTarget = $icon
    while($delTarget){
        $nextTarget = $delTarget.previousElmentSibling;
        $numbers.removeChild($delTarget);
        $delTarget = $nextTarget;

    }


}