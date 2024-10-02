let posts = 0;

for (let i = 0; i < 9; i++)
    {
        if (posts < 100)
        {
            console.log(posts);
            posts++
            fetchAndCreatePost();
    }
}

window.addEventListener('scroll', onScroll);

function onScroll()
{
    console.log("ScrollY: " + window.scrollY + " | innerHeight: " + window.innerHeight + " | scrollHeight: " + document.documentElement.scrollHeight);
    if (window.scrollY + 1 + window.innerHeight >= document.documentElement.scrollHeight)
    {
        console.log("Reached end!");
        for (let i = 0; i < 9; i++)
        {
            if (posts < 100)
            {
                console.log(posts);
                posts++
                fetchAndCreatePost();
            }
        }
    }
}

function fetchAndCreatePost()
{
    fetch(`https://jsonplaceholder.typicode.com/posts/${posts}`)
            .then(response => {return response.json();})
            .then(data => createPost(data))
            .catch(error => alert(error))
}

function createPost(post)
{
    let newDiv = document.createElement('div');
    let parent = document.getElementById('postSection');
    let title = post.title;
    let body = post.body;

    newDiv.className = 'post';
    newDiv.innerHTML = `<p><b>${title}</b></p><p>${body}</p>`
    parent.appendChild(newDiv);

}