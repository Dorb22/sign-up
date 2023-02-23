const input = document.querySelectorAll('input');
const arr = Array.from(input);
const conf = arr.pop();
const password = arr.pop();
password.addEventListener('keyup', check);

arr.forEach((item)=> {
    item.addEventListener('keyup', check);
    item.addEventListener('blur', check);
}
)

function check (event){
    if (event.target.checkValidity()){
        event.target.style.borderColor = 'green';
    }
    else event.target.style.borderColor = 'red';
}

conf.addEventListener('keyup', () => {
    if (conf.value === password.value){
        conf.style.borderColor = 'green';
        conf.setCustomValidity("");
    }
    else {
        conf.style.borderColor = 'red';
        conf.setCustomValidity("Passwords do not match.");
    }
    console.log(conf);
})


