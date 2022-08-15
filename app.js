const correctAnswers = ["A", "A", "A", "A"]
const form = document.querySelector('.quiz-form')
const showScore = document.querySelector('span')
const result = document.querySelector('.result')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let score = 0
    let userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]

    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]) {
            score += 25

        }
    })
    
    // Show result on the page (Habeeb)
    // showScore.textContent = `${score}%`
    // result.classList.remove('d-none')


    // Show result on the page (Shaun)
    scrollTo(0,0)
    result.classList.remove('d-none')

    let output = 0
    const timer = setInterval(() => {
    result.querySelector('span').textContent = `${output}%`

        if (output === score) {
    clearInterval(timer)
}
else {
        output++
}
},10)



})
// let time = 0
// let timer = setInterval(()=> {
//     time++
//     // alert('hello')
//     if (time === 5) {
//     clearInterval(timer)
//     }
//     console.log('hello')


// }, 1000)