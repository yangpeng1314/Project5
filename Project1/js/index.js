//头部导航栏
$("ul.tabs").on("mouseenter","a",function(e){
    e.preventDefault();
    var $a=$(this);
    var i=$a.parent().prevAll().length;
    var right=(7-i)*102;
    $("div.box").css({right});
})
//foot1图片轮播
// function task(){
//     var img=foot1.querySelector(".show");
//     img.className="";
//     var next=img.nextElementSibling;
//     if(next!=null)
//         next.className="show";
//     else
//         img.parentNode.children[0].className="show";
// }
// var timer=setInterval(task,3000);
// timer();
var m=0;
var timer = setInterval(function(){
  if(m>3)
    m=1;
  else
  m++;
  var n="img/"+m+".jpg";
  $(".foot1>img").attr("src",n);
},3000);