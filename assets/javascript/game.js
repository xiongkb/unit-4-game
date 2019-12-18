// variables to be listed
var ranNum  //will add 19 so it starts at 19. random number for "gen-num"
var gemNum = Math.round(Math.random()*12)+1; // hidden gem value "gem-value"

// showing the randomNUmber that player needs to match
function start() {
    ranNum = Math.round(Math.random()*102)+19;
    $(".gen-num").text(ranNum);
}
start();

function blue () {

}

function violet () {
    
}

function red () {
    
}

function green () {
    
}