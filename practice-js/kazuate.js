let kotae = Math.floor(Math.random() * 10) + 1;
console.log("答え（デバッグ用）: " + kotae);

let kaisu = 0;    
let seikai = false; 

document.querySelector('#calc').addEventListener('click', hantei);

function hantei() {
  if (seikai || kaisu >= 4) {
    document.querySelector('#result').textContent = 'ゲームはすでに終了しています。';
    return;
  }

  let yoso = Number(document.querySelector('#yoso').value);
  kaisu++;

  document.querySelector('#kaisu').textContent = kaisu;
  document.querySelector('#answer').textContent = yoso;

  let result = '';

  if (yoso === kotae) {
    result = '正解です.おめでとう！';
    seikai = true;
  } else if (kaisu >= 3) {
    result = 'まちがい.残念でした.答えは' + kotae + 'です.';
  } else if (yoso < kotae) {
    result = 'まちがい.答えはもっと大きいですよ';
  } else {
    result = 'まちがい.答えはもっと小さいですよ';
  }

  document.querySelector('#result').textContent = result;
}

