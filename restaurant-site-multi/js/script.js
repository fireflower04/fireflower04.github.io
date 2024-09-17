//vegasの呼び出し
$('#main-visual').vegas({
    slides: [
        { src: "img/main-1.webp" },
        { src: "img/main-2.webp" },
        { src: "img/main-3.webp" },
        ],
    timer:false,
    transition: 'slideLeft',//画像の切り替わり方のアニメーションの設定
    animation: 'random',
    delay:6000,//アニメーションが動くまでの時間
    //animationDuration:1000,アニメーション自体の長さ
});

$(function(){

//ハンバーガーボタン
//まず＃g-navを非表示にする
$('#g-nav').hide();
//#ham-btnをon.clickしたら
$('#ham-btn').on('click',function(){
//thisにtoggleClassし、さらに#g-navをfadeToggleする
$(this).toggleClass('is-active');
$('#g-nav').fadeToggle(200);
});

//#g-nav aをon.clickしたら、#g-navをfadeOutし、ペケを三本線に戻す
$('#g-nav a').on('click',function(){
$('#g-nav').fadeOut(200);
$('#ham-btn').removeClass('is-active');
});

//ajaxで外部データを呼び出す
$('#news-list').load('news.txt');

//カルーセル
$('.bxslider').bxSlider({
ticker: true,
speed: 30000,
minSlides: 2,
maxSlides: 6,
slideWidth: 320,   
});

//西暦を取得してfullYearに代入する
const fullYear = new Date().getFullYear();
/* const fullYear = 2025; 2025年になったときにちゃんと表示されるか確認*/
if(fullYear >=2025){
$('#this-year').text('2024 -'+fullYear);    
}else{
$('#this-year').text(fullYear);
}

//多言語化にともなうリダイレクト
$('#btn-ja').on('click', function(){
$(this).href = 'https://fireflower04.github.io/restaurant-site-multi/';
});
$('#btn-it').on('click', function(){
$(this).href = 'https://fireflower04-github-io.translate.goog/restaurant-site-multi/?_x_tr_sl=ja&_x_tr_tl=it&_x_tr_hl=ja';
});
$('#btn-en').on('click', function(){
$(this).href = 'https://fireflower04-github-io.translate.goog/restaurant-site-multi/?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=ja';
});

});



