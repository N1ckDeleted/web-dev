// tpSFqiCtPEJPqDxyOvQ3

let userForm = document.querySelector("#user_form");
let forum = document.querySelector("#forum");
let success = document.querySelector('#success');
let list = forum.children;
let errors = '';
fetch('http://user08.test1.seschool.ru:3000/api/chat/').then((response) => {
        if (response.ok) {
            return response.json()
        }
    }).then((messages) => {
        let resultHtml = ''
        messages.forEach(message => {
            resultHtml += `<li class="list-group-item">${message.username}: ${message.message}
            </li>`
        })
        forum.innerHTML = resultHtml
    })
const postMessage = () =>{
    const username = userForm[0].value
    const email = userForm[1].value
    const message = userForm[2].value
    fetch('http://user08.test1.seschool.ru:3000/api/chat/', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'bearer tpSFqiCtPEJPqDxyOvQ3'
        },
        body: JSON.stringify({
            username,
            email,
            message: message
        })
    }).then(response => {
        if (response.ok) {
            return response.json()
        } else {
            throw new Error(`Status: ${response.status}. Message: ${response.statusText}`)
        }
        
    }).then(response => {
        console.log(response)
        success.textContent = '';
        userForm[2].value = ''
    }).catch(err => {
        errors += 'Bad request. '
        success.setAttribute('style', 'display: block; border: solid; border-width: 1px; border-color: red;');
        success.textContent = errors;
    })
}


userForm.addEventListener('submit', function(event) {
    event.preventDefault()
    const formData = new FormData(userForm)
    const userMessage = {
        userName: formData.get('user_name'), 
        userEmail: formData.get('user_email'), 
        userMessage: formData.get('user_message')
    }
    postMessage()
    userForm[0].value = ''
    userForm[1].value = ''
    userForm[2].value = ''
    if (userMessage.userName && userMessage.userMessage && userMessage.userEmail) {
        forum.insertAdjacentHTML('afterbegin', `<li class="list-group-item">${userMessage.userName}: ${userMessage.userMessage}</li>`);       
    } else {
        if (!userMessage.userName) {
            errors += 'Не введено имя. ';
        }
        if (!userMessage.userMessage) {
            errors += 'Не введено сообщение. ';
        }
        if (!userMessage.userEmail) {
            errors += 'Не введена электронная почта. ';
        }
        
    } 
    if (errors) {
        success.setAttribute('style', 'display: block; border: solid; border-width: 1px; border-color: red;');
        success.textContent = errors;
    } else {
        success.setAttribute('style', 'display: block; border: solid; border-width: 1px; border-color: yellowgreen;');
    }

    
    
}) 















