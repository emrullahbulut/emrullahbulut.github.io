/*
 *
 * emrullah Bulut
 * emrullahbulut6@gmail.com
 * 3/03/2021
 * 
 */

var socialtags = [{
    img: "img/github.svg",
    link: "https://github.com/emrullahbulut"
}, {
    img: "img/linkedin.svg",
    link: "https://www.linkedin.com/in/emrullah-bulut-6a03a9186/"
}, {
    
    img: "https://visualpharm.com/assets/793/Email-595b40b65ba036ed117d4006.svg",
    link: "mailto:emrullah.bulut@bil.omu.edu.tr"
}]

function loadSocialIcons() {
    var socialtext = ""
    for (x in socialtags) {
        var data = `<a class="center" href="` + socialtags[x].link + `"> <img class="center" style="padding: 5px!important;width: 40px;" src="` + socialtags[x].img + `"></a>`
        socialtext += data
    }
    document.getElementById("social-list").innerHTML = socialtext;
}

loadSocialIcons()

function dayNightToggle() {
    var element = document.body;
    element.classList.toggle("light-mode");
    var check = window.localStorage.getItem('light-mode');
    if (check == "light") {
        window.localStorage.clear();
    } else {
        window.localStorage.setItem('light-mode', 'light');
    }

}

function checkDayNight() {
    var check = window.localStorage.getItem('light-mode');
    var element = document.body;
    if (check == "light") {
        element.classList.add("light-mode");
    } else {
        element.classList.remove("light-mode");
    }
}

checkDayNight()
