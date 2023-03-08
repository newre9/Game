var t=Math.floor((Math.random()*100)+1);
var count=0;
console.log(t);
function Kontrol(){
    var i=Number(document.getElementById("in1").value);
    if(t>i){
        count++;
        document.getElementById("cc").innerHTML=count;
        document.getElementById("sonuc").innerHTML="Tahmin sayınızı büyütün";
    }else if(t<i){
        count++;
        document.getElementById("cc").innerHTML=count;
        document.getElementById("sonuc").innerHTML="Tahmin sayınızı Küçültün";
    }else if(t==i){
        count++;
        document.getElementById("cc").innerHTML=count;
        document.getElementById("sonuc").innerHTML="Tebrikler";
    }
}