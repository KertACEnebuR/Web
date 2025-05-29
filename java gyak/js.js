function szamol(){
    let korsug = parseInt(document.getElementById("korsugar").value);
    console.log("Körsugara amit a user megadott: ", korsug);

    let korker = Math.round(2 * korsug * Math.PI);
    console.log("A kör kerülete: ", korker);

    let korter = Math.round(Math.pow(korsug, 2) * Math.PI);
    console.log("A kör területe: ", korter);
}

function szamol2(){
    let teglahossz = parseInt(document.getElementById("teglahosszusag").value);
    console.log("Téglalap hosszúsága amit a user megadott: ", teglahossz);

    let teglaszel = parseInt(document.getElementById("teglaszelesseg").value);
    console.log("Téglalap szélessége amit a user megadott: ", teglaszel);

    let teglaker = Math.round(2 * (teglahossz + teglaszel));
    console.log("A téglalap kerülete: ", teglaker);

    let teglater = Math.round(teglahossz * teglaszel);
    console.log("A téglalap területe: ", teglater);
}