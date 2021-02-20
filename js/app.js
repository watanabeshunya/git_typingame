// 必要なHTML要素の取得
const wrap = document.getElementById('wrap');
const start = document.getElementById('start');

const textLists = [
    'Hello World','This is my App','How are you?',
  'Today is sunny','I love JavaScript!','Good morning',
  'I am Japanese','Let it be','Samurai',
  'Typing Game','Information Technology',
  'I want to be a programmer','What day is today?',
  'I want to build a web app','Nice to meet you',
  'Chrome Firefox Edge Safari','machine learning',
  'Brendan Eich','John Resig','React Vue Angular',
  'Netscape Communications','undefined null NaN',
  'Thank you very much','Google Apple Facebook Amazon',
  'ECMAScript','console.log','for while if switch',
  'var let const','Windows Mac Linux iOS Android',
  'programming'
]; // 複数のテキストを格納する配列

 //新しい配列を用意する(createText関数で得た文字をcreateText関数にに持ち込む目的)
let checkTexts = []; 

//ランダムな文字列を表示する関数を定義
const createText = () => {
    const p = document.getElementById('text');
    const random = Math.floor(Math.random() * textLists.length);

    //p要素を空にする
    p.textContent = '';

    //テキストを１文字ずつ分解して挿入する
    checkTexts = textLists[random].split('').map(value => {

        //span要素を作成(valueという文字列=>spanというHTML要素　の変換)
        const span = document.createElement('span');
        span.textContent = value;
        
        p.appendChild(span);

        //１文字ずつ配列checkTextsに文字列spanを格納していく(mapによって繰り返して全文字)
        return span;
    })
}

// キーイベント＆入力判定処理
const keyDown = e => {
    if(e.key ===checkTexts[0].textContent) {
        checkTexts[0].className = 'add-color';
        //配列から１文字を削除
        checkTexts.shift();
        //最後まで入力したら新しいテキストを用意する
        if(!checkTexts.length) createText();
    }
}; 

// const rankCheck = rank => {}; // ランク判定とメッセージ生成処理

// const gameOver = id => {}; // ゲームの終了処理

// const timer = () => {}; // タイマー処理

// ゲームスタート時の処理
start.addEventListener('click', () => {
    createText();

    //キーボードのイベント処理
    document.addEventListener('keydown', keyDown)
}); 