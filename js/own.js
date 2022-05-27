let timer;
let start = new Date();
let hour = 0;
let min  = 0;
let sec  = 0;
let now  = 0;
let datet = 0;
function disp(){
    now = new Date();
    datet = parseInt((now.getTime() - start.getTime()) / 1000);

	hour = parseInt(datet / 3600);
	min = parseInt((datet / 60) % 60);
	sec = datet % 60;

	// 数値が1桁の場合、頭に0を付けて2桁で表示する指定
	if(hour < 10) { hour = "0" + hour; }
	if(min < 10) { min = "0" + min; }
	if(sec < 10) { sec = "0" + sec; }

	// フォーマットを指定
	let timer1 = hour + ':' + min + ':' + sec; 

	// テキストフィールドにデータを渡す処理
	timer = document.form1.field1.value = timer1; 

	setTimeout("disp()", 1000);

}

//自機クラス
class Own{
    constructor(){
        this.x = (field_w/2)<<8; //初期画面の自機位置
        this.y = (field_h)-100<<8;

        this.chara  = 3; //snum  =0
        this.speed  = 712; //this.speed = 256 →１px/フレーム動く

        this.move = {};
    }

    //自機の描画
    draw(){
        drawSprite(this.chara, this.x, this.y);
    }

    //自機の移動
    update(){
        this.y -= this.speed*2;
        // document.body.onclick = this.y -= this.speed;
    }
}