/*============================================
        Exercices
============================================*/
function InfoUser(){
        let prenom              = prompt("quel est votre prenom");
        let age                 = parseInt(prompt("Bonjour " + prenom + ", quel age as-tu ?")); //parInt pour transformer le chaine de charactere en Int
        let anneeNaissance      = AnDuJour() - age;
        alert("tu es donc né en " + anneeNaissance) ;
        document.write("<p> vous vous appellez " + prenom + " et vous etes née en " + anneeNaissance + "</p>");
}


function AnDuJour() {
        let td=new Date();// Le date d'ouverture de la page (aujourd'hui)
        let An=td.getFullYear()
        console.log(Date.prototype.toDateString());
        return(An);
}
InfoUser();