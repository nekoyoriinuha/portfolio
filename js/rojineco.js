// ロジねこ
var request = new XMLHttpRequest();
request.open('GET', 'https://app.livlog.xyz/webapi/v2/rojineco/cats/all');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('Authorization', 'Bearer 7bd0a0b0-02e0-43fb-bfa6-a9b36c4e9eec');

let data = []; // 全データを格納する配列
let currentIndex = 0; // 現在の表示開始位置
const itemsPerPage = 24; // 1ページに表示する件数

request.onload = function () {
  if (this.readyState === 4 && this.status === 200) {
    data = JSON.parse(this.responseText);
    // 初期表示
    displayItems(0, itemsPerPage);

    // ボタンの作成
    const loadMoreButton = document.createElement('button');
    loadMoreButton.textContent = 'もっと見る';
    loadMoreButton.addEventListener('click', () => {
      currentIndex += itemsPerPage+1;
      if (currentIndex <= data.results.length) {
      console.log(currentIndex +' '+ currentIndex+itemsPerPage)
      displayItems(currentIndex, currentIndex+itemsPerPage);
      } else {
        console.log("全てのデータを表示しました");
      }
    });
    document.getElementById('rojineco-btn').appendChild(loadMoreButton);
  }
};


function displayItems(start, end) {
  const resultElement = document.getElementById('rojineco-list');
  //const list = document.createElement('ul');
  //list.classList.add('rojineco__list');


  for (let i = start; i < end && i < data.results.length; i++) {
    var listItem = document.createElement('li');
    listItem.classList.add('rojineco__listItem');

    var photo = document.createElement('div');
    photo.classList.add('photo');
    var photoImg = document.createElement('img');
    photoImg.src = data.results[i].url;
    photoImg.alt = 'みんなの撮影した猫 Num'+[i];
    photo.style.backgroundImage = `url(${data.results[i].url})`;
    photo.appendChild(photoImg);
    listItem.appendChild(photo);
    resultElement.appendChild(listItem);
    var now = i;

    $(resultElement.lastChild).each(function(index) {
      $(this).delay(index * 500) 
        .queue(function() {
          $(this).addClass('show').dequeue();
        });
    });
  }



  // 次のボタンクリック時に表示する要素がなくなった場合、ボタンを削除する
  if (now >= data.results.length) {
    loadMoreButton.remove();
  }

  //resultElement.appendChild(listItem);
}

request.send();