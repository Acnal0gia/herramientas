(function(){
    let hoy=new Date();
    let dia=hoy.getDate();
    let mes=hoy.getMonth();
    let contador=dia;

    let cont = document.getElementById(`cont`);

    for(let i=0;i<mes;i++){
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
    contador-=63;
    cont.innerHTML = `<h2 class='cont'>Dia ${contador} de 300</h2>`; 
}())

