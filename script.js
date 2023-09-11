// Užduotis:
// 1. Sukurti HTML elementą, kurio id „numbers"
// 2. JavaScript pagalba šio elemento viduje sukurti: h3 elementą ir du mygtukų elementus
// 3. h3 elemento tekstas turėtų būti „5"
// 4. Mygtukų tekstas turėtų būti „+" ir „-"
// 5. Sukurti „click" (paspaudimo) event listener'ius abiems mygtukams.
// 6. „-" mygtuko event listeneris turėtų iškviesti funkciją, kuri sumažina skaičių h3 elemente, o „+" mygtuko paspaudimas turėtų skaičių padidinti
 
// 7. Jeigu skaitmuo h3 komponente yra mažesnis už du, tai „-" mygtukas turėtų patapti neveiksnus (disabled)- element.setAttribute('disabled', true) / element.removeAttribute('disabled')
// 8. Jeigu skaitmuo h3 komponente yra 10, tai „+" mygtukas turėtų patapti neveiksnus (disabled)

let numbersWrapper = document.querySelector('#numbers')

let numberDisplay = document.createElement ('h3')
let buttonMinus = document.createElement('button')
let buttonPlus = document.createElement('button')
let resetButton = document.createElement('button')


numbersWrapper.append(numberDisplay, buttonMinus, buttonPlus, resetButton)

numberDisplay.textContent = 5
buttonMinus.textContent = '-' 
buttonPlus.textContent = '+'
resetButton.textContent = 'reset'


buttonMinus.addEventListener('click', function () {
    
    console.log('minus')

    numberDisplay.textContent = Number(numberDisplay.textContent) - 1
    
    if (numberDisplay.textContent <= 1) {
        buttonMinus.setAttribute('disabled', true)
    } 
    if (numberDisplay.textContent < 10) {
        buttonPlus.removeAttribute ('disabled')
    }
})

buttonPlus.addEventListener('click', function () {

    console.log('plus')

    numberDisplay.textContent = Number(numberDisplay.textContent) + 1

    if (numberDisplay.textContent >= 10) {
        buttonPlus.setAttribute('disabled', true)
    }
    if (numberDisplay.textContent >1) {
        buttonMinus.removeAttribute('disabled')
    }
})

// 9. Jeigu skaitmuo yra 5 arba daugiau, tai jo spalva turėtų būti žalia. Kitu atveju - raudona.


function changeNumberColor () {
    console.log('numberDisplay.textContent')

    numberDisplay.textContent = 5

    if (numberDisplay.textContent < 5) {
        numberDisplay.style.color = 'green'
    } else {
        numberDisplay.style.color = 'red'
    }
}
 
changeNumberColor()


// 10. Sukurti naują mygtuką „Reset". Jį paspaudus viskas atstatoma į pradinę padėtį.

resetButton.addEventListener('click', function()  {
 
 if (numberDisplay.textContent > 5 && numberDisplay.textContent < 5) {
    numberDisplay.textContent = 5
}
})
 

















//NUMBERS

// let num = 5
// console.log(num)

// console.log(num + 1)

// console.log(num)

// num = 6
// console.log(num)

// num = num +1 
// console.log(num)

// num += 1 // tas pats kas num = num + 1
// console.log(num)

// num++ // kai nori prie dabartinio kintamojo prideti 1
// console.log(num)

// num = num - 1

// num -= 1

// num-- // kai nori prie dabartinio kintamojo prideti 1

// num = num * 2

// num *= 2

// num /= 2

// //string 

// let str = 'labas'
// console.log(str)

// console.log(str + 'vakaras')

// console.log(str)

// str = str + 'vakaras'

// str += '.'

// console.log(str)

// str++ //ats NaN,nes stringas yra ne skaicius