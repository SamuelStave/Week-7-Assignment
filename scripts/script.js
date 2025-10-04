// ----- Week 7: JS Functions (scope, params, return) -----
function add(a, b) {
    return a + b;
}
let globalVar = "I'm global!";
function scopeDemo() {
    let localVar = "I'm local!";
    return globalVar + " " + localVar;
}
document.getElementById('sumBtn').onclick = function() {
    const a = Number(document.getElementById('num1').value);
    const b = Number(document.getElementById('num2').value);
    document.getElementById('sumResult').textContent = "Sum: " + add(a, b);
};
document.getElementById('scopeBtn').onclick = function() {
    document.getElementById('scopeResult').textContent = scopeDemo();
};

// ----- Week 7: JS triggers CSS Animation -----
const animBtn = document.getElementById('animateBoxBtn');
const jsAnimBox = document.getElementById('jsAnimBox');
animBtn.onclick = function() {
    jsAnimBox.classList.add('animated');
    setTimeout(() => jsAnimBox.classList.remove('animated'), 900);
};
const flipBtn = document.getElementById('flipBtn');
const flipCard = document.getElementById('flipCard');
flipBtn.onclick = function() {
    flipCard.classList.toggle('flipped');
};

// ----- Week 6: Interactive Elements -----
document.getElementById('showMsgBtn').addEventListener('click', function() {
    document.getElementById('msgOutput').textContent = "Hello! You clicked the button!";
});
document.getElementById('liveInput').addEventListener('input', function(e) {
    document.getElementById('liveResult').textContent = "You typed: " + e.target.value;
});
document.getElementById('toggleThemeBtn').addEventListener('click', function() {
    document.body.classList.toggle('dark');
});
let count = 0;
function updateCounter() {
    document.getElementById('counterValue').textContent = count;
}
document.getElementById('incrementBtn').addEventListener('click', function() {
    count++;
    updateCounter();
});
document.getElementById('decrementBtn').addEventListener('click', function() {
    count--;
    updateCounter();
});
document.getElementById('resetBtn').addEventListener('click', function() {
    count = 0;
    updateCounter();
});
updateCounter();
document.querySelectorAll('.faq-question').forEach(function(btn) {
    btn.addEventListener('click', function() {
        let item = btn.parentElement;
        item.classList.toggle('active');
    });
});
function validateName(name) {
    return name.trim().length >= 2;
}
function validateEmail(email) {
    return /^[\w\.-]+@[\w\.-]+\.\w{2,}$/.test(email);
}
function validatePassword(pw) {
    return pw.length >= 6;
}
const form = document.getElementById('signupForm');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    let valid = true;
    document.getElementById('formSuccess').textContent = "";
    if (!validateName(name)) {
        document.getElementById('nameError').textContent = "Enter at least 2 characters.";
        valid = false;
    } else {
        document.getElementById('nameError').textContent = "";
    }
    if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = "Enter a valid email address.";
        valid = false;
    } else {
        document.getElementById('emailError').textContent = "";
    }
    if (!validatePassword(password)) {
        document.getElementById('passwordError').textContent = "Password must be at least 6 characters.";
        valid = false;
    } else {
        document.getElementById('passwordError').textContent = "";
    }
    if (valid) {
        document.getElementById('formSuccess').textContent = "Signup successful!";
        form.reset();
    }
});
form.name.addEventListener('input', function() {
    if (validateName(form.name.value)) {
        document.getElementById('nameError').textContent = "";
    }
});
form.email.addEventListener('input', function() {
    if (validateEmail(form.email.value)) {
        document.getElementById('emailError').textContent = "";
    }
});
form.password.addEventListener('input', function() {
    if (validatePassword(form.password.value)) {
        document.getElementById('passwordError').textContent = "";
    }
});
