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


//ランダムな文字列を表示する関数を定義
const createText = () => {
    const p = document.getElementById('text');
    const random = Math.floor(Math.random() * textLists.length);

    //テキストを１文字ずつ分解して俵祖へ挿入する
    textLists[random].split('').map(value => {

        //span要素を作成(valueという文字列=>spanというHTML要素　の変換)
        const span = document.createElement('span');
        span.textContent = value;
        
        p.appendChild(span);
    })
}



// const keyDown = e => {}; // キーイベント＆入力判定処理

// const rankCheck = rank => {}; // ランク判定とメッセージ生成処理

// const gameOver = id => {}; // ゲームの終了処理

// const timer = () => {}; // タイマー処理


// start.addEventListener('click', () => {}); // ゲームスタート時の処理