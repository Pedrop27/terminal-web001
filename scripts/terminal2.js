import { firestore } from './configuracion.js';

$('body').terminal({
    gato: function() {
        this.echo($('<img src="https://placekitten.com/408/287">'));
    },
    Hola: function() {
        this.echo('Hola, bienvenido al Rincon de Pedrop');
    },
    hola: function() {
        this.echo('Hola, bienvenido al Rincon de Pedrop');
    },
    ola: function() {
        this.echo('Aprende a escribir, "hola" se escribe con h');
    },
    help: function() {
        this.echo('Los comandos actualmente disponibles son: cat, Hola');
    },
    comando: function(){
        this.echo('Elige un lenguaje de programacion');
    },
        bash: async function(){	  
            const db = firebase.firestore();
            const bash = await db.collection("shell").doc("concepto001").get({merge: true});
            this.echo($(bash.data()));
        }
    
},
{
   greetings: greetings.innerHTML
}
);

const term = $('body').terminal();

term.echo("Bienvenido al Rincón de Pedrop, aquí podrás encontrar toda la información sobre lenguajes de programación", {typing: true, delay: 50});