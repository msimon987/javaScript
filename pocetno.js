var auto = {
    marka: "vw",
    gorivo: "benzin",
    model: "Golf",
    godina: 2022,
    boja: "crvena",
    maxBrzina: 160,
    minBrzina: 0,
    ubrzaj: function(ubrzanje) {
        this.trenutnaBrzina += ubrzanje;
        return this.trenutnaBrzina;
    },
    zakoci: function(brojSekundi) {
        while (this.trenutnaBrzina > 0 && brojSekundi >=0){
            this.trenutnaBrzina -= 2; 
            console.info("trenutna brzina pri kočenju je: " + this.trenutnaBrzina);
            brojSekundi--;
            console.debug("brojac: " + brojSekundi)
        }
        return this.trenutnaBrzina;
    },
    brojKotaca: 4,
};
console.log("Ja vozim auto marke: " + auto.marka);
console.log(`Ja vozim auto marke: ${auto.marka}`);

console.log("Auto vozi brzinom" + auto.ubrzaj(60));
console.log("Auto nakon kočenja vozi brzinom " + auto.zakoci(2))