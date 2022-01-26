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

     var sonidoAlarma = new Audio('./media/audio/alarm.mp3');

     var sonidoDescanso = new Audio('./media/audio/BugleTune.mp3');

     

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

        

        constructor(tarea,sesiones,ID){
            this.tarea=tarea;
            this.sesiones=sesiones;
            this.ID=ID;
        }


        BotonParar(minutos,segundos,intervalo){
            clearInterval(intervalo);
            $('#boton1').css('display','none');
            $('#boton2').css('display','inline-block');
            $('#flecha-derecha').show(100);
            $('#circulo').show(100);
            $('#tarea-1-container').show(100);
        }

        BotonReanudar(minutos,segundos){
                    arrayTareas[0].EmpezarTemporizador(minutos,segundos,ID);
                    $('#boton2').css('display','none');
                    $('#boton1').css('display','inline-block');
                    $('#tarea-1-container').hide(100);
        }

        BotonTerminar(minutos,segundos,intervalo){
                    $('#tarea-1-container').show(100);
                    $('#flecha-derecha').show(100);
                    $('#circulo').show(100);
                    clearInterval(intervalo);
                    $('#tiempo').text("25" + ":" + "00");
                    $('title').text("FocusTime");
                    
                    if(arrayTareas[0].sesiones === 0){
                        console.log("ihual a 0");
                        $('#boton1').css('display','none');
                        $('#boton2').css('display','none');
                        $('#boton3').css('display','inline-block');
                        $('#boton4').css('display','none');
                        $('#tarea-1-container').css('display','none');
                        $('#tarea-seleccionada').text("");
                        $('#tarea-1-container').css('background-color','#EFEFEF');
                        $('#boton3').css('display','inline');
                        $('#tarea-1').val('');
                    }else{
                        console.log("pasaron cosas");
                        $('#boton1').css('display','none');
                        $('#boton2').css('display','none');
                        $('#boton4').css('display','none');
                        $('#tarea-1-container').css('display','block');
                        $('#tarea-seleccionada').text("");
                        $('#tarea-1-container').css('background-color','#B3F593');
                        $('#boton3').css('display','inline');
                        $('#tarea-1-container').show(100);
                    }
                    
        }

        CronometroTerminado(minutos,segundos,intervalo){
            minutos=24;
                    segundos=59;
                    clearInterval(intervalo);
                    $('title').text("FocusTime");
                    $('#boton1').css('display','none');
                    $('#boton2').css('display','none');
                    $('#boton3').css('display','inline-block');
                    $('#boton4').css('display','none');
                    $('#tiempo').text("25" + ":" + "00");

                    if(arrayTareas[0].cantidad === 0){
                        
                        $('#boton1').css('display','none');
                        $('#boton2').css('display','none');
                        $('#boton3').css('display','inline-block');
                        $('#boton4').css('display','none');
                        $('#tarea-1-container').css('display','none');
                        $('#tarea-seleccionada').text("");
                        $('#tarea-1-container').css('background-color','#EFEFEF');
                        $('#tarea-1').css('background-color','#EFEFEF');
                        $('#numero-tarea-1').css('background-color','#EFEFEF');
                        $('#numero-tarea-1').text("0");
                        $('#boton3').css('display','inline');
                    }else{
                        $('#tarea-1-container').show(100);
                        $('#boton1').css('display','none');
                        $('#boton2').css('display','none');
                        $('#boton4').css('display','none');
                        $('#tarea-1-container').css('display','block');
                        $('#tarea-seleccionada').text("");
                        $('#tarea-1-container').css('background-color','#EFEFEF');
                        $('#tarea-1').css('background-color','#EFEFEF');
                        $('#tarea-1-container').css('background-color','#B3F593');
                        $('#boton3').css('display','inline');
                    }
                    sonidoAlarma.play();
        }

        EmpezarTemporizador(minutos=24,segundos=59,ID){

            
            console.log(this.sesiones);
            $('#flecha-derecha').hide(100);
            $('#circulo').hide(100);
            $('#boton3').css('display','none');
            $('#boton1').css('display','inline-block');
            $('#boton4').css('display','inline-block');

            var intervalo;
    
            intervalo=setInterval(function(){

                //muestra el tiempo
                $('#tiempo').text(minutos + ":" + segundos);
                if(segundos <10){
                    $('#tiempo').text(minutos + ":0" + segundos);
                }

                $('title').text("FocusTime " +minutos + ":" + segundos);

                segundos-=1;
                if(segundos===0){
                    minutos-=1;
                    segundos=59;
                }

                    //boton parar
                    $('#boton1').click(function(){
                    arrayTareas[0].BotonParar(minutos,segundos,intervalo);
                    })
                
                    //boton reanudar
                    $('#boton2').click(function(){
                        arrayTareas[0].BotonReanudar(minutos,segundos);

                    })

                    //boton terminar
                     $('#boton4').click(function(){
                        arrayTareas[0]. BotonTerminar(minutos,segundos,intervalo);
                    })
    
                //cronometro terminado
                if(minutos===0 && segundos===0){
                    CronometroTerminado(minutos,segundos,intervalo);
                }
                
                
            },1000);
            
        }
    }

    var arrayTareas= [4];
    //boton de agregar tarea
    var bandera=0;
    var bandera1=0;
    var bandera2=0;
    var primeraVez=0;

    var ID=0;
    var nombreIngresadoTarea = "Tarea sin nombre";
    var cantidadSesiones=1;


    $('#question-icon').click(()=>{
        if(bandera2===0){
            //asignandole el fondo al body para que no se rompa cuando se agrande el height
            $('body').css('background','linear-gradient(117.41deg, #5E6EF7 23.19%, #4776E6 44.95%, #8E54E9 86.18%)');
            $('.tecnica').show(100);
            $('.info1').show(300);
            bandera2=1;
        }else{
            $('.tecnica').hide(100);
            $('.info1').hide(300);
            $('#down').css('transform','rotate(360deg)')
            bandera2=0;
        }
    });

    $('#down').click(()=>{
        if(bandera1===0){
            $('#tarea-1-container').show(100);
            $('#down').css('transform','rotate(180deg)')
            bandera1=1;
        }else{
            $('#tarea-1-container').hide(100);
            $('#down').css('transform','rotate(360deg)')
            bandera1=0;
        }
        
    });

    $('#delete-tarea-1').click(()=>{
        arrayTareas.splice(0, 0);
        $('#tarea-1').val("");
        $('#numero-tarea-1').text("1");

    });

    $('#add-task').click(()=>{

        cantidadSesiones=1;
        arrayTareas.pop();
        if(primeraVez===0){
            $('#texto-agregar-tareas').hide(300);
            ID=0;
            primeraVez+=1;
        }
        if(bandera===0){
            $('#numero-tarea-1').text(cantidadSesiones);
            $('#tarea-1-container').show(100);

            //creacion de instancia de Timer en el arrayTareas
            /* arrayTareas.push(new Timer()); */

            //eliminar numero de sesiones
            $('#menos-tarea-1').click(()=>{
                if(cantidadSesiones>1){
                    cantidadSesiones-=1;
                    $('#numero-tarea-1').text(cantidadSesiones);
                }
            });

            //agregar numero de sesiones
            $('#mas-tarea-1').click(()=>{
                if(cantidadSesiones<9){
                    cantidadSesiones+=1;
                    $('#numero-tarea-1').text(cantidadSesiones);
                }
                
            })


            $('#play-1').click(()=>{
                if($('#tarea-1').val().toString() != ""){
                    nombreIngresadoTarea=$('#tarea-1').val().toString();
                }
                $('#tarea-seleccionada').text(nombreIngresadoTarea);
                arrayTareas.push(new Timer(nombreIngresadoTarea,cantidadSesiones,ID));
                $('#tarea-1-container').css('background-color','#B3F593');
                $('#boton3').show(150);
                $('#boton3').click(()=>{
                    
                    console.log(arrayTareas[0]);
                    $('#tarea-1-container').hide(100);
                    arrayTareas[0].EmpezarTemporizador();

                })
                
            });
            ID++;
            bandera=1;
        }else{
            $('#tarea-1-container').hide(100);
            bandera=0;
        }
    });
    

});