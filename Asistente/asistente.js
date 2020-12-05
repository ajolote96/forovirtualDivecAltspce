var btn = document.getElementById('btn');

function hablar() {
    if (annyang) {
        var voices;

        var utter = new SpeechSynthesisUtterance();
        utter.rate = 1;
        utter.pitch = 0.5;
        utter.lang = "es-MX";

        //Cargar voces del sistema
        window.speechSynthesis.onvoiceschanged = function () {
            voices = window.speechSynthesis.getVoices();
            console.log(voices);
        };

        //Agregar comandos a reconocer
        var commands = {
            'hola': function () {
                window.speechSynthesis.speak(new SpeechSynthesisUtterance("Hola!"));
            },
            'donde esta el auditorio': function(){
                window.speechSynthesis.speak(new SpeechSynthesisUtterance("Dentro del mapa de Divec AltSpace, puedes ir a la esquina superior izquierda, ahí encontrarás el auditorio donde se llevarán a cabo las presentaciones"));
            },
            'donde style Auditorium': function(){
                window.speechSynthesis.speak(new SpeechSynthesisUtterance("Dentro del mapa de Divec AltSpace, puedes ir a la esquina superior izquierda, ahí encontrarás el auditorio donde se llevarán a cabo las presentaciones"));
            },
            'donde esta la Victoria': function(){
                window.speechSynthesis.speak(new SpeechSynthesisUtterance("Dentro del mapa de Divec AltSpace, puedes ir a la esquina superior izquierda, ahí encontrarás el auditorio donde se llevarán a cabo las presentaciones"));
            },
            'a donde debo ir': function(){
                window.speechSynthesis.speak(new SpeechSynthesisUtterance("Si volteas al cielo, verás los nombres de las ubicaciones"));
            },
            'A donde puedo if': function(){
                window.speechSynthesis.speak(new SpeechSynthesisUtterance("Si volteas al cielo, verás los nombres de las ubicaciones"));
            },
            'Adam de Puerto if': function(){
                window.speechSynthesis.speak(new SpeechSynthesisUtterance("Si volteas al cielo, verás los nombres de las ubicaciones"));
            },
            'a donde puedo ir': function(){
                window.speechSynthesis.speak(new SpeechSynthesisUtterance("Si volteas al cielo, verás los nombres de las ubicaciones"));
            },
            'que puedo hacer': function(){
                window.speechSynthesis.speak(new SpeechSynthesisUtterance("Si volteas al cielo, verás los nombres de las ubicaciones"));
            },
            'donde esta': function(){
                window.speechSynthesis.speak(new SpeechSynthesisUtterance("Si volteas al cielo, verás los nombres de las ubicaciones"));
            },
            'como presentar': function(){
                window.speechSynthesis.speak(new SpeechSynthesisUtterance("Sólo los presentadores autorizados por el administrador pueden presentar, para presnetar, debes presionar el botón rojo al lado de la pantalla de presentación, después presionar el botón de importar e ingresar ahí el link de tu slide. Si tienes problemas, comúnicate con un administrador."));
            },
            'quien presetara': function(){
                window.speechSynthesis.speak(new SpeechSynthesisUtterance("Habrá distintos temas a presentar, consulta la página de eventos para obtener más información"));
            },
            'como puedo presentar': function(){
                window.speechSynthesis.speak(new SpeechSynthesisUtterance("Sólo los presentadores autorizados por el administrador pueden presentar, para presnetar, debes presionar el botón rojo al lado de la pantalla de presentación, después presionar el botón de importar e ingresar ahí el link de tu slide. Si tienes problemas, comúnicate con un administrador."));
            },
            'como presentar mi proyecto': function(){
                window.speechSynthesis.speak(new SpeechSynthesisUtterance("Sólo los presentadores autorizados por el administrador pueden presentar, para presnetar, debes presionar el botón rojo al lado de la pantalla de presentación, después presionar el botón de importar e ingresar ahí el link de tu slide. Si tienes problemas, comúnicate con un administrador."));
            },
            'como me muevo': function(){
                window.speechSynthesis.speak(new SpeechSynthesisUtterance("Puedes usar las teclas W A S D para moverte por el mapa o puedes presionar la tecla F para teletransportarte"));
            },
            'como moverme': function(){
                window.speechSynthesis.speak(new SpeechSynthesisUtterance("Puedes usar las teclas W A S D para moverte por el mapa o puedes presionar la tecla F para teletransportarte"));
            },
            'Como ver me': function(){
                window.speechSynthesis.speak(new SpeechSynthesisUtterance("Puedes usar las teclas W A S D para moverte por el mapa o puedes presionar la tecla F para teletransportarte"));
            },
            'Como no verme': function(){
                window.speechSynthesis.speak(new SpeechSynthesisUtterance("Puedes usar las teclas W A S D para moverte por el mapa o puedes presionar la tecla F para teletransportarte"));
            },
            'como me puedo mover': function(){
                window.speechSynthesis.speak(new SpeechSynthesisUtterance("Puedes usar las teclas W A S D para moverte por el mapa o puedes presionar la tecla F para teletransportarte"));
            },
            'Como puedo ver me': function(){
                window.speechSynthesis.speak(new SpeechSynthesisUtterance("Puedes usar las teclas W A S D para moverte por el mapa o puedes presionar la tecla F para teletransportarte"));
            },
            'Como puedo mover me': function(){
                window.speechSynthesis.speak(new SpeechSynthesisUtterance("Puedes usar las teclas W A S D para moverte por el mapa o puedes presionar la tecla F para teletransportarte"));
            },
            'como me vuelo': function(){
                window.speechSynthesis.speak(new SpeechSynthesisUtterance("Sólo los administradores pueden acceder a esta función"));
            },
            'como volar': function(){
                window.speechSynthesis.speak(new SpeechSynthesisUtterance("Sólo los administradores pueden acceder a esta función"));
            },
            'como puedo volar': function(){
                window.speechSynthesis.speak(new SpeechSynthesisUtterance("Sólo los administradores pueden acceder a esta función"));
            },
            
        };

        annyang.addCallback('result', function (phrases) {
            console.log("Creo que el usuario dijo: ", phrases[0]);
            console.log("Pero pudo haber dicho cualquiera de estas: ", phrases);
        });

        annyang.addCommands(commands);

        annyang.start({ autoRestart: true, continous: true });

    }
}

btn.addEventListener('click',hablar,true)