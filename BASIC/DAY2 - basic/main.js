document.title = 'syafiqurohman'
const body = document.body
const btn1 = document.getElementById('btn1')
const btn2 = document.querySelector('.btn2')

const defaultTextBtn = 'Get Started'
btn1.textContent = defaultTextBtn
btn1.style.border = 'none'
btn1.style.padding = '8px'
btn1.style.cursor = 'pointer'
btn1.style.fontSize = '24px'
btn1.style.background = 'green'

btn2.style.border = 'none'
btn2.style.padding = '24px'
btn2.style.cursor = 'pointer'
btn2.style.fontSize = '20px'
btn2.style.borderRadius = '10px'
btn2.style.background = 'maroon'
btn2.style.color = 'white'



function clickButton(){
    btn1.style.background = 'blue'
    btn1.style.transition = 'all 0.3s ease'
    const newText = document.createElement('h1')
    newText.textContent = 'ADEH RADA PUYENG'
    body.append(newText)
}

function ubahText(){
    btn1.textContent = 'Im Quit'
    btn1.style.transition = 'all 0.3s ease'
}

function balikinText(){
    btn1.textContent = defaultTextBtn
    btn1.style.transition = 'all 0.3s ease'
}

const appearText = document.createElement('h2')
appearText.textContent = 'JRENG MUNCULLLL'

function munculText(){
    appearText.style.color = 'maroon'
    body.append(appearText)
}

function changeTextColor(){
    appearText.style.color = 'aqua'
    appearText.style.transition = 'all 0.3s ease'
    body.append(appearText)
}
