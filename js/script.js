
const lineCtx = document.getElementById('lineChart');
const barCtx = document.getElementById('barChart');
const donutCtx = document.getElementById('doughnutChart');
const alert = document.getElementById('alert');
const alertBtn = document.getElementById('alertBtn');
const searchField = document.getElementById('searchUserText')
const messageField = document.getElementById('messageUserText')
const messageBtn = document.getElementById('btnUserMessage');

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

alertBtn.addEventListener('click', () => {
    alert.style.display = 'none';
})

function createAlert() {
    window.alert(`Message Sent!
    
We will be in touch with you shortly.
Thank you for contacting us.
    `);
}

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
        searchField.placeholder = '*Required';
    }
    if (message) {
        messageField.style.borderColor = '#aba9a9';
        messageField.placeholder = 'Message for User';
        messageEntered = true;
    }
    else {
        messageField.style.borderColor = '#e32228';
        messageField.placeholder = '*Required';
    }

    if (searchEntered && messageEntered) {
        searchField.value = '';
        messageField.value = '';

        setTimeout(() => { createAlert() }, 10);

    }



})