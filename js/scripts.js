// seleção de elemtos
const multiplicationForm = document.querySelector('#multiplication-form')
const numberInput = document.querySelector('#number')
const multiplicationInput = document.querySelector('#multiplicator')
const operations = document.querySelector('#multiplication-operations')
const span = document.querySelector('#resposta-title span')


const calculos = (number, multiplicator) => {
    operations.innerHTML = ''
    for (let i = 1; i <= multiplicator; i++) {
        let result = number * i
        console.log(result)
        const template = `<div class="pai">
          <div class="row">
            ${number} x ${i} = <span class="result">${result}</span>
          </div>
        </div>`
        const parser = new DOMParser()
        const htmlTemplate = parser.parseFromString(template, 'text/html')
        const pai = htmlTemplate.querySelector('.pai')
        operations.appendChild(pai)
    }
    span.innerText = number

}

multiplicationForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const multiplicationNumber = +numberInput.value
    const multiplicatorNumber = +multiplicationInput.value
    if (!multiplicationNumber || !multiplicatorNumber) return
    calculos(multiplicationNumber, multiplicatorNumber)

})