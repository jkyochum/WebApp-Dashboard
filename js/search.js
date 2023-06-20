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
let firstFocusableEl;
let lastFocusableEl;

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

    for (let i = 0; i < results.length; i++) {
        const li = document.createElement('li');
        li.textContent = results[i];
        ul.appendChild(li);
        ul.classList.add('has-results');
        li.tabIndex = '0';
    }

    firstFocusableEl = results[0];
    lastFocusableEl = results[results.length - 1];



}

// results.addEventListener('focus', (e) => {
//     let activeElement = document.activeElement;

//     if (ul.firstChild === activeElement) {
//         console.log('in the ul');
//     }
// });

// function tabLoop() {
//     let activeElement = document.activeElement;
//     if (ul === activeElement) {
//         console.log('UL');
//     }
//     console.log(activeElement.id);
// }



searchWrapper.addEventListener(/*->*/'keyup'/*<-*/, (e) => {
    console.log(e);
    let activeElement = document.activeElement;
    //when user presses Enter on focused item, the value will store in the input field
    if (e.key === 'Enter') {
        input.value = e.target.innerText;
        ul.classList.remove('has-results');
    }
    console.log(activeElement);


    //I cannot figure out the logic here with 'keydown' or 'keyup'
    //'keydown' makes the lastElementChild selectable, but skips over firstElementChild after .focus
    //'keyup' skips the lastElementChild and gives .focus directly to firstelementChild
    if (e.key === 'Tab') {
        if (ul.lastElementChild === activeElement) {
            console.log('this is the last element');
            console.log(ul.firstchild);
            ul.firstElementChild.focus();
            e.preventDefault;
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
