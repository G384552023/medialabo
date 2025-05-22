
let kotae = Math.floor(Math.random() * 10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

let kaisu = 0;

let seikai = false;

let b = document.querySelector('span#kaisu');
b.addEventListener('click', showSelectResult);

function hantei() {
  let yoso = 4;

  if (kaisu >= 4 || seikai) {
    console.log('答えは '+kotae+'でした。すでにゲームは終わっています');
    return;
  }

  kaisu++;

  console.log(kaisu+'回目の予想: '+yoso);

  if (yoso === kotae) {
    console.log("正解です。おめでとう！");
    seikai = true;
  } else {
    if (kaisu > 3) {
      console.log('まちがい。残念でした答えは'+kotae+'です。');
    } else if (yoso < kotae) {
      console.log("まちがい。答えはもっと大きいですよ");
    } else {
      console.log("まちがい。答えはもっと小さいですよ");
    }
  }
}
