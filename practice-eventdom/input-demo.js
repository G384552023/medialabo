function greeting(){
    let i=document.querySelector('input[name="shimei"]');
    shmei=i.value;
    aisatsu='こんにちは,'+shmei+'さん';
    let p=document.querySelector('p#message');
    p.textContent=aisatsu;
}
let b=document.querySelector('button#print');
b.addEventListener('click',greeting);