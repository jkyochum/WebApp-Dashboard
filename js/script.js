
const lineCtx = document.getElementById('lineChart');
const barCtx = document.getElementById('barChart');
const donutCtx = document.getElementById('doughnutChart');

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

//doughnut chart legend margin plugin
const legendMargin = {
    id: 'legendMargin',
    afterInit(chart, args, options) {
        console.log(chart.legend);
        const fitValue = chart.legend.fit;
        chart.legend.fit = function fit() {
            fitValue.bind(chart.legend)();
            let left = this.left += 800;
            return left;
        }
    }
}

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
    },
    plugins: [legendMargin]
});