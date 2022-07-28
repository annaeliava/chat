button.onclick = function () {
    const resultEmail = document.getElementById('email').value;
    if (resultEmail.indexOf('@') < 0) {
        document.getElementById("email").style.border = "1px solid red";
    }
    const resultPassword = document.getElementById('password').value;
    if (resultPassword.length < 8) {
        document.getElementById("password").style.border = "1px solid red";
    }
    const str1 = document.getElementById('password').value;
    const str2 = document.getElementById('password2').value;
    if (str1 != str2) {
        document.getElementById("password2").style.border = "1px solid red";
    }
    const borderEmail = document.getElementById("email").style.borderColor;
    const borderPassword = document.getElementById("password").style.borderColor;
    const borderPassword2 = document.getElementById("password2").style.borderColor;
    if (borderEmail == 'red' || borderPassword == 'red' || borderPassword2 == 'red') {
        alert('Warning! Неверно заполненные поля');
    }
    else {
        alert('Добро пожаловать, ' + document.getElementById('yourName').value);
    }
};
yourName.onclick = function () {
    document.getElementById("yourName").style.border = "0.5px solid grey";
};
email.onclick = function () {
    document.getElementById("email").style.border = "0.5px solid grey";
};
userName.onclick = function () {
    document.getElementById("userName").style.border = "0.5px solid grey";
};
password.onclick = function () {
    document.getElementById("password").style.border = "0.5px solid grey";
};
password2.onclick = function () {
    document.getElementById("password2").style.border = "0.5px solid grey";
};
