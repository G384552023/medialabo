//////////////// ここは書き換えてはいけない！ 
let campus = {
	address: "八王子市館町",
	buildingD: ["D101", "D102", "D103", "D201", "D202", "D203", "D204", "D205"],
	lon: 35.624869704425,
	lat: 139.28201056633
};

let gakka = [
	{name: "機械システム工学科", ename: "Department of Mechanical Systems Engineering"},
	{name: "電子システム工学科", ename: "Department of Electronics and Computer Systems"},
	{name: "情報工学科", ename: "Department of Computer Science"},
	{name: "デザイン学科", ename: "Department of Design"}
];

//////////////// ここから下にプログラムを書きたそう!
let p=document.querySelector('button#show');
p.addEventListener('click',greeting);
function greeting() {
	console.log(campus.address);
    let a =document.createElement('ul');
    a.textContent=campus.address;
	let b=document.querySelector('h2#addr');
	b.insertAdjacentElement('beforeend',a);
for(let gakka1 of gakka) {
	console.log(gakka1.name);
    let l =document.createElement('li');
    l.textContent=gakka1.name;
	let u=document.querySelector('h2#dept');
	u.insertAdjacentElement('beforeend',l);
}
}

console.log(campus.address);

for (let gakka1 of gakka) {
	console.log(gakka1.name);
  }

	

  
