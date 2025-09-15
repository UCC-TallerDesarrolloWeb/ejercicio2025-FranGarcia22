/**
 * Convierte unidades ingresadas por el usuario
 * @method convertirunidades
 * @param {string}unidad -unidad ingresada:metro, pie, pulgada, yarda
 * @param {number} valor -valor numerico ingresando por el usuario
 
 */

function convertirunidades(unidad,Valor) =>{
    let metro, pie, pulgada, yarda;
    if (valor.includes(",")){
        valor=valor.replace(",",",");
    }
   
   
    console.log(Valor);
    console.log(isNaN(Valor));
    
    if(isNaN(Valor)){
        alert("el valor ingresado no es correcto")
        pie="";
        metro="";
        pulgada="";
        yarda="";
    }

    if(unidad=='unid_metro'){
        metro=Valor;
        pie=3.28*metro;
        pulgada=39.37*metro;
        yarda=1.0936*metro;

    }else if(unidad=="unid_pie"){
        pie=Valor;
        metro=0.3048*pie;
        pulgada=12*pie;
        yarda=0.3333*pie;
    }
    }else if (unidad == "unid_pulgada") {
        pulgada = valor;
        metro = valor / 39.3701;
        pie = valor / 12;
        yarda = valor / 36;
    }else if (unidad == "unid_yarda") {
        yarda = valor;
        metro = valor / 1.09361;
        pie = valor * 3;
        pulgada = valor * 36;

    document.getElementById("metro").value= metro.tofixed(2);
    document.getElementById("pie").value= Math.round(pie*100)/100;
    document.getElementById("pulgada").value= pulgada.tofixed(2);
    document.getElementById("yarda").value=Math.round(yarda*100)/100;;
}

let convertirGR= (id, valor) => {
    if(id=="grados"){
        let cantgrados, cantradianes;
        cantgrados=valor;
        cantradianes=cantgrados*Math.PI/180;
        document.getElementById("radianes").value=cantradianes;
    } else {
        cantradianes=valor;
        cantgrados=cantradianes*180/ Math.PI;
        document.getElementById("grados").value=cantgrados;
    }
        
}

let mostrarocultarid=(id) => {
    if(id="mostrardiv"){
        document.getElementById("unDiv")[0].style.display="block";

    }else {document.getElementById("unDiv")[0].style.display="none";


    }
}

let sumar = () => {
    let sum1 = document.getElementById("nums1").value;
    let sum2 = document.getElementById("nums2").value;

    if(isNaN(sum1) || isNaN(sum2)){
        alert("Los valores ingresados no son correctos");
    }else{
    document.getElementById("totalS").value = Number(sum1) + Number(sum2);
    }
}

let restar = () => {
    let res1 = document.getElementById("numr1").value;
    let res2 = document.getElementById("numr2").value;
    if(isNaN(res1) || isNaN(res2)){
        alert("Los valores ingresados no son correctos");
    }else{
    document.getElementById("totalR").value = Number(res1) - Number(res2);
    }
}

let multiplicar = () => {
    let mul1 = document.getElementById("numm1").value;
    let mul2 = document.getElementById("numm2").value;
    if(isNaN(mul1) || isNaN(mul2)){
        alert("Los valores ingresados no son correctos");
    }else{
    document.getElementById("totalM").value = Number(mul1) * Number(mul2);
    }
}

let dividir = () => {
    let div1 = document.getElementById("numd1").value;
    let div2 = document.getElementById("numd2").value;
    if(isNaN(div1) || isNaN(div2)){
        alert("Los valores ingresados no son correctos");
    }else{
    document.getElementById("totalD").value = Number(div1) / Number(div2);
    }
}