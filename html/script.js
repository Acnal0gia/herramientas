//Hoy es el dia 0 de 300

var hoy=new Date();
var dia=hoy.getDate();
var mes=hoy.getMonth();

//se asigna los dias del mes en curso
var contador=dia;

for(var i=0;i<mes;i++){

    if((i%2)==0){//   par => enero, marzo, mayo, julio, septiembre, noviembre
        contador+=31;
    }else{//impar => abril, junio, agosto, octubre, diciembre
        if (i===1) {//febrero
            contador += 28;
        }else{//
            contador += 30;
        }
    }
}

//Resta de los dias transcurridos
contador-=63;
console.log(contador);
