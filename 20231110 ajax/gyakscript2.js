let btn = document.getElementById("fetch-posts");
btn.onclick = () => {
    //console.log("A függvény fut.");
    let url = "https://jsonplaceholder.typicode.com/posts";
    sendRequest();
}

function sendRequest(){
    /*let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            let posts = JSON.parse(xhr.responseText);
            //console.log(posts);
            let postListHTML ="";

            for(const post of posts){
                console.log(post.id);
                postListHTML += `
                //"<p>" + post.title + "</p>";
                <h2>${post.title}</h2>
                <p>${post.body}</p>
                `;
            }
        }
    }
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts")
    xhr.send();*/
    
}