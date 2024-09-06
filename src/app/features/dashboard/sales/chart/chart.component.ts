import { Component, OnInit } from '@angular/core';
import { getChartLabelPlugin, PLUGIN_ID } from 'chart.js-plugin-labels-dv'; // Importa el nuevo plugin

@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.scss'] // Asegúrate de que sea styleUrls, no styleUrl
})
export class ChartComponent implements OnInit {
    data: any;
    options: any;
    plugin = [getChartLabelPlugin()]; // Usa el plugin de chart.js-plugin-labels-dv

    valueK = 50;


    data2: any;

    options2: any;

    ngOnInit() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');


        this.data2 = {
            labels: ['My First dataset', 'My Second dataset', 'My Third dataset', 'My Fourth dataset'],
            datasets: [
                {
                    data: [70, 60, 50, 40],
                    backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
                    hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
                }
            ]
        };

        this.options2 = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true,
                        color: textColor
                    }
                }
            }
        };

        this.data = {
            labels: ['September'],
            datasets: [
                {
                    label: 'My First dataset',
                    //backgroundColor: documentStyle.getPropertyValue('--red-500'),
                    //borderColor: documentStyle.getPropertyValue('--red-500'),
                    backgroundColor: 'rgba(0, 0, 0, 0)', // Transparente
                    borderColor: 'rgba(0, 0, 0, 0)', // Transparente
                    data: [70, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    //backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                    //borderColor: documentStyle.getPropertyValue('--blue-500'),
                    backgroundColor: 'rgba(0, 0, 0, 0)', // Transparente
                    borderColor: 'rgba(0, 0, 0, 0)', // Transparente
                    data: [60, 48, 40, 19, 86, 27, 90]
                },
                {
                    label: 'My Third dataset',
                    //backgroundColor: documentStyle.getPropertyValue('--green-500'),
                    //borderColor: documentStyle.getPropertyValue('--green-500'),
                    backgroundColor: 'rgba(0, 0, 0, 0)', // Transparente
                    borderColor: 'rgba(0, 0, 0, 0)', // Transparente
                    data: [50, 48, 40, 19, 86, 27, 90]
                },
                {
                    label: 'My fourth dataset',
                    //backgroundColor: documentStyle.getPropertyValue('--yellow-500'),
                    //borderColor: documentStyle.getPropertyValue('--yellow-500'),
                    backgroundColor: 'rgba(0, 0, 0, 0)', // Transparente
                    borderColor: 'rgba(0, 0, 0, 0)', // Transparente
                    data: [40, 48, 40, 19, 86, 27, 90],
                }
            ]
        };

        this.options = {
            
            indexAxis: 'y',
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                labels: {
                    render: 'image',
                    textMargin: 0,
                    images: [
                        { src: 'app/assets/images/red.svg', width: 30, height: 30 },
                        // { src: 'app/assets/images/blue.svg', width: 30, height: 30 },
                        // { src: 'app/assets/images/green.svg', width: 30, height: 30 },
                        // { src: 'app/assets/images/yellow.svg', width: 30, height: 30 }
                    ],
                    image: function(label:any) {
                        return this.images[0];
                    }
                }
            },
            scales: {
                x: {
                    hidden: true,
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            weight: 500
                        }
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };
    }
}
