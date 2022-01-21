'use strict';

$(document).ready(function(){

    var fecha= new Date();
    $('#fecha').text("Domingo " + fecha.getDate() +"/" + (fecha.getMonth()+1) + "/" + fecha.getFullYear());
   /*  setInterval(function(){
        var fecha = new Date();
        switch(fecha.getDay()){
            case 0:
                $('#fecha').text("Domingo " + fecha.getDate() +"/" + (fecha.getMonth()+1) + "/" + fecha.getFullYear());
                break;
            case 1:
                $('#fecha').text("Lunes " + fecha.getDate() +"/" + (fecha.getMonth()+1) + "/" + fecha.getFullYear());
                break;
            case 2:
                $('#fecha').text("Martes " + fecha.getDate() +"/" + (fecha.getMonth()+1) + "/" + fecha.getFullYear());
                break;
            case 3:
                $('#fecha').text("Miércoles " + fecha.getDate() +"/" + (fecha.getMonth()+1) + "/" + fecha.getFullYear());
                break;
            case 4:
                $('#fecha').text("Jueves " + fecha.getDate() +"/" + (fecha.getMonth()+1) + "/" + fecha.getFullYear());
                break;
            case 5:
                $('#fecha').text("Viernes " + fecha.getDate() +"/" + (fecha.getMonth()+1) + "/" + fecha.getFullYear());
                break;
            case 6:
                $('#fecha').text("Sábado " + fecha.getDate() +"/" + (fecha.getMonth()+1) + "/" + fecha.getFullYear());
                break;
            }
    },1); */

    class Timer{
        constructor(tarea,cantidad){
            this.tarea=tarea;
            this.cantidad=cantidad;
        }
        EmpezarTemporizador(segundos=60,minutos=24){
            
            var intervalo;
            $('#boton3').css('display','none');
            $('#boton1').css('display','inline-block');
            $('#boton4').css('display','inline-block');
    
            intervalo=setInterval(function(){
                segundos-=1;
                if(segundos===0){
                    minutos-=1;
                    segundos=60;
                }

                //boton parar
                $('#boton1').click(function(){
                    clearInterval(intervalo);
                    $('#boton1').css('display','none');
                    $('#boton2').css('display','inline-block');
                });

                //boton reanudar
                $('#boton2').click(function(){
                    arrayTareas[seleccion].EmpezarTemporizador(segundos,minutos)
                    $('#boton2').css('display','none');
                    $('#boton1').css('display','inline-block');
                })

                //boton terminar
                $('#boton4').click(function(){
                    clearInterval(intervalo);
                    $('#boton1').css('display','none');
                    $('#boton2').css('display','none');
                    $('#boton3').css('display','inline-block');
                    $('#boton4').css('display','none');
                    $('#tiempo').text("25" + ":" + "00");
                })
    
                //cronometro terminado
                if(minutos===0 && segundos===0){
                    minutos=24;
                    segundos=59;
                    clearInterval(intervalo);
                    $('#boton1').css('display','none');
                    $('#boton2').css('display','none');
                    $('#boton3').css('display','inline-block');
                    $('#boton4').css('display','none');
                }
                //muestra el tiempo
                $('#tiempo').text(minutos + ":" + segundos);
                if(segundos <10){
                    $('#tiempo').text(minutos + ":0" + segundos);
                }
            },1000);
        }
    }

    var seleccion=1;
    var arrayTareas = [null,null,null,null];
    var cantidadTareas=0;

    function AgregarTarea(){
        cantidadTareas+=1;

    }
    $('#add-task').click(function(){
        AgregarTarea();
        console.log(cantidadTareas);
        switch(cantidadTareas){
            case 1:
                $('#tarea-1-container').css('display','block');
                break;
                case 2:
                $('#tarea-2-container').css('display','block');
                break;
                case 3:
                $('#tarea-3-container').css('display','block');
                break;
                case 4:
                $('#tarea-4-container').css('display','block');
                break;
        }
        
    })

    if(parseInt($('#numero-tarea-1').text()) > 0){
        $('#play-1').click(function(){
            arrayTareas.splice(0,0,new Timer($('#tarea-1').val(),parseInt($('#numero-tarea-1').text())));
        })
        $('#play-1').on('click',function(){
            console.log("hola");
            seleccion=arrayTareas[0];
            $('#tarea-seleccionada').text(arrayTareas[0].tarea);
            $('#tarea-1-container').css('background-color','#CCD9F2');
            $('#play-1').css('background-color','#CCD9F2');
            $('#tarea-1').css('background-color','#CCD9F2');
            $('#menos-tarea-1').css('background-color','#CCD9F2');
            $('#numero-tarea-1').css('background-color','#CCD9F2');
            $('#mas-tarea-1').css('background-color','#CCD9F2');
            seleccion=0;
        });
    }

    $('#boton3').click(function(){
        arrayTareas[seleccion].EmpezarTemporizador();
    });

    

    

    $('#check-tarea-2').click(function(){
        arrayTareas.splice(1,0,new Timer($('#tarea-2').val(),parseInt($('#numero-tarea-2').text())));
        $('#check-tarea-2').css('display','none');
        $('#play-2').css('display','block');
    })

    $('#check-tarea-3').click(function(){
        arrayTareas.splice(2,0,new Timer($('#tarea-3').val(),parseInt($('#numero-tarea-3').text())));
        $('#check-tarea-3').css('display','none');
        $('#play-3').css('display','block');
    })

    $('#check-tarea-4').click(function(){
        arrayTareas.splice(3,0,new Timer($('#tarea-4').val(),parseInt($('#numero-tarea-4').text())));
        $('#check-tarea-4').css('display','none');
        $('#play-4').css('display','block');
    })

    

    $('#play-2').click(function(){
        seleccion=arrayTareas[1];
        console.log(seleccion);
        $('#tarea-seleccionada').text(arrayTareas[1].tarea);
    })

    $('#play-3').click(function(){
        seleccion=arrayTareas[2];
        console.log(seleccion);
        $('#tarea-seleccionada').text(arrayTareas[2].tarea);
    })

    $('#play-4').click(function(){
        seleccion=arrayTareas[3];
        console.log(seleccion);
        $('#tarea-seleccionada').text(arrayTareas[3].tarea);
    })
    


    /* $('#boton3').click(function(){
        console.log(arrayTareas[0]);
        console.log(arrayTareas[1]);
        console.log(arrayTareas[2]);
        console.log(arrayTareas[3]);
        arrayTareas[2].EmpezarTemporizador();
    }) */

    



});