import { ApexOptions } from 'apexcharts';

export const TotalRevenueSeries = [
    {
        name: 'Profit',
        data: [141, 126, 115, 65, 143, 93, 96],
    },
    {
        name: 'Revenue',
        data: [154, 193, 168, 75, 188, 108, 149],
    },
];

export const TotalRevenueOptions: ApexOptions = {
    chart: {
        type: 'bar',
        toolbar: {
            show: false,
        },
    },
    colors: ['#00ff99', '#FFFFFF'],
    plotOptions: {
        bar: {
            borderRadius: 4,
            horizontal: false,
            columnWidth: '55%',
        },
    },
    dataLabels: {
        enabled: false,
    },
    grid: {
        show: false,
    },
    stroke: {
        colors: ['transparent'],
        width: 4,
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        labels: {
            style: {
              colors: '#FFFFFF' // set x-axis label color
            }
          },
    },
    yaxis: {
        title: {
            text: '₹ (thousands)',
            style: {
                color: '#FFFFFF' // set x-axis label color
              }
        },
        labels: {
            style: {
              colors: '#FFFFFF' // set x-axis label color
            }
          },
    },
    fill: {
        opacity: 1,
    },
    legend: {
        position: 'top',
        horizontalAlign: 'right',
        labels: {
            colors: '#FFFFFF'
          }
    },
    tooltip: {
        y: {
            formatter(val: number) {
                return `₹ ${val} thousands`;
            },
        },
    },
};