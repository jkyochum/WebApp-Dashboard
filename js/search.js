const searchWrapper = document.getElementById('searchWrapper');
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

    //looping through input results list and adding them to html
    //and giving each item a 
    for (let i = 0; i < results.length; i++) {
        const li = document.createElement('li');
        li.textContent = results[i];
        ul.appendChild(li);
        ul.classList.add('has-results');
        li.tabIndex = '0';
    }
}


//event listener chacking for keypresses inside of search results list
searchWrapper.addEventListener('keydown', (e) => {
    let activeElement = document.activeElement;

    //when user presses Enter on focused item, the value will store in the input field
    if (e.key === 'Enter') {
        input.value = e.target.innerText;
        ul.classList.remove('has-results');
    }

    //loop from last child to first child on tab
    if (e.key === 'Tab') {

        //if last element is active and shift is pressed then continue default bahavior
        //otherwise add focus to the first element in the list
        if (ul.lastElementChild === activeElement) {
            if (e.shiftKey) {
                return;
            }
            else {
                e.preventDefault();
                ul.firstElementChild.focus();
            }
        }
    }

    //if shift and tab are pressed, and the first element has focus, then direct focus to last element
    if (e.shiftKey) {
        if (e.key === 'Tab') {
            if (ul.firstElementChild === activeElement) {
                e.preventDefault();
                ul.lastElementChild.focus();
            }
        }
    }
});


//event listener to select a name by mouseclick
document.addEventListener('click', (e) => {
    //if the classlist has results and is showing
    if (ul.classList.contains('has-results')) {
        //if the target of the click is an 'LI'
        //then save the value of selected name to the input field
        //and close the list
        if (e.target.tagName === 'LI') {
            input.value = e.target.innerText;
            ul.classList.remove('has-results');
        }
        //otherwise, close the list
        else {
            ul.classList.remove('has-results');
        }
    }
});
