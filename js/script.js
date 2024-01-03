// this is for age converter  

function initDateConverter() {
    document.getElementById("ageOutput").innerHTML = "";
}

function convertToDate() {
    var inputDate = new Date(document.getElementById("inputDate").value);
    var age = new Date().getFullYear() - inputDate.getFullYear();
    document.getElementById("ageOutput").innerHTML = age + " years old";
}


// this is for dark and light mode in my second page

function toggleDarkLightMode() {
    var bodyElement = document.body;
    bodyElement.classList.toggle("dark-mode");
}

// this is for simple calculator



function calculate(operation) {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result;
    switch(operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }
    document.getElementById('result').innerText = result;
}

// now for the bucket list code


function addTodo() {
    var todoText = document.getElementById('bucketinput').value;
    var li = document.createElement('li');
    li.textContent = todoText;
    document.getElementById('bucketList').appendChild(li);
    document.getElementById('bucketInput').value = '';
}
