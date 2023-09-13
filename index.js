var container = document.querySelector("#container");

var heart = document.querySelector('i')


container.addEventListener("dblclick", function () {
    heart.style.transform = 'translate(-50%,-50%) scale(1)'
    heart.style.opacity = 0.8;
    heart.style.color = "red"

    setTimeout(function(){
        heart.style.opacity = 0;
    },1000);

    setTimeout(function(){
        heart.style.transform = "translate(-50%,-50%) scale(0.8)"
        // heart.style.color = "yellow"
    },2000);
});

