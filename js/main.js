'use strict';

{


  function remove_task(){
  const task01 = document.getElementById('task01');

  task01.document.removeChild(task01);

  }

  var change_completed = function (){
    document.getElementById('task01').textContent = "完了";
    // document.textContent = "完了";

  }
  var change_completed2 = function (){
    document.getElementById('task02').textContent = "完了";
    // document.textContent = "完了";

  }

  var display_changed = function(num){

    switch (num) {
      case num === 0:
        document.getElementsById('task01').style.display="none";
        break;
      case num === 1:
        document.getElementsById('task02').style.display="none";
        break;

    }
  }


 }
