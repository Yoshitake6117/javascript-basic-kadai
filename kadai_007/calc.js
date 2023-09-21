//変数numに0～100までのランダムな整数を代入する
let num = Math.floor(Math.random() * 100);

//3と5の倍数を判定後、elseなら3,5各々判定する
if( (num % 3) === 0 && (num % 5) === 0 ) {
  console.log('3と5の倍数です');
}
else if( num % 3 === 0) {
  console.log('3の倍数です');
} 
else if( num % 5 === 0) {
  console.log('5の倍数です');
}
else { /* 3,5の倍数以外 */
  console.log(num) ;
}

