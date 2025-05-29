function szamitas() {

//Róma

let roma = parseInt(rom.value);
console.log("Római utazás ára: " + roma);

let romarep = parseInt(romrep.value);
console.log("A reptéri illeték: " + romarep);

let romabizt = parseInt(rombizt.checked ? "12000" : "0");
console.log("Biztosítás: " + romabizt);

let bruttoroma = (roma + romarep + romabizt) * romfo.value;
console.log("Összesen: " + bruttoroma);

//Összesítés a sorok végén:

document.getElementById("romb").value = bruttoroma;

//Jordánia

let jordania = parseInt(jor.value);
console.log("Jordániai utazás ára: " + jordania);

let jordaniarep = parseInt(jorrep.value);
console.log("A reptéri illeték: " + jordaniarep);

let jordaniabizt = parseInt(jorbizt.checked ? "12000" : "0");
console.log("Biztosítás: " + jordaniabizt);

let bruttojordania = (jordania + jordaniarep + jordaniabizt) * jorfo.value;
console.log("Összesen: " + bruttojordania);

//Összesítés a sorok végén:

document.getElementById("jorb").value = bruttojordania;

//Törökország

let torok = parseInt(tor.value);
console.log("Törökországi utazás ára: " + torok);

let torokrep = parseInt(torrep.value);
console.log("A reptéri illeték: " + torokrep);

let torokbizt = parseInt(torbizt.checked ? "12000" : "0");
console.log("Biztosítás: " + torokbizt);

let bruttotorok = (torok + torokrep + torokbizt) * torfo.value;
console.log("Összesen: " + bruttotorok);

//Összesítés a sorok végén:

document.getElementById("torb").value = bruttotorok;


//Marokkó

let marokko = parseInt(mar.value);
console.log("Marokkói utazás ára: " + marokko);

let marokrep = parseInt(marrep.value);
console.log("A reptéri illeték: " + marokrep);

let marokbizt = parseInt(marbizt.checked ? "12000" : "0");
console.log("Biztosítás: " + marokbizt);

let bruttomarok = (marokko + marokrep + marokbizt) * marfo.value;
console.log("Összesen: " + bruttomarok);

//Összesítés a sorok végén:

document.getElementById("marb").value = bruttomarok;

// Mindösszesen kiszámolása

let osszesen = bruttoroma + bruttojordania + bruttomarok + bruttotorok;
console.log("Összesen: " + osszesen);

document.getElementById("ossz").value = osszesen;

}

