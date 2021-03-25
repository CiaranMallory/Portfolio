let labels1 = ['IAM Cybersecurity', 'Software Dev', 'Kayak Instructing'];
let data1 = [60, 20, 20];
let colors1 = ['#49A9EA', '#36CAAB', '#d8eb34'];

let myDoughnutChart = document.getElementById("myChart").getContext('2d');

let chart1 = new Chart(myDoughnutChart, {
    type: 'doughnut',
    data: {
        labels: ['IAM Cybersecurity', 'Software Dev', 'Kayak Instructing'],
        datasets: [ {
            data: [60, 20, 20],
            backgroundColor: ['#49A9EA', '#36CAAB', '#d8eb34']
        }]
    },
    options: {
        title: {
            text: "Experience",
            display: true
        }
    }
});

let labels2 = ['Maths', 'Analogue Electronics', 'C-Programming', 'Telecommunication'];
let data2 = [75, 63, 70, 88];
let colors2 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF'];

let myChart2 = document.getElementById("myChart2").getContext('2d');

let chart2 = new Chart(myChart2, {
    type: 'bar',
    data: {
        labels: labels2,
        datasets: [ {
            data: data2,
            backgroundColor: colors2
        }]
    },
    options: {
        title: {
            text: "Exam Results",
            display: true
        },
        legend: {
          display: false
        }
    }
});


let labels3 = ['Problem-Solving', 'Report-writing', 'Teamwork', 'Communication', 'Leadership'];
let myChart3 = document.getElementById("myChart3").getContext('2d');

let chart3 = new Chart(myChart3, {
    type: 'radar',
    data: {
        labels: labels3,
        datasets: [
          {
            label: 'Competency',
            fill: true,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            pointBorderColor: "#fff",
            pointBackgroundColor: "rgba(255, 99, 132, 1)",
            data: [51, 10, 32, 20, 44]
          }
        ]
    },
    options: {
        title: {
            text: "Skills",
            display: true
        }
    }
});

let labels4 = ['Javascript', 'Python', 'C/C++', 'HTML', 'CSS', 'SQL'];
let data4 = [83, 67, 66, 61, 47, 187];
let colors4 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF', '#AC5353', '#CFD4D8'];

let myChart4 = document.getElementById("myChart4").getContext('2d');

let chart4 = new Chart(myChart4, {
    type: 'pie',
    data: {
        labels: labels4,
        datasets: [ {
            data: data4,
            backgroundColor: colors4
        }]
    },
    options: {
        title: {
            text: "Programming Languages",
            display: true
        }
    }
});
