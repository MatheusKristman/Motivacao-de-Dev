const btn = document.getElementById('btn');
const reload = document.getElementById('reload');
const title = document.getElementById('title');
const phrase = document.getElementById('phrase');
const bodyColor = ['#293462', '#809A6F', '#E3FCBF', '#FF4949', '#333C83'] //
const btnColor = ['#F24C4C', '#CC9C75', '#00FFAB', '#FFCD38', '#F24A72'] //
const phrases = [
    'Calma! Se a logica não estiver funcionando, de duas cabeçadas na parede que volta a funcionar',
    'A lenda fala: “Java só funciona depois do primeiro café”',
    'Eu adoraria mudar o mundo, mas não me deram o código-fonte',
    'Aprender a programar aumenta a mente, ajuda a pensar melhor',
    'Faça como um programador. Quando tudo está errado e confuso, apague tudo e recomece do zero',
    'Faça da sua vida mais “Responsivo”',
    'É genial festejar o sucesso, mas é mais importante aprender com as lições do fracasso',
    'Falar é fácil. Mostre o código',
    'Qualquer idiota pode escrever um código que um computador possa entender. Bons programadores escrevem códigos que humanos podem entender',
    'Se a depuração é o processo de remoção de bugs, a programação deve ser o processo de colocá-los'
]; //10 phrases

window.addEventListener('load', () => {
    let randomId = Math.floor(Math.random() * bodyColor.length);
    document.body.style.backgroundColor = bodyColor[randomId];
    btn.style.backgroundColor = btnColor[randomId];
    reload.style.backgroundColor = btnColor[randomId];
})

btn.addEventListener('click', (e) => {
    phrase.textContent = '';
    let randomId = Math.floor(Math.random() * phrases.length);
    console.log(randomId);
    switch(randomId) {
        case 0:
            phrase.textContent = phrases[randomId];
            createHeart('🤪');
            break;
        case 1:
            phrase.textContent = phrases[randomId];
            createHeart('☕️');
            break;
        case 2:
            phrase.textContent = phrases[randomId];
            createHeart('🌎');
            break;
        case 3:
            phrase.textContent = phrases[randomId];
            createHeart('🤯');
            break;
        case 4:
            phrase.textContent = phrases[randomId];
            createHeart('🍃');
            break;
        case 5:
            phrase.textContent = phrases[randomId];
            createHeart('🧭');
            break;
        case 6:
            phrase.textContent = phrases[randomId];
            createHeart('⛰️');
            break;
        case 7:
            phrase.textContent = phrases[randomId];
            createHeart('🤨');
            break;
        case 8:
            phrase.textContent = phrases[randomId];
            createHeart('😎');
            break;
        case 9:
            phrase.textContent = phrases[randomId];
            createHeart('😅');
            break;
        default:
            alert('[ERRO] Index invalido!');
            break;
    }
    title.style.animation = 'fadeOut .5s linear';
    e.target.style.animation = 'fadeOut .5s linear';
    setTimeout(() => {
        title.style.display = 'none';
        e.target.style.display = 'none';
        phrase.style.display = 'block';
        reload.style.display = 'block';
    }, 450)
    phrase.style.animation = 'fadeIn .5s linear';
    reload.style.animation = 'fadeIn .5s linear';
    
})

reload.addEventListener('click', () => {
    location.reload();
})

function createHeart(content) {
    const contentFunc = content;
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
    
        heart.style.left = Math.random() * 200 + 'vh';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    
        heart.innerText = contentFunc;
    
        document.body.appendChild(heart);
    
        setTimeout(() => {
            heart.remove();
        }, 5000)
    }, 300);
}

