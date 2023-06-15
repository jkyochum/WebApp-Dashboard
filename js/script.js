
const bell = document.querySelector('#headerSvgWrapper svg');
const notificationLight = document.getElementById('notificationLight');
const notificationBoard = document.getElementById('notificationBoard');
let boardActive = false;
const lineCtx = document.getElementById('lineChart');
const barCtx = document.getElementById('barChart');
const donutCtx = document.getElementById('doughnutChart');
const alert = document.getElementById('alert');
const alertBtn = document.getElementById('alertBtn');
const searchField = document.getElementById('searchUserText')
const messageField = document.getElementById('messageUserText')
const messageBtn = document.getElementById('btnUserMessage');

function openNotifications() {
    notificationBoard.setAttribute('style', 'transform: translateY(0); opacity: 1; pointer-events: auto;')
    notificationLight.style.opacity = '0';
    alert.style.display = 'none';
}

function closeNotifications() {
    notificationBoard.setAttribute('style', 'transform: translateY(-170px); opacity: 0; pointer-events: none;')

}


document.addEventListener('click', e => {
    console.log(e);
    const tag = e.target.tagName;
    if (!boardActive) {
        if (tag === 'svg' || tag === 'path') {
            openNotifications();
            boardActive = true;
        }
    }
    else if (boardActive) {
        if (tag !== 'LI' && tag !== 'UL' && tag !== 'P') {
            closeNotifications();
            boardActive = false;
        }
        else if (tag === 'svg' || tag === 'path') {
            closeNotifications();
            boardActive = false;
        }
    }

})





// //Notification dropdown list
// //Will display the dropdown by increasing opacity and Y axis position
// //Will also clear the notification light and the alert box
// bell.addEventListener('click', () => {

//     if (notificationBoard.style.opacity === '0' || notificationBoard.style.opacity === '') {
//         // notificationBoard.setAttribute('style', 'transform: translateY(0); opacity: 1; pointer-events: auto;')
//         // notificationLight.style.opacity = '0';
//         // alert.style.display = 'none';
//         openNotifications();
//         boardActive = true;

//     }
//     else {
//         // notificationBoard.setAttribute('style', 'transform: translateY(-170px); opacity: 0; pointer-events: none;')
//         closeNotifications();
//         boardActive = false;
//     }
// })




//Clear default alert box
alertBtn.addEventListener('click', () => {
    alert.style.display = 'none';
})


new Chart(lineCtx, {
    type: 'line',
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1900, 2250, 1500, 2500],
            borderWidth: 1,
            backgroundColor: 'rgba(118, 103, 178, .3)',
            fill: true,
            tension: .35
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

new Chart(barCtx, {
    type: 'bar',
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            data: [75, 115, 175, 125, 225, 200, 100],
            borderWidth: 1,
            backgroundColor: 'rgb(118, 103, 178)'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false
            }
        },

    }
});

new Chart(donutCtx, {
    type: 'doughnut',
    data: {
        labels: ['Desktop', 'Tablet', 'Phones'],
        datasets: [{
            data: [15, 5, 4],
            borderWidth: 1,
            backgroundColor: [
                'rgb(118, 103, 178)',
                'rgb(49, 182, 91)',
                'rgb(26, 176, 196)'

            ],
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            display: false
        },
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    boxWidth: 20,
                    align: 'right',
                    font: {
                        family: "'Martel Sans', sans-serif",
                        weight: 'bold'
                    }
                }
            }
        }
    }
});


//Alert function to be used by timeout function
function createAlert() {
    window.alert(`Message Sent!
    
We will be in touch with you shortly.
Thank you for contacting us.
    `);
}


//Message submit button handler
//Will check for empty text fields and respond appropriately
messageBtn.addEventListener('click', () => {
    let searchEntered = false;
    let messageEntered = false;
    const search = searchField.value;
    const message = messageField.value;


    if (search) {
        searchField.style.borderColor = '#aba9a9';
        searchField.placeholder = 'Search for User';
        searchEntered = true;
    }
    else {
        searchField.style.borderColor = '#e32228';
        searchField.placeholder = '*Required: Search for User';
    }
    if (message) {
        messageField.style.borderColor = '#aba9a9';
        messageField.placeholder = 'Message for User';
        messageEntered = true;
    }
    else {
        messageField.style.borderColor = '#e32228';
        messageField.placeholder = '*Required: Message for User';
    }

    if (searchEntered && messageEntered) {
        searchField.value = '';
        messageField.value = '';

        //timeout for alert popup to allow form to clear before executing
        setTimeout(() => { createAlert() }, 10);

    }
})