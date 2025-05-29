//Alap állapot
let allapot = {
    csokik: [
        {
            nev: "Étcsoki",
            ara: 2500,
            raktaron:true
        },
        {
            nev: "Fehér csoki",
            ara: 2700,
            raktaron:false
        },
        {
            nev: "Mogyorós csoki",
            ara: 2100,
            raktaron:true
        },
        {
            nev: "Kávés csoki",
            ara: 2200,
            raktaron:true
        }
    ]
};

//Read művelet
function renderCsokik() {
    let csokiHTML = "";
    for (const csoki of allapot.csokik) {
        //console.log(csoki.raktaron);

        if (csoki.raktaron) {
            csokiHTML += `
            <div class="card m-2 p-3 text-center bg-success text-white">
                <p><b>${csoki.nev}</b></p>
                <p>${csoki.ara} Ft</p>
            </div>
        `;
        } 
        else 
        {
            csokiHTML += `
            <div class="card m-2 p-3 text-center bg-danger text-white">
                <p><b>${csoki.nev}</b></p>
                <p>${csoki.ara} Ft</p>
            </div>
        `;
        }
        
    }
    document.getElementById("csoki-lista").innerHTML = csokiHTML;
}

/*function renderCsokik() {
    let csokiHTML = "";

    allapot.csokik.forEach(csoki => {
        csokiHTML += `
            <div class="${csoki.raktaron ? "bg-success" : "bg-danger"} p-4 m-4">
                <h2>${csoki.nev}</h2>
                <p> A termék ára: ${csoki.ara} Ft</p>
            </div>
        `
    })
    
    document.getElementById("csoki-lista").innerHTML = csokiHTML;
}
*/
let btn = document.getElementById("ujtermek");
console.log(btn);
// btn.addEventListener('click', newChoco)
//arrow function
btn.onclick = () => {
    //console.log("függvény lefut");

    let newFormHTML = `
    <h4>Új csoki hozzáadása</h4>
    <form id="uj-csoki" class="p-5">
        <label class="w-100">
            <h5>Termék neve:</h5>
            <input type="text" name="nev" class="form-control">
        </label>

        <label class="w-100">
            <h5>Termék ára:</h5>
            <input type="number" name="ara" class="form-control">
        </label>

        <label class="w-100">
            <h5>Van-e raktáron?</h5>
            <input type="checkbox" name="raktaron" class="form-control">
        </label>

        <button class="btn btn-primary" type="submit">Felvitel</button>

    </form>
    `;
    document.getElementById("uj").innerHTML = newFormHTML;

    //ha az új termék felvitelre kerüljön
    document.getElementById("uj-csoki").onsubmit = function(event){
        event.preventDefault();

        let nev = event.target.elements.nev.value;
        console.log(nev);
        let ara = event.target.elements.ara.value;
        console.log(ara);
        let raktaron = event.target.elements.raktaron.checked;
        console.log(raktaron); 

//az új terméket hozzá is kell adni a tömbhöz

        allapot.csokik.push(
            {
                nev: nev,
                ara: ara,
                raktaron: raktaron
            });
            document.getElementById('uj').innerHTML = "";
            document.getElementById('ujtermek').style.display = 'block';
            renderCsokik();
    }
}

window.onload = renderCsokik();