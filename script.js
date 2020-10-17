let userForm = document.querySelector("#user_form");
let forum = document.querySelector("#forum");
// console.log(form);
// console.dir(form);

// предотвращение перезагрузки страницы
userForm.addEventListener('submit', function(event) {
    // обработка внесенных в форме данных
    // данные записанные в форме сохраняются в объекте
    event.preventDefault()
    const formData = new FormData(userForm)
    const userMessage = {
        userName: formData.get('user_name'), 
        userEmail: formData.get('user_email'), 
        userMessage: formData.get('user_message')
    }
    userForm[0].value = ''
    userForm[1].value = ''
    userForm[2].value = ''
    if (userMessage.userName && userMessage.userMessage) {
        forum.innerHTML += `
        <div>
        <span>${userMessage.userName}: </span>
        <span>${userMessage.userMessage}</span>
        </div>
        `;
    } else {
        forum.innerHTML = `
        <div>
        <span>Не все поля заполнены!</span>
        </div>
        `;
    }
    
}) 
















// console.log('Step 1');
// alert('Step 2');
// console.log('Step 3');

// function sumFunc (arg1, arg2, arg3) {
//     return arg1+arg2+arg3;
// }
// let result = sumFunc(1, 2, 3);
// console.log(result);
// const button = document.querySelector('#click');
// const text = document.querySelectorAll('input');
// const div = document.querySelector('#input-value');

// button.addEventListener('click', function (event) {
//     div.innerText = text.value;
//     console.log(event)
// })



// const inputListener = function (event) {
//     const input = event.target;
//     div.textContent = input.value;
//     console.log(event)
// }

// for (const input of text) {
//     input.addEventListener('input', inputListener);
// }

// text.addEventListener('input', inputListener);



