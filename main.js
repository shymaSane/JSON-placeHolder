let button1 = document.getElementById('users_button');
let button2 = document.getElementById('posts_button');
let button3 = document.getElementById('comments_button');

button1.addEventListener('click', getUsers);

function getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
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
}

