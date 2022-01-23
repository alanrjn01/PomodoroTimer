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
        EmpezarTemporizador(segundos=59,minutos=24){
            $('#flecha-derecha').hide(100);
            $('#circulo').hide(100);
            var intervalo;
            $('#boton3').css('display','none');
            $('#boton1').css('display','inline-block');
            $('#boton4').css('display','inline-block');
    
            intervalo=setInterval(function(){

                //muestra el tiempo
                $('#tiempo').text(minutos + ":" + segundos);
                if(segundos <10){
                    $('#tiempo').text(minutos + ":0" + segundos);
                }

                segundos-=1;
                if(segundos===0){
                    minutos-=1;
                    segundos=59;
                }

                //boton parar
                $('#boton1').click(function(){
                    clearInterval(intervalo);
                    $('#boton1').css('display','none');
                    $('#boton2').css('display','inline-block');
                    $('#flecha-derecha').show(100);
                    $('#circulo').show(100);
                });

                //boton reanudar
                $('#boton2').click(function(){
                    arrayTareas[seleccion].EmpezarTemporizador(segundos,minutos)
                    $('#boton2').css('display','none');
                    $('#boton1').css('display','inline-block');
                })

                //boton terminar
                $('#boton4').click(function(){
                    $('#flecha-derecha').show(100);
                    $('#circulo').show(100);
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
                
            },1000);
        }
    }

    var usarFlechaDerechaSinTiempo= ()=>{
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
    }
    

    var descansoCronometro = (minutos=4,segundos=59)=>{

        $('#flecha-izquierda').hide(100);
        $('#circulo2').hide(100);
        $('#cancel').show(100);
        $('#circulo3').show(100);
        $('#cancel').hover(function(){
            $('#circulo3').css('background','#ff0000');
        },function(){
            $('#circulo3').css('background','#e03e3e');
        });
        
        $('#cancel').click(function(){
            clearInterval(intervaloDescanso);
                $('#tiempo').text('0:00');
                $('#cancel').hide(100);
                $('#circulo3').hide(100);
                $('#boton5').show(200);
                $('#boton6').show(200);
                $('#flecha-izquierda').show(100);
                $('#circulo2').show(100);
        });


        var intervaloDescanso= setInterval(() => {
            segundos-=1;

            $('#tiempo').text(minutos + ":" + segundos);
                if(segundos <10){
                    $('#tiempo').text(minutos + ":0" + segundos);
                }

            if (minutos===0 && segundos===0){
                alert('¡Descanso terminado!');
                clearInterval(intervaloDescanso);
                $('#tiempo').text('0:00');
                $('#flecha-izquierda').show(100);
                $('#circulo2').show(100);
            }

            if(segundos===0){
                minutos-=1;
                segundos=59;
            }



        }, 1000);
    }



    var descanso = () =>{
            $('#boton5').click(function(){
            var minutos = 4;
            var segundos = 59;
            $('#tiempo').text('5' + ":" + '00');
            console.log("Hola");
            $('#boton7').css('display','block');
            $('#boton7').click(function(){
                descansoCronometro(minutos,segundos);
                $('#boton7').hide(200);
                $('#boton5').hide(200);
                $('#boton6').hide(200);
            })
            
        });
            $('#boton6').click(function(){
                var minutos = 14;
                var segundos = 59;
                $('#tiempo').text('15' + ":" + '00');
                console.log("HolaV2");
                $('#boton7').css('display','block');
                $('#boton7').click(function(){
                    descansoCronometro(minutos,segundos);
                    $('#boton7').hide(200);
                    $('#boton5').hide(200);
                    $('#boton6').hide(200);
                })
            });

    }


    $('#flecha-derecha').click(function(){
        if($('#tiempo').text() === '25:00'){
            console.log("Holandeses");
            usarFlechaDerechaSinTiempo();
            $('#boton1').css('display','none');
                $('#boton2').css('display','none');
                $('#boton3').css('display','none');
                $('#boton4').css('display','none');
                $('#tiempo').text("00:00");
                descanso();
            
        }else{
            $('#tiempo').text("00:00");
            $('.alerta-container').css('display','block');
            $('.cancelar').click(function(){
                $('.alerta-container').css('display','none');
            })
            $('.aceptar').click(function(){
                $('.alerta-container').css('display','none');
                usarFlechaDerechaSinTiempo();
                $('#boton1').css('display','none');
                $('#boton2').css('display','none');
                $('#boton3').css('display','none');
                $('#boton4').css('display','none');
                descanso();
            })
            
        }
        
    });

    var usarFlechaIzquierdaSinTiempo= ()=>{
        $('#flecha-izquierda').css('display','none');
        $('#circulo2').css('display','none');
        $('#flecha-derecha').css('display','block');
        $('#circulo').css('display','inline');
        $('html').css('background-color','#5C89E0');
        $('html').css('color','#EFEFEF');
        $('#autor').css('color','#EFEFEF');
        $('.fecha-y-hora').css('color','#EFEFEF');
        $('#boton7').hide(200);
        $('#boton5').hide(200);
        $('#boton6').hide(200);
        $('#titulo').hide(200);
        $('#titulo').text('FocusTime');
        $('#tiempo').text('25:00');
        
            $('#frase').show(200,function(){
                $('#titulo').show(500);
                $('#autor').show(200);
            $('.tareas-container').show(200);
            });
    }

    $('#flecha-izquierda').click(function(){
        usarFlechaIzquierdaSinTiempo();
    });

    var seleccion=1;
    var arrayTareas = [null,null,null,null];
    var cantidadTareas=0;

    function AgregarTarea(){
        cantidadTareas+=1;
    }

    $('#flecha-derecha').hover(function(){
        $('#circulo').css('background','#00ff1a')
    },function(){
        $('#circulo').css('background','#7CF288')
    });

    $('#flecha-izquierda').hover(function(){
        $('#circulo2').css('background','#0055ff')
    },function(){
        $('#circulo2').css('background','#6f97e6')
    });



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
                        $('#tarea-1').css('background-color','#CCD9F2');
                        $('#numero-tarea-1').css('background-color','#CCD9F2');
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


});