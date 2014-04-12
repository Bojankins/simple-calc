(function(){
  'use strict';

  $(document).ready(initialize);
  function initialize(){
    $('#add').click(add);
    $('#sub').click(sub);
    $('#multi').click(multi);
    $('#div').click(divide);
    $('#expo').click(expo);
    $('#root').click(squrt);
    $('#factorial').click(fac);
  }

  function add(){
    var x = input();

    var y = x.num1 + x.num2;
    result(y);
  }

  function sub(){
    var x = input();

    var y = x.num1 - x.num2;
    result(y);
  }

  function multi(){
    var x = input();

    var y = x.num1 * x.num2;
    result(y);
  }

  function divide(){
    var x = input();

    var y = (x.num1 / x.num2);
    result(y);
  }

  function expo(){
    var x = input();

    var y = Math.pow(x.num1, x.num2);
    result(y);
  }

  function squrt(){
    var x = input();

    var y = Math.sqrt(x.num1);
    result(y);
  }

  function fac(){
    var x = input();

    var i = 1;
    var max = x.num1;
    x.num1 = 1;
    while(i <= max){
      x.num1 *= i;
      i++;
      result(x.num1);
    }
    result(x.num1);
  }

  function result(x){
      $('#result').text(x);
  }

  function input(){
    var x = $('#num1').val()*1;
    var y = $('#num2').val()*1;
    return { 'num1':x, 'num2':y };
  }
})();