$(document).ready(function(){


				var pd_btm  = $("#img_title_1 .img_title_div > .pd_tp_bm_300").outerHeight() - $("#img_title_1 .img_title_div > .pd_tp_bm_300").height();

				var top_height = $("#gnb").outerHeight() + $("#main").outerHeight() + $("#target").outerHeight() - ( pd_btm / 2 );
				var now = $(window).scrollTop();
				console.log(top_height);

				var top_height_2 = top_height + $("#img_title_1").outerHeight();
				
				
				$(window).scroll(function(){
					if ($(this).scrollTop() > top_height) {
						
						$("#img_title_1 .img_title_div").addClass("show_now");
				
					}  else {
						$("#img_title_1 .img_title_div").removeClass("show_now");
					}
				
				
					if ($(this).scrollTop() > top_height_2) {
						
						$("#img_title_2 .img_title_div").addClass("show_now");
				
					} else {
						$("#img_title_2 .img_title_div").removeClass("show_now");
						
					}
				
        });

					
			});