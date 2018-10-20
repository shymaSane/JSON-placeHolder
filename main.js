let button1 = document.getElementById('users_button');
let button2 = document.getElementById('posts_button');
let button3 = document.getElementById('comments_button');

button1.addEventListener('click', getUsers);
button2.addEventListener('click', getPosts);

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
