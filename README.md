# Smart dark and light mode for web pages
A simple code for smart light and dark themes

Even after closing the browser and coming back after a few days, the selected theme is still displayed💻

![infographic](/img/readme-img.jpg)

This is a simple and experimental code, but it explains well the concept of localStorage, it is not interesting 👽

# Demo
![infographic](/img/demo.gif)

# 🔑Instructions
To use this feature, first edit the **style** and **body** tags of your project similar to the code below, then link the *min.js* file to your project and then add the theme change button to your pages.

for body tag:
```html
<body theme-color="dark" id="body">
```
*In the above code, you can add "light" instead of "dark".*

for style tag 
```html
<style id="style"></style>
```
## 💎Changing the color of themes
You can use root selector to change theme colors. For this, you should look for the following codes in the min.js file and customize it
```javascript
// set styles for dark and light mode

    //dark mode
var DarkMode = ":root {--body-color : #13171d;--box-color : #1e242e; --text-color:#fff;--border-color :#323b4a;}"
    
    //light mode
var LightMode = ":root {--body-color : #f0f5f9;--box-color : #fff; --text-color:#343d4c; --border-color :#d7e0f9;}"
```
