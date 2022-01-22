'use strict';

$(document).ready(function(){

    var frases=[];
    var autor=[];
    var aleatorio;

    aleatorio = Math.round(Math.random() *(4-0) + 0);
    console.log(aleatorio);

    frases.push('"Cuida los minutos y las horas se cuidarán de sí mismas"');

    frases.push('"Se dice que el tiempo es un gran maestro; lo malo es que va matando a sus discípulos"');

    frases.push('"No tengo tiempo para tener prisa"');

    frases.push('El tiempo es nuestro activo más valioso, a pesar de que tendemos a desperdiciarlo, matarlo y gastarlo en vez de cuidarlo e invertirlo"');

    frases.push('"El tiempo es la divisa de tu vida. Es la única divisa que tienes, y solo tú puedes determinar cómo será gastada. Se cuidadoso y no permitas que otras personas la gasten por ti"');

    autor.push("-Lord Chesterfield");
    autor.push("-Hector Berlioz");
    autor.push("-John Wesley");
    autor.push("-Jim Rohn");
    autor.push("-Carl Sandburg");

    $('#frase').text(frases[aleatorio]);
    $('#autor').text(autor[aleatorio]);

    var fecha= new Date();
    var dia;
    switch(fecha.getDay()){
        case 0:
            dia = "Domingo";
            break;
            case 1:
                dia = "Lunes";
                break;
                case 2:
                    dia = "Martes";
                    break;
                    case 3:
                        dia = "Miércoles";
                        break;
                        case 4:
                            dia = "Jueves";
                            break;
                            case 5:
                                dia = "Viernes";
                                break;
                                case 6:
                                    dia = "Sábado";
                                    break;
    }
    $('#fecha').text( dia +" "+ fecha.getDate() +"/" + (fecha.getMonth()+1) + "/" + fecha.getFullYear());
    



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

                    arrayTareas[seleccion].cantidad-=1;

                    $('#numero-tarea-1').text(arrayTareas[seleccion].cantidad);

                    if(arrayTareas[seleccion].cantidad === 0){
                        $('#tarea-1-container').css('display','none');
                    }
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
                    $('#tiempo').text("25" + ":" + "00");
                    arrayTareas[seleccion].cantidad-=1;

                    $('#numero-tarea-1').text(arrayTareas[seleccion].cantidad);
                    if(arrayTareas[0].cantidad === 0){
                        $('#tarea-1-container').css('display','none');
                    }
                }
                //muestra el tiempo
                $('#tiempo').text(minutos + ":" + segundos);
                if(segundos <10){
                    $('#tiempo').text(minutos + ":0" + segundos);
                }
            },1000);
        }
    }

    $('#flecha-derecha').click(function(){
        if($('#tiempo').text() == '25:00'){
            $('#flecha-derecha').css('display','none');
            $('#circulo').css('display','none');
            $('#flecha-izquierda').css('display','block');
            $('#circulo2').css('display','inline');
            $('html').css('background-color','#9FCBA3');
            $('html').css('color','#393838');
            $('#autor').css('color','#393838');
            $('.fecha-y-hora').css('color','#393838');
    
            $('#frase').hide(200);
            $('#autor').hide(200);
            $('.tareas-container').hide(500);
    
            $('#titulo').hide(500);
            $('#titulo').text('RelaxTime');
            
            $('#titulo').show(700);
            
            $('#boton5').show(500);
            $('#boton6').show(500);
        }else{
            $('.alerta-container').css('display','block');
        }
        
    });

    $('#flecha-izquierda').click(function(){
        $('#flecha-izquierda').css('display','none');
        $('#circulo2').css('display','none');
        $('#flecha-derecha').css('display','block');
        $('#circulo').css('display','inline');
        $('html').css('background-color','#5C89E0');
        $('html').css('color','#EFEFEF');
        $('#autor').css('color','#EFEFEF');
        $('.fecha-y-hora').css('color','#EFEFEF');
        
        $('#boton5').hide(500);
        $('#boton6').hide(500);
        $('#titulo').hide(500);
        $('#titulo').text('FocusTime');
        
            $('#frase').show(200,function(){
                $('#titulo').show(500);
                $('#autor').show(600);
            $('.tareas-container').show(600);
            });
            

        
        
        
    });

    var seleccion=1;
    var arrayTareas = [null,null,null,null];
    var cantidadTareas=0;

    function AgregarTarea(){
        cantidadTareas+=1;
    }

    //creacion de tarea
    $('#add-task').click(function(){
        AgregarTarea();
        $('texto-agregar-tareas').css('display','none');
        switch(cantidadTareas){
            case 1:

                var numeroTareas=1;
                $('#mas-tarea-1').click(function(){
                    numeroTareas+=1;
                    $('#numero-tarea-1').text(numeroTareas);
                })
                $('#menos-tarea-1').click(function(){
                    if(numeroTareas>0){
                        numeroTareas-=1;
                        $('#numero-tarea-1').text(numeroTareas);
                    }
                })

                $('#tarea-1-container').css('display','block');

                $('#play-1').click(function(){
                    var inputTarea =$('#tarea-1').val().toString();
                    var numeroDeTareasARealizar=numeroTareas;

                    if(inputTarea != ""){

                        arrayTareas.splice(0,0,new Timer($('#tarea-1').val(),numeroDeTareasARealizar));

                        console.log(arrayTareas[0]);

                        if(arrayTareas[0].tarea != ""){
                            seleccion=arrayTareas[0];
                        $('#tarea-seleccionada').text(arrayTareas[0].tarea);
                        $('#tarea-1-container').css('background-color','#CCD9F2');
                        $('#play-1').css('background-color','#CCD9F2');
                        $('#tarea-1').css('background-color','#CCD9F2');
                        $('#menos-tarea-1').css('background-color','#CCD9F2');
                        $('#numero-tarea-1').css('background-color','#CCD9F2');
                        $('#mas-tarea-1').css('background-color','#CCD9F2');
                        seleccion=0;
                        $('#boton3').css('display','inline');
                        }
                        inputTarea=arrayTareas[0].tarea;
                        
                    };
                    
                })

                break;
                case 2:
                    $('#tarea-2-container').css('display','block');

                $('#play-2').click(function(){
                    var inputTarea =$('#tarea-2').val().toString();
                    var numeroDeTareasARealizar=numeroTareas;

                    if(inputTarea != ""){

                        arrayTareas.splice(1,0,new Timer($('#tarea-2').val(),numeroDeTareasARealizar));


                        if(arrayTareas[1].tarea != ""){
                            seleccion=arrayTareas[1];
                        $('#tarea-seleccionada').text(arrayTareas[1].tarea);
                        $('#tarea-2-container').css('background-color','#CCD9F2');
                        $('#play-2').css('background-color','#CCD9F2');
                        $('#tarea-2').css('background-color','#CCD9F2');
                        $('#menos-tarea-2').css('background-color','#CCD9F2');
                        $('#numero-tarea-2').css('background-color','#CCD9F2');
                        $('#mas-tarea-2').css('background-color','#CCD9F2');
                        seleccion=1;
                        $('#boton3').css('display','inline');
                        }
                        inputTarea=arrayTareas[1].tarea;
                        
                    };
                    
                })

                break;
                case 3:
                $('#tarea-3-container').css('display','block');
                break;
                case 4:
                $('#tarea-4-container').css('display','block');
                break;
        }
        
    })
    

   

    $('#boton3').click(function(){
        arrayTareas[seleccion].EmpezarTemporizador();
    });

    

    

    

    

    /* $('#play-2').click(function(){
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
     */
});