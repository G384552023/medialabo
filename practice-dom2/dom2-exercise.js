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
function show() {
	let oldP = document.querySelector('#addr + p');
	if (oldP) oldP.remove();

	let oldUl = document.querySelector('#dept + ul');
	if (oldUl) oldUl.remove();

	let p = document.createElement('p');
	p.textContent = campus.address;
	let addrH2 = document.querySelector('h2#addr');
	addrH2.insertAdjacentElement('afterend', p);

	let ul = document.createElement('ul');
	for (let g of gakka) {
		let li = document.createElement('li');
		li.textContent = g.name;
		ul.appendChild(li);
	}
	let deptH2 = document.querySelector('h2#dept');
	deptH2.insertAdjacentElement('afterend', ul);
}
let btn = document.querySelector('button#show');
btn.addEventListener('click', show);
