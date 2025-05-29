/*

szelektálás JQuery('valamilyen kód') $('')
*$('div') -> hrtl tag név alapján
*/

/*$('div');
$('#idneve');
$('.osztalyneve');
$('#idneve.osztalyneve ul li');
*/

// függvényhívás

$(document).ready(function(){
    //ez csak akkor fog lefutni ha a html betöltött
    //alert('A DOM betöltött')
    let $szoveg = $('h1').text();
    let szoveg = document.getElementById('welcome').innerHTML;
    console.log('JQuery:', $szoveg);
    console.log('JavaScript:', szoveg);
    console.log("Nincs tárolva: ", $('h1').text());
    //console.log($szoveg)

    $('h2').text('ezt JQueryvel van kiírva')

    console.log($(".sarga").css("background"));

    $(".sarga").css("background", "yellow")

    //oldal háttérszín kék
    //h1-es címsor piros betűszín

    $("body").css("background", "blue")
    $("h1").css("color", "red")


});

$(window).on('Load', function(){
    //ez megvárja, míg a képek és a iframe-k is betöltenek
});