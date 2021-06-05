    i = setInterval(function () {
    clearInterval(i);

    document.getElementById("loading").style.display = "none";
    document.getElementById("mainPlayer").style.display = "block";
   
    }, 2000);

    function redirect_play(){
        window.location.href = "jogo.html?som=" + getKeyS();
    }

    function redirect_instru(){
        let inf = document.getElementById("info").style.display;
        
        if(inf == "none"){
            document.getElementById("info").style.display = "block";
            document.getElementById("mainPlayer").style.display = "none";
        }else{
            document.getElementById("info").style.display = "none";
            document.getElementById("mainPlayer").style.display = "block";
        }
    }

    function redirect_creditos(){
        let creditos = document.getElementById("creditos").style.display;
        
        if(creditos == "none"){
            document.getElementById("creditos").style.display = "block";
            document.getElementById("mainPlayer").style.display = "none";
        }else{
            document.getElementById("creditos").style.display = "none";
            document.getElementById("mainPlayer").style.display = "block";
        }
    }