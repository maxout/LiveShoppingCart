$(document).ready(function(){function e(e){var i=$("#nfx_live_shpg_cart").val();var s=parseInt($("div#nfx_live_cart div#carousel_checkout li.car").not(".targetOutEl").length);var o=parseInt($("div#nfx_live_cart div#carousel_in_cart li.car").not(".targetOutEl").length);if(s<13||o<13){$.post(i,{},function(i){var u="/media/image/thumbnail/";var a=i["data"]["baught"];var f=i["data"]["in_cart"];var l=$("#carousel_checkout div.hid_example").html();var c=$("#carousel_in_cart div.hid_example").html();if(a.length>0&&s<13){for(var h in a){var p=l;p=p.replace(/prod_name_placeholder/g,a[h]["name"]);p=p.replace("777,00",a[h]["price"]);p=p.replace("aricle_link_placeholder","/detail/index/sArticle/"+a[h]["article_id"]);p=p.replace("image_placeholder",'<img src="'+u+a[h]["img"]+"_140x140"+"."+a[h]["extension"]+'" alt=""/>');$('<li class="car">'+p+"</li>").appendTo("ul.jcarouselAutoHorizontalLiveTickerCheckout")}}if(f.length>0&&o<13){for(var d in f){var v=c;v=v.replace(/prod_name_placeholder/g,f[d]["name"]);v=v.replace("777,00",f[d]["price"]);v=v.replace("aricle_link_placeholder","/detail/index/sArticle/"+f[d]["article_id"]);v=v.replace("image_placeholder",'<img src="'+u+f[d]["img"]+"_140x140"+"."+f[d]["extension"]+'" alt=""/>');$('<li class="car">'+v+"</li>").appendTo("ul.jcarouselAutoHorizontalLiveTickerCart")}}if($("div#nfx_live_cart div#carousel_checkout li.targetOutEl").length>10){$("div#nfx_live_cart div#carousel_checkout li.targetOutEl").remove()}if($("div#nfx_live_cart div#carousel_in_cart li.targetOutEl").length>10){$("div#nfx_live_cart div#carousel_in_cart li.targetOutEl").remove()}t("div#nfx_live_cart div#carousel_checkout",3500);t("div#nfx_live_cart div#carousel_in_cart",2500);if(e==1){n();r("div#nfx_live_cart div#carousel_checkout");r("div#nfx_live_cart div#carousel_in_cart")}},"json")}}function t(e,t){$(e).jcarousel().jcarouselAutoscroll({interval:t,target:"+=1",autostart:true}).on("jcarousel:targetout","li",function(e,t){$(this).addClass("targetOutEl")})}function n(){var t=$.timer(function(){e(0)});t.set({time:11e3,autostart:true})}function r(e){var t="div#nfx_live_cart div#carousel_checkout, #carousel_checkout_parent, #carousel_checkout_presentation, ul#carousel_checkout_presentation_list";var n="#carousel_checkout_presentation";if(e=="div#nfx_live_cart div#carousel_in_cart"){t="div#nfx_live_cart div#carousel_in_cart, #carousel_in_cart_parent, #carousel_in_cart_presentation, ul#carousel_in_cart_presentation_list";n="#carousel_in_cart_presentation"}$(t).contents().on({mouseenter:function(){var t=$(e).innerHeight();$(e).jcarouselAutoscroll("stop");var r=$(e).jcarousel("target");var i=$(r).find("a").attr("href");var s=$(r).find(".imgHolder").html();var o=$(r).find(".incartText").html();s=s.replace("_140x140","_720x600");$(n+" ul li.ccpl_image div.imgHolder,"+n+" ul li.ccpl_text div.incartText").css("height",t+"px");$(n+" ul li.ccpl_image div.imgHolder a").attr({href:i}).html(s);$(n+" ul li.ccpl_text div.incartText a").attr({href:i}).html(o);$(".imgLiquidFill").imgLiquid({fill:false,horizontalAlign:"center",verticalAlign:"center"});$(n).css("height",t+"px").show()},mouseleave:function(){$(n).hide();$(n+" ul li.ccpl_image div.imgHolder a").html("");$(n+" ul li.ccpl_text div.incartText a").html("");$(e).jcarouselAutoscroll("start")}})}e(1)})
