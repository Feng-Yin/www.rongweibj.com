
/**
 * Created by kwjjsa on 2019/4/30.
 */
$(function(){
	

    //		折叠板
    $('.postLists li').click(function() {
        $(this).toggleClass('active').siblings().removeClass('active');
      
         if($(this).hasClass('active')) {
            $(this).find('.detailText').slideDown(500);
        } else {
            $(this).find('.detailText').slideUp(500);
        }
        
          
    });
    $('.postLists li .detailText').click(function(e) {
        e.stopPropagation();
       
    });
    
   $('.postLists li .detailText h4').click(function() {
        $(this).siblings().toggle(500);
        
          
    });
  
//		折叠板
		$('.fold li').click(function() {
			$(this).toggleClass('active').siblings().removeClass('active');
			$(this).siblings().find('article').slideUp();
			if($(this).hasClass('active')) {
				$(this).find('article').slideDown();
			} else {
				$(this).find('article').slideUp();
			}
		});
		$('.fold li article').click(function(e) {
			e.stopPropagation();
		});
		$('.fold li button').click(function(e) {
			e.stopPropagation();
		});
		
		
		 var $asd1 = $(".about_five .about_five_title ul li");
    $asd1.click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        var $index1 = $asd1.index(this);
        var $content1 = $(".about_five .about_five_box .about_five_list");
        $content1.eq($index1).show().siblings().hide()
    });

		
})