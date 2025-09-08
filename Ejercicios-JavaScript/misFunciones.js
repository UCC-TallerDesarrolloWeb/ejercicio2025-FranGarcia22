/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */

function convertirunidades(unidad,Valor){
    let metro, pie, pulgada, yarda;
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

    document.getElementById("metro").value= metro;
    document.getElementById("pie").value= pie;
    document.getElementById("pulgada").value= pulgada;
    document.getElementById("yarda").value= yarda;
}

