'use strict';

{
  //DOM要素の取得はなるべく最初に実行させていた方が良いです。
  //現在の実装方法だと毎回document.getElementById()を実行させなければならないので無駄が多いです。
  //また、現在だとボタンのDOM要素を取得してしまっているので、修正の必要ありです！！
  const task01 = document.getElementById('task01');
  const task02 = document.getElementById('task02');

  const addbutton = document.getElementById('add-button');
  const todoTable = document.getElementById('todo-table');


  function remove_task() {
    //const task01 = document.getElementById('task01');

    task01.document.removeChild(task01);

  }

  var change_completed = function () {
    //document.getElementById('task01').textContent = "完了";
    // document.textContent = "完了";

  }
  var change_completed2 = function () {
    //document.getElementById('task02').textContent = "完了";
    // document.textContent = "完了";

  }

  var display_changed = function (num) {

    switch (num) {
      //case文の書き方が間違っています。
      //case num === 0:
      case 0:
        //document.getElementsById('task01').style.display="none";
        task01.style.display = "none";

        /*-------------------------------------------------------------
        [ヒント]
        ここにはtodos配列に保管されているtaskオブジェクトのstatuキーを参照して
        "作業中"なら表示、"完了"なら非表示
        という処理を記述しましょう！！
        -------------------------------------------------------------*/


        break;
      //case num === 1:
      case 1:
        //document.getElementsById('task02').style.display="none";
        task02.style.display = "none";
        break;

    }
  }

  /*-------------------------------------------------------------
  [ヒント]
  テーブルに表示させるリストは配列とオブジェクトで管理しましょう！！
  -------------------------------------------------------------*/

  //Todoリスト一覧を保管するための配列を定義
  const todos = [];

  //addボタン押下時の処理
  addbutton.addEventListener('click', event => {
    //空のオブジェクトを定義
    const task = {};
    //taskオブジェクトのidキーを定義
    task.id = todos.length + 1;
    //taskオブジェクトのcommetキーを定義（フォームに入力されている値を代入）

    //taskオブジェクトのstatusキーを定義（"作業中"を代入）

    //taskオブジェクトとtodos配列に追加
    todos.push(task);

    //todos配列の中身を表示させる処理を追加
    
  })


}
