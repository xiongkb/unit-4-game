// variables to be listed
var ranNum = Math.floor(Math.random()*102)+19;  //will add 19 so it starts at 19. random number for "gen-num"
var gemCounter = 0;
var wins = 0;
var loss = 0;

// hidden gem value "gem-value"
var blueNum = Math.floor(Math.random()*12)+1;
var violetNum = Math.floor(Math.random()*12)+1;
var redNum = Math.floor(Math.random()*12)+1;
var greenNum = Math.floor(Math.random()*12)+1;

// showing the randomNUmber that player needs to match
function start() {
    $(".gen-num").text(ranNum);
    $(".blue").attr("blueNum", blueNum);
    $(".violet").attr("violetNum", violetNum);
    $(".red").attr("redNum", redNum);
    $(".green").attr("greenNum", greenNum);
}
start();
// making it so that each picture when pressed will add to the collected counter
$(".blue").on("click", function() {
    var gemValue = $(this).attr("blueNum");
    gemValue = parseInt(gemValue);
    gemCounter += gemValue;
    $(".gem-value").text(gemCounter);
    check()
})
$(".violet").on("click", function() {
    var gemValue = $(this).attr("violetNum");
    gemValue = parseInt(gemValue);
    gemCounter += gemValue;
    $(".gem-value").text(gemCounter);
    check()
})
$(".red").on("click", function() {
    var gemValue = $(this).attr("redNum");
    gemValue = parseInt(gemValue);
    gemCounter += gemValue;
    $(".gem-value").text(gemCounter);
    check()
})
$(".green").on("click", function() {
    var gemValue = $(this).attr("greenNum");
    gemValue = parseInt(gemValue);
    gemCounter += gemValue;
    $(".gem-value").text(gemCounter);
    check()
})

function check() {
    if (gemCounter === ranNum) {
        wins ++;
        $(".won").text(wins);
        start();
    } else if (gemCounter > ranNum){
        loss ++;
        $(".lost").text(loss);
        start();
    }

}