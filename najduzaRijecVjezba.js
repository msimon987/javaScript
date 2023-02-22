function traziNajduzuRijec(zadaniNiz) {
    var najduzaRijecUFunkciji = "";
    for(i = 0; i < zadaniNiz.length; i++) {
    
        rijec = zadaniNiz[i];
        
        if (rijec.length > najduzaRijecUFunkciji.length) {
            najduzaRijecUFunkciji = rijec
        }      
    }
    return najduzaRijecUFunkciji
}

var niz = ["Marko", "Ana", "Josipa", "Anamarija", "Ivo"];

var najduzeIme = traziNajduzuRijec(niz)

console.log(najduzeIme)