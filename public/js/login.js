define(['jquery'],function($){
	//登录功能模块化
   $('#loginBtn').click(function(){
         $.ajax({         
            type:'post',
            url:'/api/login',
            data: $('#loginForm').serialize(),
            dataType: 'json',
            success: function(data){
              console.log(data);
              if(data.code==200){
                location.href='/main/index'
              }else{
                   alert('用户名或密码错误');
              }
            }
         });
         return false;
       });
})