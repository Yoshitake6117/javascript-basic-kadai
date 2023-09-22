// btn要素を取得し定数bttnに代入
const bttn = document.getElementById('btn'); 

//ボタンクリックでイベント処理
bttn.addEventListener('click',() => {
  //h2 text要素を取得し定数h2Textを代入
  const h2Text = document.getElementById('text');

  //　メッセージを変更
  h2Text.textContent = 'ボタンをクリックしました';

});