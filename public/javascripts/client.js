console.log("hello");

const rolloverNumber = 10;

var ctx = document.getElementById('chart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: '# of Votes',
            data: [],
            backgroundColor: [
                'rgba(255, 66, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        },
        {
            label: 'Device 1',
            data: [],
            backgroundColor: [
                'rgba(200, 99, 137, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(200, 99, 137, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var d = setInterval(function randomData() {
    var date = new Date();
    timestamp = date.toISOString();
    
    data = Math.ceil(Math.random()*20);
    myChart.data.labels.push(timestamp);

    if (myChart.data.labels.length > rolloverNumber) {
        myChart.data.labels = myChart.data.labels.slice(myChart.data.labels.length - rolloverNumber, myChart.data.labels.length);
    }
    
    myChart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
        if (dataset.data.length > rolloverNumber) {
            dataset.data = dataset.data.slice(dataset.data.length - rolloverNumber, dataset.data.length);
        }
        console.log(dataset.data);
    });
    myChart.update();
}, 1000);