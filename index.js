const characters =   ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"
];

let password = "";
let randomNum = 0;
let generatorEl = document.querySelector("#generator");
let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");

let btn1El = document.getElementById("btn-1");
let btn2El = document.getElementById("btn-2");
let inputEl = document.getElementById("enterpassword");

let button = document.querySelector("button");

function passwordGenerator() {
    password = "";
    let length2 = document.getElementById("lengthOfPassword").value;
    if (length2 <= 0) {
        length2 = 15;
    }
    for (let i = 0; i < length2; i++) {
        randomNum = Math.floor(Math.random() * 92);
        password += characters[randomNum];
    }
    console.log(password);
};


generatorEl.addEventListener('click', function() {
    passwordGenerator();
    password1.innerText = password;
    passwordGenerator();
    password2.innerText = password;
});

button.addEventListener("click", function() {
    password1.select();
    inputEl.value = "";
    if (document.execCommand("copy")) {
        pasteText.focus();
    } else {
        alert("Something went wrong!");
    }
});