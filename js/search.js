const ul = document.querySelector('#searchResults ul');
const results = document.getElementById('searchResults');
const input = document.getElementById('searchUserText');
const users = [
    'Victoria Chambers',
    'Dale Byrd',
    'Dawn Wood',
    'Dan Oliver',
    'Jimmy Garcia',
    'Winston Bonavue',
    'John Wick',
    'Davy Jones'
];

//filter search results based on input from user

function search() {
    const results = [];
    ul.innerHTML = '';

    let input = document.getElementById('searchUserText').value;
    input = input.toLowerCase();

    for (let i = 0; i < users.length; i++) {
        if (users[i].toLowerCase().includes(input)) {
            results.push(users[i]);
        }
        else {
            ul.classList.remove('has-results');
        }
    }

    // ul.innerHTML = '';

    for (let i = 0; i < results.length; i++) {
        const li = document.createElement('li');
        li.textContent = results[i];
        ul.appendChild(li);
        ul.classList.add('has-results');
    }


}

results.addEventListener('click', (e) => {
    console.log(e);
    input.value = e.target.innerText;
    ul.classList.remove('has-results');
})