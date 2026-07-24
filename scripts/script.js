console.log('Скрипт подключен успешно!')

const themeButton = document.querySelector('#id-theme');
console.log(themeButton);

themeButton.addEventListener("click", function(){
    console.log('Button pressed')
    document.body.classList.toggle("dark-theme")
});
