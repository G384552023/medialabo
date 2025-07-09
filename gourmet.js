document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('kensaku');
  button.addEventListener('click', fetchGourmetData);
});

function fetchGourmetData() {
  const genreSelect = document.getElementById('genre');
  const genreValue = genreSelect.value;

  if (!genreValue) {
    alert('ジャンルを選んでください。');
    return;
  }

  // ジャンルコードに「G」をつける（例：006 → G006）
  const genreCode = 'G' + genreValue.padStart(3, '0');
  const url = `https://www.nishita-lab.org/web-contents/jsons/hotpepper/${genreCode}.json`;

  axios.get(url)
    .then(response => showResults(response.data))
    .catch(error => {
      console.error('データの取得に失敗しました:', error);
      alert('データの取得に失敗しました。');
    });
}

function showResults(data) {
  let shops = data.results.shop;

  // 古い結果を削除
  let oldResult = document.getElementById('result');
  if (oldResult) oldResult.remove();

  let resultDiv = document.createElement('div');
  resultDiv.id = 'result';

  if (!shops || shops.length === 0) {
    resultDiv.innerHTML = '<p>該当する店舗が見つかりませんでした。</p>';
  } else {
    for (let shop of shops) {
      const shopInfo = `
        <hr>
        <p><strong>店舗名:</strong> ${shop.name}</p>
        <p><strong>住所:</strong> ${shop.address}</p>
        <p><strong>アクセス:</strong> ${shop.access}</p>
        <p><strong>最寄駅:</strong> ${shop.station_name}</p>
        <p><strong>ジャンル:</strong> ${shop.genre.name}</p>
        <p><strong>サブジャンル:</strong> ${shop.sub_genre ? shop.sub_genre.name : 'なし'}</p>
        <p><strong>予算:</strong> ${shop.budget.name}</p>
        <p><strong>キャッチコピー:</strong> ${shop.catch}</p>
        <p><strong>営業時間:</strong> ${shop.open}</p>
      `;
      resultDiv.innerHTML += shopInfo;
    }
  }

  document.body.appendChild(resultDiv);
}
