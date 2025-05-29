function readJson(){
    //console.log("fut");
    let url = "https://dummyjson.com/products";
    sendRequest(url,"GET", null, function(posts){
        let postList = "";
        posts.products.forEach(post => {
            postList += `     
            <div class="col-lg-4 col-md-6 col-sm-12>
                <img src="${post.thumbnail}" class="img-fluid">
                <h3>${post.title}</h3>
            </div>
            `;
        });
            document.getElementById("result-container").innerHTML = postList;
    });
}

function SetRequest(url, method, body, callback){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(JSON.parse(xhr.responseText));
            console.log(xhr.responseText);
        }
    } 
    xhr.open(method, url);
    xhr.send();
}

window.onload = readJson();