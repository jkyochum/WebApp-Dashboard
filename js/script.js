
const bell = document.querySelector('#headerSvgWrapper svg');
const notificationLight = document.getElementById('notificationLight');
const notificationBoard = document.getElementById('notificationBoard');
let boardActive = false;
const hourlyBtn = document.getElementById('hourly');
const dailyBtn = document.getElementById('daily');
const weeklyBtn = document.getElementById('weekly');
const monthlyBtn = document.getElementById('monthly');
const lineCtx = document.getElementById('lineChart');
const barCtx = document.getElementById('barChart');
const donutCtx = document.getElementById('doughnutChart');
const alert = document.getElementById('alert');
const alertBtn = document.getElementById('alertBtn');
const searchField = document.getElementById('searchUserText')
const messageField = document.getElementById('messageUserText')
const messageBtn = document.getElementById('btnUserMessage');
const settings = document.getElementById('settings');
const emailToggle = document.getElementById('emailNotificationsSwitch');
const profileToggle = document.getElementById('publicProfileSwitch');
const timezone = document.getElementById('timezone');
const saveBtn = document.getElementById('btnSave');
const cancelBtn = document.getElementById('btnCancel');



//will display notifications board when called
function openNotifications() {
    notificationBoard.setAttribute('style', 'transform: translateY(0); opacity: 1; pointer-events: auto;');
    notificationLight.style.opacity = '0';
    alert.style.display = 'none';
}

//will hide notifications board when called
function closeNotifications() {
    notificationBoard.setAttribute('style', 'transform: translateY(-170px); opacity: 0; pointer-events: none;');
}

//Toggle notifications dropdown depending on target of click
document.addEventListener('click', e => {
    const target = e.target;
    console.log(e);
    if (!boardActive) {
        //check that navigation svgs are not being clicked to activate notification board
        if (!target.classList.contains('icon')) {
            if (target.tagName === 'svg' || target.tagName === 'path') {
                openNotifications();
                boardActive = true;
            }
        }
    }
    else if (boardActive) {
        if (target.tagName !== 'LI' && target.tagName !== 'UL' && target.tagName !== 'P') {
            closeNotifications();
            boardActive = false;
        }
        else if (target.tagName === 'svg' || target.tagName === 'path') {
            closeNotifications();
            boardActive = false;
        }
    }

});

//Clear default alert box
alertBtn.addEventListener('click', () => {
    alert.style.display = 'none';
});

//Data for the different line charts to display
const hourlyLineData = {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1900, 2250, 1500, 2500],
        borderWidth: 1,
        backgroundColor: 'rgba(118, 103, 178, .3)',
        fill: true,
        tension: .35
    }]
};

const dailyLineData = {
    labels: ['1-5', '6-10', '11-15', '15-20', '21-25', '26-30'],
    datasets: [{
        data: [17501, 12501, 19001, 22501, 15001, 25001],
        borderWidth: 1,
        backgroundColor: 'rgba(118, 103, 178, .3)',
        fill: true,
        tension: .35
    }]
};

const weeklyLineData = {
    labels: ['1', '2', '3', '4'],
    datasets: [{
        data: [72250, 212250, 122000, 232000],
        borderWidth: 1,
        backgroundColor: 'rgba(118, 103, 178, .3)',
        fill: true,
        tension: .35
    }]
};

const monthlyLineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
        data: [555750, 5155250, 5551000, 65520500, 4551500, 1557750, 6155250, 6190550, 5562250, 3155500, 9255500, 55555555],
        borderWidth: 1,
        backgroundColor: 'rgba(118, 103, 178, .3)',
        fill: true,
        tension: .35
    }]
};


//Base configurations for each line chart 
const configH = {
    type: 'line',
    data: hourlyLineData,
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
};

const configD = {
    type: 'line',
    data: dailyLineData,
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
};

const configW = {
    type: 'line',
    data: weeklyLineData,
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
};

const configM = {
    type: 'line',
    data: monthlyLineData,
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
};


//Instantiating the default chart shown on page
let myChart = new Chart(
    document.getElementById('lineChart'),
    configH
);

//Each additional chart when the unique button is clicked
hourlyBtn.addEventListener('click', () => {
    myChart.destroy();
    myChart = new Chart(
        document.getElementById('lineChart'),
        configH
    );
});

dailyBtn.addEventListener('click', () => {
    myChart.destroy();
    myChart = new Chart(
        document.getElementById('lineChart'),
        configD
    );
});

weeklyBtn.addEventListener('click', () => {
    myChart.destroy();
    myChart = new Chart(
        document.getElementById('lineChart'),
        configW
    );
});

monthlyBtn.addEventListener('click', () => {
    myChart.destroy();
    myChart = new Chart(
        document.getElementById('lineChart'),
        configM
    );
});


//Default bar chart and doughnut chart
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
});


//save settings input values to local storage
saveBtn.addEventListener('click', e => {
    const timezoneVal = timezone.value;
    let isEmailChecked = false;
    let isProfileChecked = false;
    if (emailToggle.checked) {
        isEmailChecked = 'true';
    }
    else {
        emailToggle.value = 'off';
        isEmailChecked = false;
    }
    if (profileToggle.checked) {
        isProfileChecked = 'true';
    }
    else {
        profileToggle.value = 'off';
        isProfileChecked = false;
    }
    localStorage.setItem('emailToggle', isEmailChecked);
    localStorage.setItem('profileToggle', isProfileChecked);
    localStorage.setItem('timezone', timezoneVal);
    console.log(e);
});

//clear localStorage and return inputs to default values
cancelBtn.addEventListener('click', () => {
    localStorage.clear();
    timezone.value = '';
    emailToggle.checked = false;
    profileToggle.checked = false;
});


//when the page loads, so does localStorage values for settings widget
window.onload = function () {
    if (localStorage.length > 0) {
        const timezoneVal = localStorage.getItem('timezone');
        const emailToggleVal = localStorage.getItem('emailToggle');
        const profileToggleVal = localStorage.getItem('profileToggle');
        timezone.value = timezoneVal;
        if (emailToggleVal === 'true') {
            emailToggle.checked = true;
        }
        else {
            emailToggle.checked = false;
        }
        if (profileToggleVal === 'true') {
            profileToggle.checked = true;
        }
        else {
            profileToggle.checked = false;
        }
    }
}


