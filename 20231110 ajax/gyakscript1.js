document.getElementById("fetch-posts").onclick = () =>{
    let xhr = new XMLHttpRequest();
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

                let list = document.getElementById("col").innerHTML = postListHTML;
            } 
        }
    }
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts")
    xhr.send();
}