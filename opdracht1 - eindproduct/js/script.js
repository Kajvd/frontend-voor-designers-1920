/*
  Wat doe je ook alweer in Javascript voor een micro-interactie?
  1. Gebruik de querySelector om een element in je html te selecteren
  2. Koppel een evenListener aan het element om een mouse-event te detecteren
  3. Gebruik het Classlist object om een css class aan een element toe te voegen of weg te halen.
*/

new Sortable(example1, { /* zorgt ervoor dat sortable.js werkt */
    animation: 200,
    ghostClass: 'blue-background-class'
});


/* Sorteer functie */

function sortListDir() {
  var list, i, switching, b, shouldSwitch, dir, switchcount = 0;
  list = document.querySelector("#simple-list");
  switching = true;
  
  dir = "asc"; /* zet het sorteren op ascending */
  
  while (switching) { /* loop */
    
    switching = false; /* zeg dat er geen switching is */
    b = list.getElementsByClassName("list-group-item");
      
    
    for (i = 0; i < (b.length - 1); i++) { /* loop door alle list items heen */
      shouldSwitch = false; /* switching word uitgezet */
      
      if (dir == "asc") { /* er word gekekend of het volgende item moet switchen met het huidige item op basis van of het asc of desc is */
        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break; /* als het volgende item alfabetisch lager is dan wat het huidige item is switch'd hij en verbreekt hij de loop */
        }
      } else if (dir == "desc") {
        if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
          shouldSwitch= true;
          break; /* als het volgende item alfabetisch hoger is dan wat het huidige item is switch'd hij en verbreekt hij de loop */
        }
      }
    }
    if (shouldSwitch) { /* als shouldswitch true is voort hij dit uit */
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
      switchcount ++; /* elke keer als er een switch is gemaakt dan komt er 1 bij */
    } else {
      if (switchcount == 0 && dir == "asc") { /* als er geen switching is en het is niet ascending dan word het descending en gaat hij nog een keer door de loop*/
        dir = "desc";
        switching = true;
      }
    }
  }
}

/* einde sorteer functie */


/* omhoog functie (achterwege gelaten en vervangen door sorteer functie) */

var liedje1 = document.querySelector("#1")
var liedje2 = document.querySelector("#2")
var liedje3 = document.querySelector("#3")
var liedje4 = document.querySelector("#4")
var liedje5 = document.querySelector("#5")

function omhoog() {
    
}

