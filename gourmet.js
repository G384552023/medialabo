// 通信して取得したデータをコンソールに出力する（課題3-2）
function print(data) {
  let shops = data.results.shop;

  for (const shop of shops) {
    console.log("店名:", shop.name);
    console.log("ジャンル:", shop.genre.name);
    console.log("住所:", shop.address);
    console.log("アクセス:", shop.access);
    console.log("予算:", shop.budget.name);
    console.log("URL:", shop.urls.pc);
    console.log("--------------");
  }
}

// DOMに検索結果を表示する（課題5-1）
function printDom(data) {
  const keywordInput = document.querySelector('#searchInput');
  let keyword = keywordInput.value.trim().toLowerCase();

  let old = document.querySelector('#result');
  if (old) old.remove();

  let resultDiv = document.createElement("div");
  resultDiv.id = "result";
  document.body.appendChild(resultDiv);

  let shops = data.results.shop;
  let count = 0;

  for (let shop of shops) {
    let name = shop.name.toLowerCase();
    let address = shop.address;

    if (keyword === '' || name.includes(keyword)) {
      let p = document.createElement("p");
      p.textContent = `店名: ${shop.name}　住所: ${address}`;
      resultDiv.appendChild(p);
      count++;
    }
  }

  if (count === 0) {
    resultDiv.textContent = "該当するお店がありません。";
  }
}

// ジャンル選択してAPIリクエストを送る処理（課題6-1）
function sendRequest() {
  const genreSelect = document.querySelector('#genre');
  const genreId = genreSelect.value;

  if (!genreId) {
    alert("ジャンルを選択してください");
    return;
  }

  const url = `https://www.nishita-lab.org/web-contents/jsons/hotpepper/G${genreId}.json`;

  axios.get(url)
    .then(response => printDom(response.data))
    .catch(showError)
    .then(finish);
}

// 通信エラー処理（課題6-1）
function showError(err) {
  console.log("通信エラー:", err);
}

// 通信完了後の処理（課題6-1）
function finish() {
  console.log("Ajax 通信が完了しました");
}

// ページ読み込み後にイベントハンドラ登録
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#kensaku').addEventListener('click', sendRequest);
});
