//MDN課題
//現在日時
const date = new Date() ;
//年取り出し
const year = date.getFullYear();
//月取り出し　取り出月は0起点なので+1する
const month = date.getMonth() + 1;
//日取り出し
const day = date.getDate();

//指定された表示形式（年月日)で出力
console.log(year+'年'+month+'月'+day+'日');