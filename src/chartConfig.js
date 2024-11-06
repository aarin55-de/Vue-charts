export const data = {
    labels: ['Complete', 'Incomplete'],
    datasets: [
      {
        backgroundColor: ['#3E8AFB', '#E46651',],
        data: [80, 20]
      }
    ]
  }
  export const data2 = {
    labels: ['Complete', 'Incomplete'],
    datasets: [
      {
        backgroundColor: ['#3E8AFB', '#ffffff',],
        data: [80, 20]
      }
    ]
  }
  
  export const options = {
    responsive: false,
    maintainAspectRatio: true
  }

  export const dataLine = {
    labels: ['0', '2', '4', '6', '8', '10'],
    datasets: [
      {
        label: 'Actual Burndown',
        backgroundColor: '#007AC3',
        data: [100, 95, 90, 75, 90, 100]
      },
      {
        label: 'Ideal Burndown',
        backgroundColor: '#E37E26',
        data: [100, 80, 60, 40, 20, 0]
      }
    ]
  }

  export const velocity = {
    labels: [
      'Aug 1',
      'Aug 8',
      'Aug 15',
      'Aug 22',
      'Aug 29',
      'Sep 5',
      'Sep 12'
    ],
    datasets: [
        {
            label: 'Completed',
            backgroundColor: 'rgba(62, 138, 251,0.2)',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            data: [28, 42, 20, 28, 30, 30, 30]
        },
      {
        label: 'Forecasted',
        backgroundColor: 'rgba(228, 103, 81,0.2)',
        pointBackgroundColor: 'rgba(255,99,132,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,99,132,1)',
        data: [15, 38, 18, 25, 27, 18, 22]
      },
      
    ]
  }