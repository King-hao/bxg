 define(['jquery'],function($){
 	//模块化  config.js中jquery为路径别名,就是依赖于public下assets下的jquery中的jquery.min.js
 	//         $为接收的上一个依赖文件的参数.
 // 	NProgress.start();

	// NProgress.done();

	// $('.navs ul').prev('a').on('click', function () {
	// 	$(this).next().slideToggle();
	// });
   
   $('#logoutBtn').click(function(){
		  $.ajax({
            type:'post',
            url:'/api/logout',
            dataType:'json',
            success:function(data){
                if(data.code==200){
                	location.href='/main/login'
                }
            }
		  });
		  return false;
	});

 })
	
	