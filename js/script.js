
const lineCtx = document.getElementById('lineChart');
const barCtx = document.getElementById('barChart');
const donutCtx = document.getElementById('doughnutChart');

new Chart(lineCtx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

new Chart(barCtx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

new Chart(donutCtx, {
    type: 'doughnut',
    data: {
        labels: ['Desktop', 'Tablet', 'Phones'],
        datasets: [{
            label: 'MOBILE USERS',
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
        scales: {
            display: false
        },
        plugins: {
            legend: {
                position: 'right'
            }
        }
    }
});