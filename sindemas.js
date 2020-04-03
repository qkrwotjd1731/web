var imgNum;
var combo = 0;
function viewImage(){
  imgNum = Math.round(Math.random());
  $("#quizImg").attr("src",imgArray[imgNum].img);
}
$(function(){viewImage();});
function isCorrect(){
  if($("#textbox").val()==imgArray[imgNum].name) {
    combo++;
    $("#answer").text("정답입니다! "+combo+"연속");
    $("#textbox").val("");
    viewImage();
  }
  else {
    $("#answer").text("오답입니다");
    $("#textbox").val("");
    combo = 0;
  }
}
function enterCheck(){
  if(event.keyCode == 13)
    isCorrect();
}
function answer(){
  $("#answer").text("정답: "+imgArray[imgNum].name);
}
