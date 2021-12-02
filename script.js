function setup() {
  //キャンバスを作成
  createCanvas(600, 600);
  //図形の線無し
  noStroke();
}
function draw() {
  //背景色
  background(128,0,128,50);
  //オブジェクトの色をランダム（透明度90）
  fill(random(255), random(0), random(255), 90);
  //キャンバスの中心に直径50pxの丸を描画
  ellipse(random(width), random(height), random(50));
}
