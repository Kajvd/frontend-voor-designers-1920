var darkfotos = document.querySelector('.donkerSlider');
var lichtfotos = document.querySelector('.lichtSlider');




const toggleSwitch = document.querySelector('.thema-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        donker(event);

    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        licht(event);

    }
}

toggleSwitch.addEventListener('change', switchTheme, false);






function donker(event) {
    lichtfotos.style.display = "none";
    darkfotos.style.display = "block";
}


function licht(event) {
    lichtfotos.style.display = "block";
    darkfotos.style.display = "none";
}




if (event.keyCode === 13) {
    switchTheme(event)
}