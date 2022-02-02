'use strict';

var arrayTareas= [];
    //boton de agregar tarea
    var bandera=0;
    var bandera1=0;
    var bandera2=0;
    var primeraVez=0;
    var tareaPin=0;
    var ID=0;
    var sinBotones=0;
    var nombreIngresadoTarea = "Tarea sin nombre";
    var cantidadSesiones=1;
    //tarea numero 2
    var cantidadSesiones2=1;

function EmpezarTemporizador(minutos=24,segundos=59,ID,sesiones){

    sesiones-=1;
    console.log(sesiones);
    $('#numero-tarea-1').text(sesiones);
    $('#flecha-derecha').hide(100);
    $('#circulo').hide(100);
    $('#menos-tarea-1').css('display','none');
    $('#mas-tarea-1').css('display','none');
    $('#delete-tarea-1').css('display','none');
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

    
    if(minutos===0 && segundos===0){
        arrayTareas[ID].CronometroTerminado(minutos,segundos,intervalo);
    }
        
    },1000);
    //boton terminar

    $('#boton4').click(function(){
        /* if($('#numero-tarea-1').text()==='0'){
            $('#menos-tarea-1').hide(200);
            $('#mas-tarea-1').hide(200);
        } */
        
        minutos=0;
        segundos=0;
        clearInterval(intervalo);
        if(sesiones===0){
            $('#tarea-1-container').css('background-color','#f77878');
        }
        $('#menos-tarea-1').show(100);
        $('#mas-tarea-1').show(100);
        $('#delete-tarea-1').show(100);
        $('title').text("FocusTime");
        $('#boton1').css('display','none');
        $('#boton3').css('display','inline-block');
        $('#boton4').css('display','none');
        $('#tiempo').text("25" + ":" + "00"); 
    })   
    
       return sesiones;
}

