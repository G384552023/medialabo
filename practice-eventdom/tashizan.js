let p=document.querySelector('button#calc');
p.addEventListener('click',greeting);
function greeting(){
    let a=document.querySelector('input[name="left"]');
    left=a.value;
    let a1 = Number(left);
    let b=document.querySelector('input[name="right"]');
    right=b.value;
    let b1 = Number(right);
    kotae=a1+b1;
    let p=document.querySelector('span#answer');
    p.textContent=kotae;
}