const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    localStorage.setItem('name', input.value);
    location.href = './quiz.html';
});
