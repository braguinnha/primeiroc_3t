let tabuada = 5;

function escreva(){
    document.write(tabuada + " x 1 = " + (tabuada*1) + "<br>");
    document.write(tabuada + " x 2 = " + (tabuada*2) + "<br>");
    document.write(tabuada + " x 3 = " + (tabuada*3) + "<br>");
    document.write(tabuada + " x 4 = " + (tabuada*4) + "<br>");
    document.write(tabuada + " x 5 = " + (tabuada*5) + "<br>");
    document.write(tabuada + " x 6 = " + (tabuada*6) + "<br>");
    document.write(tabuada + " x 7 = " + (tabuada*7) + "<br>");
    document.write(tabuada + " x 8 = " + (tabuada*8) + "<br>");
    document.write(tabuada + " x 9 = " + (tabuada*9) + "<br>");
    document.write(tabuada + " x 10 = " + (tabuada*10) + "<br>");
}

function MinhaTabuada(){
    for(let i = 1; i <= 10; i++){
        document.write("tabuada do " + i + "<br>");
        for(let j = 1; j<= 10; j++){
            document.write(i + " x " + j + " = " + (j*i) + "<br>");
        }
        document.write("<br>");
    }
}

function Cubo(){
    for(let i = 20; i <= 2; i--){
        document.write("o cubo de "+i+ " é ("+i+" x "+i+" x "+i+" ) =  "+(i*i*i)+"<br>");
    }
}
function Média(){
    let n1 = document.getElementById("v1").value;
    let n2 = document.getElementById("v2").value;
    let n3 = document.getElementById("v3").value;
    let r = (Number(n1) + Number(n2) + Number(n3))/3;
    document.getElementById("resultado").innerHTML ="Média: " + r;

    function Soma(){
        let n1 = document.getElementById("v1").value;
        let n2 = document.getElementById("v2").value;
        let n3 = document.getElementById("v3").value;
        let r = (Number(n1) + Number(n2) + Number(n3))3;
        document.getElementById("resultado").innerHTML ="Soma: " + r;

        function Subtração(){
            let n1 = document.getElementById("v1").value;
            let n2 = document.getElementById("v2").value;
            let n3 = document.getElementById("v3").value;
            let r = (Number(n1) + Number(n2) + Number(n3))3;
            document.getElementById("resultado").innerHTML ="Subtração: " + r;
    }
}