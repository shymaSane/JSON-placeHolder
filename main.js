let button1 = document.getElementById('users_button');
let button2 = document.getElementById('posts_button');
let button3 = document.getElementById('comments_button');
let form1 = document.getElementById('form-post');
// let submit1 = document.getElementById('form');


button1.addEventListener('click', getUsers);
button2.addEventListener('click', getPosts);
form1.addEventListener('submit', addPost);

function getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
    //if it wasnt json then it would be res.text()
    .then((res) => res.json())
    .then((users) => {
        let output = "";
        users.forEach(user => {
            // console.log(user)
             output += `<ul>
                 <li>${user.id}</li>
                 <li>${user.name}</li>
                 <li>${user.email}</li>
                 <li>${user.username}</li>
            </ul>
            `
        });

        document.getElementById('show_results').innerHTML = output
        
    })
    .catch((err) => {
        console.log("there is no connection")
    })
}

function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    //if it wasnt json then it would be res.text()
    .then((res) => res.json())
    .then((posts) => {
        let output = "";
        posts.forEach(post => {
            // console.log(post)
             output += `<ul>
                 <li>${post.id}</li>
                 <h3>${post.title}</h3>
                 <p>${post.body}</p>
            </ul>
            <br>
            `
        });

        document.getElementById('show_results').innerHTML = output
        
    })
    .catch((err) => {
        console.log("there is no connection")
    })
}

function addPost(e) {
    // to not submit to a file(means if we didnt add this it ll submit and adds the value t the current url )
    e.preventDeafult();
    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        //headers is what kind of data we are going to send 
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            title: title, 
            body: body
        })
    })
    .then(res => res.json())
    .then(data => console.log(data))
}