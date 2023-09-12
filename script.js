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
let button2Minus = document.createElement ('button')
let buttonMinus = document.createElement('button')
let resetButton = document.createElement('button')
let buttonPlus = document.createElement('button')
let button2Plus = document.createElement('button')


numberDisplay.textContent = 5
button2Minus.textContent = '-2' 
buttonMinus.textContent = '-' 
resetButton.textContent = 'Reset'
buttonPlus.textContent = '+'
button2Plus.textContent = '+2'

numberDisplay.style.color = 'green'


numbersWrapper.append(numberDisplay, button2Minus, buttonMinus, resetButton, buttonPlus, button2Plus)


buttonMinus.addEventListener('click', function () {
    
    numberDisplay.textContent = Number(numberDisplay.textContent) - 1
    
    if (numberDisplay.textContent <= 1) {
        buttonMinus.setAttribute('disabled', true)
    } 
    if (numberDisplay.textContent < 10) {
        buttonPlus.removeAttribute ('disabled')
    }
    if (numberDisplay.textContent >= 5) {
        numberDisplay.style.color = 'green' 
    } else {
        numberDisplay.style.color = 'red' 
    }
    
})

button2Minus.addEventListener('click', function() {
    numberDisplay.textContent = numberDisplay.textContent - 2

    if (numberDisplay.textContent <= 1) {
        buttonMinus.setAttribute('disabled', true)
      }
    
      if (numberDisplay.textContent <= 2) {
        button2Minus.setAttribute('disabled', true)
      }
    
      if (numberDisplay.textContent < 10) {
        buttonPlus.removeAttribute('disabled')
      }
      
      if (numberDisplay.textContent < 9) {
        button2Plus.removeAttribute('disabled')
      }
    
      if (numberDisplay.textContent >= 5) {
        numberDisplay.style.color = 'green'
      } else {
        numberDisplay.style.color = 'red'
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
    if (numberDisplay.textContent >= 5) {
        numberDisplay.style.color = 'green' 
    } else {
        numberDisplay.style.color = 'red' 
    }
})

button2Plus.addEventListener('click', function () {
    numberDisplay.textContent = Number(numberDisplay.textContent) + 2

    if (numberDisplay.textContent >= 10) {
        buttonPlus.setAttribute('disabled', true)
      }
    
      if (numberDisplay.textContent >= 9) {
        button2Plus.setAttribute('disabled', true)
      }
    
      if (numberDisplay.textContent > 1) {
        buttonMinus.removeAttribute('disabled')
      }
    
      if (numberDisplay.textContent > 2) {
        button2Minus.removeAttribute('disabled')
      }
    
      if (numberDisplay.textContent >= 5) {
        numberDisplay.style.color = 'green'
      } else {
        numberDisplay.style.color = 'red'
      }
})

// 9. Jeigu skaitmuo yra 5 arba daugiau, tai jo spalva turėtų būti žalia. Kitu atveju - raudona.


// 10. Sukurti naują mygtuką „Reset". Jį paspaudus viskas atstatoma į pradinę padėtį.


resetButton.addEventListener('click', function()  {
    numberDisplay.textContent = 5
    numberDisplay.style.color = 'green'

    plusButton.removeAttribute('disabled')
    plus2Button.removeAttribute('disabled')
    minusButton.removeAttribute('disabled')
    minus2Button.removeAttribute('disabled')
})


// 11. Sukurti du naujus mygtukus, kurie:
// 11.1. Prideda dvejetą prie esamos h3 elemento reikšmės.
// 11.2. Atima dvejetą iš esamos h3 elemento reikšmės.


// 12. Sukurti input elementą (number tipo) ir jame įrašytą skaičių pridėti kaip h3 elemento tekstą.


let input = document.createElement('input')

input.value = 5
input.type = 'number'
input.min = 1
input.max = 10










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