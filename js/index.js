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
        EmpezarTemporizador(segundos=59,minutos=24){
            
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
                    Object.EmpezarTemporizador(segundos,minutos);
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

    var seleccion;

    $('#check-tarea-1').click(function(){
        var tarea1= new Timer($('#tarea-1').val(),parseInt($('#numero-tarea-1').text()));
        $('#tarea-1-container').css('background-color', '#CCD9F2')
    })

    $('#check-tarea-2').click(function(){
        var tarea2= new Timer($('#tarea-2').val(),parseInt($('#numero-tarea-2').text()));
    })

    $('#check-tarea-3').click(function(){
        var tarea3= new Timer($('#tarea-3').val(),parseInt($('#numero-tarea-3').text()));
    })

    $('#check-tarea-4').click(function(){
        var tarea4= new Timer($('#tarea-4').val(),parseInt($('#numero-tarea-4').text()));
    })


    $('#boton3').click(function(){
        tarea1.EmpezarTemporizador();
    })

    



});