function CronometroTerminado(minutos,segundos,intervalo,ID){
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
        this.sesiones-=1;
        $('#numero-tarea-1').text(this.sesiones);
        $('#numero-tarea-1').text("0");
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
        this.sesiones-=1;
        $('#numero-tarea-1').text(this.sesiones);
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
            this.ID=parseInt(ID);
        }

    }

    



    $('#question-icon').click(()=>{
        if(bandera2===0){
            //asignandole el fondo al body para que no se rompa cuando se agrande el height
            $('body').css('background','linear-gradient(117.41deg, #5E6EF7 23.19%, #4776E6 44.95%, #8E54E9 86.18%)');
            $('.tecnica').show(100);
            $('.info1').show(300);
            bandera2=1;
        }else{
            $('body').css('background','none');
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

    var usarFlechaDerechaSinTiempo= ()=>{
        $('#tiempo').text('00:00');
        $('#flecha-derecha').css('display','none');
        $('#circulo').css('display','none');
        $('#flecha-izquierda').css('display','block');
        $('#circulo2').css('display','inline');
        $('html').css('background','linear-gradient(24.04deg, #75C4D6 24.57%, #BED68D 46.29%, #77E365 92.18%)');
        $('html').css('color','#393838');
        $('#autor').css('color','#393838');
        $('.fecha-y-hora').css('color','#393838');

        $('#frase').hide(200);
        $('#autor').hide(200);
        $('.tareas-container').hide(500);

        $('#titulo').hide(500);
        
        $('title').text('RelaxTime');
        $('#titulo').show(700);
        $('#titulo').text('RelaxTime');
        
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
                $('title').text("RelaxTime");
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

            $('title').text("RelaxTime " +minutos + ":" + segundos);

            $('#tiempo').text(minutos + ":" + segundos);
                if(segundos <10){
                    $('#tiempo').text(minutos + ":0" + segundos);
                }

            if (minutos===0 && segundos===0){
                $('#cancel').hide(100);
                clearInterval(intervaloDescanso);
                $('#tiempo').text('0:00');
                $('#flecha-izquierda').show(100);
                $('#circulo2').show(100);
                $('title').text("RelaxTime");
                sonidoDescanso.play();
                $('title').text("RelaxTime");
                $('#tiempo').text('0:00');
                $('#cancel').hide(100);
                $('#circulo3').hide(100);
                $('#boton5').show(200);
                $('#boton6').show(200);
                $('#flecha-izquierda').show(100);
                $('#circulo2').show(100);
            }

            if(segundos===0){
                minutos-=1;
                segundos=60;
            }



        }, 1000);
    }

    var minutos=0;
    var segundos=0;

    var descanso = () =>{
            $('#boton5').click(function(){
            minutos = 4;
            segundos = 60;
            $('#tiempo').text('5' + ":" + '00');
            console.log("Hola");
            $('#boton7').css('display','block');
            $('#boton7').click(function(){
                if(minutos===4 && segundos ===60){
                    descansoCronometro(minutos,segundos);
                    console.log("todas putas");
                    $('#boton7').hide(200);
                    $('#boton5').hide(200);
                    $('#boton6').hide(200);
                }
                
            })
            
        });
            $('#boton6').click(function(){
                minutos = 14;
                segundos = 60;
                $('#tiempo').text('15' + ":" + '00');
                console.log("HolaV2");
                $('#boton7').css('display','block');
                $('#boton7').click(function(){
                    if(minutos===14 && segundos===60){
                        descansoCronometro(minutos,segundos);
                        console.log("todas putas2");
                        $('#boton7').hide(200);
                        $('#boton5').hide(200);
                        $('#boton6').hide(200);
                    }
                    
                })
            });

    }


    $('#flecha-derecha').click(function(){
        if($('#tiempo').text() === '25:00'){
            $('.question-container').hide(200);
            console.log("Holandeses");
            usarFlechaDerechaSinTiempo();
            $('#boton1').css('display','none');
                $('#boton2').css('display','none');
                $('#boton3').css('display','none');
                $('#boton4').css('display','none');
                $('#tiempo').text("00:00");
                descanso();
            
        }else{
            $('.alerta-container').css('display','block');
            $('.fondo-oscuro2').css('display','block');
            $('.cancelar').click(function(){
                $('.alerta-container').css('display','none');
                $('.fondo-oscuro2').css('display','none');
            })
            $('.aceptar').click(function(){
                $('.alerta-container').css('display','none');
                $('.fondo-oscuro2').css('display','none');
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
        $('html').css('background','linear-gradient(117.41deg, #5E6EF7 23.19%, #4776E6 44.95%, #8E54E9 86.18%)');
        $('html').css('color','#EFEFEF');
        $('#autor').css('color','#EFEFEF');
        $('.fecha-y-hora').css('color','#EFEFEF');
        $('#boton7').hide(200);
        $('#boton5').hide(200);
        $('#boton6').hide(200);
        $('#titulo').hide(200);
        $('#titulo').text('FocusTime');
        $('title').text('FocusTime');
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

    var seleccion=0;
    var arrayTareas = [null,null,null,null];

    var seleccionDeTareas=0;
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



    

    $('#add-task').click(()=>{

        cantidadSesiones=1;
        if(primeraVez!=0 && arrayTareas[0]!=undefined){
            console.log(arrayTareas[0]);
            $('#tarea-2-container').show(100);
            $('#tarea-1-container').css('border-bottom-left-radius','0');
            $('#tarea-1-container').css('border-bottom-right-radius','0');
            $('#add-task').hide(100);
        }
        if(primeraVez===0){
            $('#texto-agregar-tareas').hide(300);
            ID=0;
            primeraVez+=1;
        }
        
        if(bandera===0){
            $('#numero-tarea-1').text(cantidadSesiones);
            $('#numero-tarea-2').text(cantidadSesiones);
            $('#tarea-1-container').show(100);
            
            if(sinBotones===0){
                console.log($('#numero-tarea-1').text());
                if($('#numero-tarea-1').text()!='0'){
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
                }
                
                if($('#numero-tarea-2').text!=0){
                    //eliminar numero de sesiones
                $('#menos-tarea-2').click(()=>{
                    if(cantidadSesiones2>1){
                        cantidadSesiones2-=1;
                        $('#numero-tarea-2').text(cantidadSesiones2);
                    }
                });
    
                //agregar numero de sesiones
                $('#mas-tarea-2').click(()=>{
                    if(cantidadSesiones2<9){
                        cantidadSesiones2+=1;
                        $('#numero-tarea-2').text(cantidadSesiones2);
                    }
                    
                })
                }
            }else{
                console.log('sinb otones');
            }

            $('#play-1').click(()=>{
                $('#tarea-2-container').css('background-color','#EFEFEF');
                if($('#tarea-1').val().toString() != ""){
                    nombreIngresadoTarea=$('#tarea-1').val().toString();
                }
                $('#tarea-seleccionada').text(nombreIngresadoTarea);
                ID=0;
                $('#tarea-1-container').css('background-color','#B3F593');
                
                $('#boton3').show(150);
                $('#boton3').click(()=>{
                    arrayTareas.push(new Timer(nombreIngresadoTarea,cantidadSesiones,ID));
                    console.log(arrayTareas[ID]);
                    arrayTareas[ID].sesiones= EmpezarTemporizador(24,59,arrayTareas[ID].ID,arrayTareas[ID].sesiones);
                    sinBotones=1;
                    console.log(sinBotones);
                    
                })
                
            });

            $('#play-2').click(()=>{
                $('#tarea-1-container').css('background-color','#EFEFEF');
                if($('#tarea-2').val().toString() != ""){
                    nombreIngresadoTarea=$('#tarea-2').val().toString();
                }
                $('#tarea-seleccionada').text(nombreIngresadoTarea);
                ID=0;
                $('#tarea-2-container').css('background-color','#B3F593');
                
                $('#boton3').show(150);
                $('#boton3').click(()=>{
                    arrayTareas.push(new Timer(nombreIngresadoTarea,cantidadSesiones,ID));
                    console.log(arrayTareas[ID]);
                    arrayTareas[ID].sesiones= EmpezarTemporizador(24,59,arrayTareas[ID].ID,arrayTareas[ID].sesiones);
                    sinBotones=1;
                    console.log(sinBotones);
                    
                })
                
            });
           
            bandera=1;
        }else{

            bandera=0;
        }
    });
    

});