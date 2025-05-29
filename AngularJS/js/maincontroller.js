app.controller('MainController', function($scope){
    //angular változó

    $scope.szoveg = "Így működnek a változók az Angularban!";

    $scope.emberek = [
        {nev: 'Wick', eletkor: 20, csajok: ['Briget', 'Agnes']},
        {nev: 'Lucifer', eletkor: 10000, csajok: ['Detective', 'Milliók']},
        {nev: 'Ragnar', eletkor: 40, csajok: ['Lagherta', 'Aslaugn']},
        {nev: 'dlt', eletkor: 18, csajok: ['Izabella', 'Összes']},
    ];
});