(function() {

    // Defining the angular module name and it's dependeny array
    var myapp = angular.module('myapp', ['highcharts-ng']);

    // Defining angular controller
    myapp.controller('myctrl', function($scope) {

        // Test data
        var myScore = 76;
        var targetScore = 82;

        // Test chart config
        $scope.chartConfig = {
            options: {
                chart: {
                    type: 'solidgauge'
                },
                title: null,
                pane: {
                    center: ['50%', '85%'],
                    size: '140%',
                    startAngle: -90,
                    endAngle: 90,
                    background: {
                        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                        innerRadius: '60%',
                        outerRadius: '100%',
                        shape: 'arc'
                    }
                },
                plotOptions: {
                    solidgauge: {
                        dataLabels: {
                            y: 5,
                            borderWidth: 0,
                            useHTML: true
                        }
                    }
                }
            },
            series: [{
                name: 'Speed',
                data: [myScore],
                dataLabels: {
                    format: '<div style="text-align:center"><span style="font-size:25px;color:' + ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>'
                },
            }],
            yAxis: {
                min: 0,
                max: 100,
                title: {
                    y: 140
                },
                stops: [
                    [0.0, '#E75635'], // red
                    [0.75, '#E75635'] // light red
                ],
                lineWidth: 0,
                minorTickInterval: null,
                tickPixelInterval: 400,
                tickWidth: 0,
                title: {
                    y: -70
                },
                labels: {
                    y: 16
                }
            },
            credits: {
                enabled: true
            }

        };

        // Bring life to the dials, by this function
        setInterval(function() {
            var chart = $('#chart1').highcharts(),
                point,
                newVal,
                inc;

            if (chart) {
                point = chart.series[0].points[0];
                inc = Math.round((Math.random() - 0.5) * 100);
                newVal = point.y + inc;


                if (point.y == myScore) {
                    newVal = targetScore;
                } else if (point.y == targetScore) {
                    newVal = myScore;
                }

                point.update(newVal);
            }

        }, 2000);

    });
})();