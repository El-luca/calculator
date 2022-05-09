const $buttonOne = document.querySelector('.number-1')
const $buttonThwo = document.querySelector('.number-2')
const $buttonThree = document.querySelector('.number-3')
const $buttonFour = document.querySelector('.number-4')
const $buttonFive = document.querySelector('.number-5')
const $buttonSix = document.querySelector('.number-6')
const $buttonSeven = document.querySelector('.number-7')
const $buttonEight = document.querySelector('.number-8')
const $buttonNine = document.querySelector('.number-9')
const $buttonZero = document.querySelector('.number-0')
const $fieldResult = document.querySelector('#result')
const $number = document.querySelector('.result-text')
const $division = document.querySelector('.division')
const $multiplication = document.querySelector('.multiplication')
const $addition = document.querySelector('.addition')
const $subtraction = document.querySelector('.subtraction')
const $dot = document.querySelector('.dot')
const $clean = document.querySelector('.clean')
const $del = document.querySelector('.del')
const $result = document.querySelector('.result')

$buttonZero.addEventListener('click', function(){
    $fieldResult.innerHTML += 0
})
$buttonOne.addEventListener('click', function(){
    $fieldResult.innerHTML += 1
})
$buttonThwo.addEventListener('click', function(){
    $fieldResult.innerHTML += 2
})
$buttonThree.addEventListener('click', function(){
    $fieldResult.innerHTML += 3
})
$buttonFour.addEventListener('click', function(){
    $fieldResult.innerHTML += 4
})
$buttonFive.addEventListener('click', function(){
    $fieldResult.innerHTML += 5
})
$buttonSix.addEventListener('click', function(){
    $fieldResult.innerHTML += 6
})
$buttonSeven.addEventListener('click', function(){
    $fieldResult.innerHTML += 7
})
$buttonEight.addEventListener('click', function(){
    $fieldResult.innerHTML += 8
})
$buttonNine.addEventListener('click', function(){
    $fieldResult.innerHTML += 9
})
$division.addEventListener('click', function(){
    $fieldResult.innerHTML += '/'
})
$multiplication.addEventListener('click', function(){
    $fieldResult.innerHTML += '*'
})
$addition.addEventListener('click', function(){
  $fieldResult.innerHTML += '+' 
})
$subtraction.addEventListener('click', function(){
    $fieldResult.innerHTML += '-'
})
$dot.addEventListener('click', function(){
    $fieldResult.innerHTML += '.'
})
$clean.addEventListener('click', function(){
    $fieldResult.innerHTML = ''
})
$del.addEventListener('click', function(){
    $fieldResult.innerHTML = $fieldResult.textContent.slice(0, -1)
})
$result.addEventListener('click', function(){
    if($fieldResult !== ''){
        $fieldResult.innerHTML = eval($fieldResult.textContent)
    }else{
        $fieldResult.innerHTML = 'ERROR !!!'
    }
})