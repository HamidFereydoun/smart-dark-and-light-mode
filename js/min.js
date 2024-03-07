// get style tag
var Style = document.getElementById('style');

// get theme color 
var ThemeColor = document.getElementById('body').getAttribute('theme-color');

// get btn change theme
var BtnChangeTheme = document.getElementById('btn-change-theme');

// get body
var GetBody = document.getElementById('body');

// localStorage ThemeColor
let localStorageThemeColor = localStorage.getItem('theme-color');

// set styles for dark and light mode

    //dark mode
var DarkMode = ":root {--body-color : #13171d;--box-color : #1e242e; --text-color:#fff;--border-color :#323b4a;}"
    
    //light mode
var LightMode = ":root {--body-color : #f0f5f9;--box-color : #fff; --text-color:#343d4c; --border-color :#d7e0f9;}"


// set localStorage
localStorage.setItem('theme-color', ThemeColor);

// Check theme color by localStorage
if (localStorageThemeColor == "light") {
    GetBody.removeAttribute("theme-color");
    GetBody.setAttribute("theme-color", "light");
    localStorage.setItem('theme-color', "light");
    ThemeColor = "light"
    Style.innerHTML = LightMode;
} else {
    GetBody.removeAttribute("theme-color");
    GetBody.setAttribute("theme-color", "dark");
    localStorage.setItem('theme-color', "dark");
    ThemeColor = "dark"
    Style.innerHTML = DarkMode;
}

// Change theme color by addEventListener
BtnChangeTheme.addEventListener('click', function () {
    if (ThemeColor == "light") {
        GetBody.removeAttribute("theme-color");
        GetBody.setAttribute("theme-color", "dark");
        ThemeColor = "dark"
        localStorage.setItem('theme-color', ThemeColor);
        Style.innerHTML = DarkMode;
    } else {
        GetBody.removeAttribute("theme-color");
        GetBody.setAttribute("theme-color", "light");
        ThemeColor = "light"
        localStorage.setItem('theme-color', ThemeColor);

        Style.innerHTML = LightMode;
    }
})