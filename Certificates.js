var Index = 0;
fun()

function fun(){
    var i;
    var y= document.getElementsByClassName("myCertificates");
    console.log (y,length)
    for(i=0; i<y.length; i++){
        y[i].style.display="none";
    }
    Index++;
    if(Index > y.length) {Index = 1}
    y[Index-1].style.display="block";
    setTimeout(fun, 2000);
}