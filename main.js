const btn = document.querySelector('button');
const a = document.querySelector('.a');
const b = document.querySelector('.b');
const label = document.querySelector('div');

const btnCount = (e) => {
    const conf = confirm('Choose:  OK - a^b  / CANCEL - b^a');
    if (conf) {
        optionalPow(a.value, b.value);
    } else {
        optionalPow(b.value, a.value);
    }
}



function optionalPow(a, b) {
    const result = Math.pow(a, b);
    console.log(result);
    label.textContent = result;
}

btn.addEventListener("click", btnCount);