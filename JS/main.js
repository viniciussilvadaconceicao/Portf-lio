/* BARRA DE NAVEGAÇÃO FUNÇÕES  */
function meuMenufunção(){
    var menuBtn = document.getElementById("meuNavMenu");
    
    if(menuBtn.className === "nav-menu"){
       menuBtn.className += " responsive";
    }else{
        menuBtn.className = "nav-menu";
    }
    }