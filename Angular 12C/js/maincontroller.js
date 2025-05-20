app.controller('MainController', function($scope){

    $scope.klubbok = [
        {nev: 'Bayern München', flag: "pics/nemet.png", logo: "pics/bayern.png", orszag: 'Németország', csapatok: ['Felnőtt', 'Ifijúsági', 'Női']},
        {nev: 'Real Madrid', flag: "pics/spanyol.png", logo: "pics/real.png", orszag: 'Spanyolország', csapatok: ['Női', 'Ifijúsági', 'Felnőtt']},
        {nev: 'Chelsea', flag: "pics/angol.png", logo: "pics/chelsea.png", orszag: 'Anglia',  csapatok: ['Felnőtt', 'Ifijúsági']},
        {nev: 'RC Lens', flag: "pics/francia.png", logo: "pics/lens.png", orszag: 'Franciaország', csapatok: ['Női', 'Felnőtt']}
    ];
});

