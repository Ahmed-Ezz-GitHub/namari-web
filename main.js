let ptn = document.getElementById("button");

Window.onscroll = function() {
    if(window.scrollY >= 500){
        ptn.style.display = "block";
    }else{
        ptn.style.display = "none";
    }
};


