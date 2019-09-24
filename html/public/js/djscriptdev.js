var toggle = false
var container = document.getElementById('container');
var hideMenu = document.getElementById('hideMenu');
var navBar = document.getElementById('navBar');
var content = document.getElementsByClassName('content');
var menu = document.getElementById('menu');
var isMenuOpen = false;
var body = document.body;
var aTags = document.getElementsByTagName('a');
var bulb = document.getElementById('bulb');
var contact = document.getElementById('contact');
var form = document.getElementById('form');
var viewForm = false;

function lightSwitch() {
    if (toggle == false) {
        body.style.backgroundColor = "whitesmoke";
        body.style.color = "black";
        container.style.backgroundColor = "whitesmoke";
        bulb.src = 'assets/icons/lightbulbOn.png';
        document.getElementById("lightSwitch").innerHTML = "Lights On";
        for(var i=0, len=content.length; i<len; i++)
        {
            content[i].style["border-bottom"] = "black solid 1px";
        }
        for(var i=0, len=aTags.length; i<len; i++)
        {
            aTags[i].style["color"] = "black";
        }
        toggle = true;
    } else {
        body.style.backgroundColor = "black";
        body.style.color = "whitesmoke";
        container.style.backgroundColor = "black";
        bulb.src = 'assets/icons/lightbulbOff.png';
        document.getElementById("lightSwitch").innerHTML = "Lights Off";
        for(var i=0, len=content.length; i<len; i++)
        {
            content[i].style["border-bottom"] = "whitesmoke solid 1px";
        }
        for(var i=0, len=aTags.length; i<len; i++)
        {
            aTags[i].style["color"] = "whitesmoke";
        }
        toggle = false;
    }
}

function flyDown() {
    if (isMenuOpen == false){
        navBar.style.display = "block"
        hideMenu.style.marginBottom = "5px";
        menu.innerHTML = "CLOSE";
        isMenuOpen = true;
    } else if (isMenuOpen == true) {
        navBar.style.display = "none"
        hideMenu.style.marginBottom = "-40px";
        menu.innerHTML = "MENU";
        isMenuOpen = false;
    }
}

function viewModal(){
    if(viewForm == false){
        contact.style.display = "block";
        viewForm = true;
    }else{
        contact.style.display = "none";
        viewForm = false;
    }
}

$('form').on('submit', e => {
    e.preventDefault();

    const email = $('#email').val().trim();
    const name = $('#name').val().trim();
    const message = $('#message').val().trim();

    const data = {
        email,
        name,
        message
    }
    console.log('Data', data)

    $.post('./email', data, function() {
        console.log('Server received our data');
    });
})