/*var dog = {};
dog.breed = 'Golden retriever';
dog['other breed'] = 'Chihuahua';
console.log(dog)*/

var osoba = {};

osoba.ime = "Mario";
osoba.prezime = "Simon";
osoba.godine = "35";
osoba.brojCipela = 43;

var json = JSON.stringify(osoba);
console.log("JSON zapis: " + json)
/*var isObrisano = delete osoba.prezime;
console.log(isObrisano)*/

if (osoba.brojCipela > 39) {
    console.log(`Ime: ${osoba.ime}; Prezime: ${osoba.prezime}; Godine: ${osoba.godine}`);
}