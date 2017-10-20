//ES6语法
var set = (set) =>{
    var isClick = false;
      $('#button').click(function(){
        if(isClick == false){
          $('#button>span:nth-of-type(1)').attr('class','glyphicon glyphicon-remove').css({
            color:'white',
            fontSize:'16px'
          });;
          $('#button>span:nth-of-type(2)').hide();
          isClick = true;
          $('#top').hide();
          $('#buttonright').hide();
          $('body').css("overflow","hidden");
        }else{
          $('#button>span:nth-of-type(2)').show();
          $('#button span').attr('class','icon-bar')
          $('#buttonright').show();
          isClick = false;
          $('#top').show();
          $('body').css("overflow","auto");
        }
      })
    $('#bagClick').click(function(){
      console.log(2);
      $('#bagBox').toggle();
      var username = getCookie('username');
      var password = getCookie('password');
      if(username!=""&&password!=""){
        $('#logo').text('已登录');
        $('#logoin').attr('disabled','disabled');
      }else{
        $('#logo').text('登录');
      }
    })

    $('#logo').click(function(){
      $('#top').hide();
      $('#bagBox').hide();
      $('body').css("overflow","hidden");
      $("#logoBox").show();
      //冲cookie中获取数据
      var username = getCookie('username');
      var password = getCookie('password');
      $('#username').val(username);
      $('#password').val(password);
    })

    $('#close').click(function(){
      $("#logoBox").hide();
      $('#top').show();
      $('body').css("overflow","auto");
    })

    $('#logoin').click(function(){
      var username = $('#username').val();
      var password = $('#password').val();
      var nowDate = new Date();
      nowDate.setDate(nowDate.getDate()+2);
      setCookie('username',username,nowDate);
      setCookie('password',password,nowDate);
    })

    $('#btnright').click(function(){
      $('#bagBox').toggle();
    })

    var isOpen = false;
    for(var i = 0 ; i < $('.open').length;i++){
      $($('.open')[i]).click(function(){
        if(isOpen == false){
          $(this).attr('class','glyphicon glyphicon-remove open');
          isOpen = true;
        }else{
          $(this).attr('class','glyphicon glyphicon-plus open')
          isClick = false;
        }
      })
    }
}
set();
