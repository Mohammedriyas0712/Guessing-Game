var randomnum=Math.round(Math.random()*100);
var live=5;
// console.log(randomnum);

function submi(){
    var input=document.getElementById("input").value;
    live--;

    console.log(input,randomnum);
    if(input==randomnum)
    {
        location.href="./win.html";
    }
    else if(input<randomnum  &&  live!=0)
    {
        document.getElementById("l3").innerHTML="Your Guess is low";
    }
    else if(input>randomnum && live!=0)
    {
        document.getElementById("l3").innerHTML="Your Guess is high";
    }
    else if(live==0)
    {
        location.href="./lose.html";
    }
    document.getElementById("l2").innerHTML="Remaining Lives  "+live;

}
function again(){
    location.href="./index.html";
}