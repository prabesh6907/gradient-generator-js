let heightTop = document.getElementById('top').clientHeight;
let heightBottom = document.getElementById('bottom').clientHeight;

let marginBottom = (document.documentElement.clientHeight - heightTop - heightBottom)/2;
document.getElementById('pageContent').style.marginTop = `${marginBottom}px`;
document.getElementById('pageContent').style.marginBottom = `${marginBottom}px`;

let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let copyText = document.getElementById('copyText');
let copy = document.querySelector('.copy');

const handlebtn1 = () => {
    let  hexcode = "0123456789abcdef";
    let color = "#";
    for (let i=0;i<6;i++)
    {
        color += hexcode[Math.trunc(Math.random()*16)];
    }
    btn1.style.backgroundColor = color;
    btn1.textContent = color;
    copyText.textContent = `linear-gradient(to right, ${btn1.textContent}, ${btn2.textContent});`;
    document.body.style.backgroundImage = `linear-gradient(to right, ${btn1.textContent}, ${btn2.textContent})`;
}
const handlebtn2 = () => {
    let  hexcode = "0123456789abcdef";
    let color = "#";
    for (let i=0;i<6;i++)
    {
        color += hexcode[Math.trunc(Math.random()*16)];
    }
    btn2.style.backgroundColor = color;
    btn2.textContent = color;
    copyText.textContent = `linear-gradient(to right, ${btn1.textContent}, ${btn2.textContent});`;
    document.body.style.backgroundImage = `linear-gradient(to right, ${btn1.textContent}, ${btn2.textContent})`;
}

btn1.addEventListener('click', handlebtn1);
btn2.addEventListener('click', handlebtn2);
copy.addEventListener('click', () => {
    navigator.clipboard.writeText(copyText.textContent);
    alert('Copied to clipboard!');
});