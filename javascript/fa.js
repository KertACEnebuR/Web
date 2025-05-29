console.log("Szia!");

//1.) hoz létre egy nev változót

let nev;

//inicializáld a saját nevedé értékével

nev = "Kertész Ruben";

//hozz létre egy phones tömböt, elemei: nokia, samsung, huawei

const phones = ["nokia", "samsung", "huawei"]

//cseréld ki az első elemet iPhone-ra

phones[0] = "iPhone";

//Írasd ki a konzolba változók használatával, hogy Iphonod van
//Megoldás: Ruzsinszki Zita telefonjának márkája: iPhone

console.log(nev + " telefonjának márkája: " + phones[0]);

/* 
2.) Hozz létre két változót: x és y néven, az egyik értéke 5 a másiké 10 legyen. 
Majd deklarálj két változót terulet és kerulet néven. Írasd ki a konzolba a 
téglalap területét és kerületét
megoldás:A téglalap kerülete: 30 és a területe pedig:  50
*/

let x, y;
x = 5;
y = 10;
terulet = "";
kerulet = "";

terulet = x * y;
kerulet = 2 * (x + y);

console.log("A téglalap területe: " + kerulet + " és a területe pedig: " + terulet);

/*3.) Hozz létre egy szemelyek objektumot, amelybe a következő értékek kerüljenek:
keresztnev Laszlo; kora 50; foglalkozas szerelo
cseréld ki a Laszlo nevet Pista-ra;
add hozzá az objektumhoz a lakhelynek Szécsényt
Irasd ki a konzolba: Pista lakhelye Szecseny
 */

const szemelyek = {keresztnev:"Laszlo", kora:"50", foglalkozas:"szerelo"};

szemelyek.keresztnev = "Pista";
szemelyek.lakhely = "Szecseny";

console.log(szemelyek.keresztnev + " lakhelye " + szemelyek.lakhely);