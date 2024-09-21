//vegasの呼び出し
$('#main-visual').vegas({
    slides: [
        { src: "../img/main-01.webp" },
        { src: "../img/main-02.webp" },
        { src: "../img/main-03.webp" },
        ],
    timer:false,
    transition: 'slideLeft',//画像の切り替わり方のアニメーションの設定
    animation: 'random',
    delay:6000,//アニメーションが動くまでの時間
    //animationDuration:1000,アニメーション自体の長さ
});

//西暦を取得してfullYearに代入する
const fullYear = new Date().getFullYear();
if(fullYear >=2025){
$('#this-year').text('2024 -'+fullYear);
}else{
$('#this-year').text(fullYear);
}

//ハンバーガーボタン
//まず＃sp-navを非表示にする
//$('#sp-nav').hide();

//ハンバーガーメニュー
//#ham-btnをon.clickしたら
$('#ham-btn').on('click', function () {
    $(this).toggleClass('is-active');
    $('#sp-nav').toggleClass('slide');
});

