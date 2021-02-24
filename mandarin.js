window.addEventListener("load",init);

function init(){
    document.getElementById("kaloria").addEventListener("input",szamol);
}

function szamol(){ 
    x=document.getElementById("kaloria").value;
    if (x!==""){ 
        if (isNaN(document.getElementById("kaloria").value)){
            document.getElementById("eredmeny").innerHTML="Nem számot adott meg!";
        }else{
            x=parseInt(x);
            document.getElementById("eredmeny").innerHTML=Math.round(x/100*46)+"-"+Math.round(x/100*50)+" kcal";
        }
    }else{
        document.getElementById("eredmeny").innerHTML="";
    }
}
