$(function() {
	$( "#slider" ).slider({ 
		// step: 24;
		max: 2013,
		min: 1990,
		value: 2013,
		slide: function( event, ui ) {
			// While sliding, update the value in the #amount div element
			$( "#year" ).html( ui.value );
			if (ui.value == 1990) {
				var val = 458 * 0.67;
				var val2 = 458 - val;
				$( ".decrease" ).animate({left:val2}, 100);
				$( ".increase" ).animate({width:'33%'}, 100);
				$( ".decrease h4" ).text("67%");
				$( ".increase h4" ).text("33%");
			}
			else if (ui.value == 1991) {
				var val = 458 * 0.79;
				var val2 = 458 - val;
				$( ".decrease" ).animate({left:val2}, 100);
				$( ".increase" ).animate({width:'21%'}, 100);
				$( ".decrease h4" ).text("79%");
				$( ".increase h4" ).text("21%");
			}
			else if (ui.value == 1992) {
				var val = 458 * 0.78;
				var val2 = 458 - val;
				$( ".decrease" ).animate({left:val2}, 100);
				$( ".increase" ).animate({width:'22%'}, 100);
				$( ".decrease h4" ).text("78%");
				$( ".increase h4" ).text("22%");
			}
			else if (ui.value == 1993) {
				var val = 458 * 0.66;
				var val2 = 458 - val;
				$( ".decrease" ).animate({left:val2}, 100);
				$( ".increase" ).animate({width:'34%'}, 100);
				$( ".decrease h4" ).text("66%");
				$( ".increase h4" ).text("34%");
			}
			else if (ui.value == 1994) {
				var val = 458 * 0.46;
				var val2 = 458 - val;
				$( ".decrease" ).animate({left:val2}, 100);
				$( ".increase" ).animate({width:'54%'}, 100);
				$( ".decrease h4" ).text("46%");
				$( ".increase h4" ).text("54%");
			}
			else if (ui.value == 1995) {
				var val = 458 * 0.42;
				var val2 = 458 - val;
				$( ".decrease" ).animate({left:val2}, 100);
				$( ".increase" ).animate({width:'58%'}, 100);
				$( ".decrease h4" ).text("42%");
				$( ".increase h4" ).text("58%");
			}
			else if (ui.value == 1996) {
				var val = 458 * 0.35;
				var val2 = 458 - val;
				$( ".decrease" ).animate({left:val2}, 100);
				$( ".increase" ).animate({width:'65%'}, 100);
				$( ".decrease h4" ).text("35%");
				$( ".increase h4" ).text("65%");
			}
			else if (ui.value == 1997) {
				var val = 458 * 0.32;
				var val2 = 458 - val;
				$( ".decrease" ).animate({left:val2}, 100);
				$( ".increase" ).animate({width:'68%'}, 100);
				$( ".decrease h4" ).text("32%");
				$( ".increase h4" ).text("68%");
			}
			else if (ui.value == 1998) {
				var val = 458 * 0.31;
				var val2 = 458 - val;
				$( ".decrease" ).animate({left:val2}, 100);
				$( ".increase" ).animate({width:'69%'}, 100);
				$( ".decrease h4" ).text("31%");
				$( ".increase h4" ).text("69%");
			}
			else if (ui.value == 1999) {
				var val = 458 * 0.25;
				var val2 = 458 - val;
				$( ".decrease" ).animate({left:val2}, 100);
				$( ".increase" ).animate({width:'75%'}, 100);
				$( ".decrease h4" ).text("25%");
				$( ".increase h4" ).text("75%");
			}
			else if (ui.value == 2000) {
				var val = 458 * 0.27;
				var val2 = 458 - val;
				$( ".decrease" ).animate({left:val2}, 100);
				$( ".increase" ).animate({width:'73%'}, 100);
				$( ".decrease h4" ).text("27%");
				$( ".increase h4" ).text("73%");
			}
			else if (ui.value == 2001) {
				var val = 458 * 0.44;
				var val2 = 458 - val;
				$( ".decrease" ).animate({left:val2}, 100);
				$( ".increase" ).animate({width:'56%'}, 100);
				$( ".decrease h4" ).text("44%");
				$( ".increase h4" ).text("56%");
			}
			else if (ui.value == 2002) {
				var val = 458 * 0.55;
				var val2 = 458 - val;
				$( ".decrease" ).animate({left:val2}, 100);
				$( ".increase" ).animate({width:'45%'}, 100);
				$( ".decrease h4" ).text("55%");
				$( ".increase h4" ).text("45%");
			}
			else if (ui.value == 2003) {
				var val = 458 * 0.81;
				var val2 = 458 - val;
				$( ".decrease" ).animate({left:val2}, 100);
				$( ".increase" ).animate({width:'19%'}, 100);
				$( ".decrease h4" ).text("81%");
				$( ".increase h4" ).text("19%");
			}
			else if (ui.value == 2004) {
				var val = 458 * 0.63;
				var val2 = 458 - val;
				$( ".decrease" ).animate({left:val2}, 100);
				$( ".increase" ).animate({width:'37%'}, 100);
				$( ".decrease h4" ).text("63%");
				$( ".increase h4" ).text("37%");
			}
			else if (ui.value == 2005) {
				var val = 458 * 0.37;
				var val2 = 458 - val;
				$( ".decrease" ).animate({left:val2}, 100);
				$( ".increase" ).animate({width:'63%'}, 100);
				$( ".decrease h4" ).text("37%");
				$( ".increase h4" ).text("63%");
			}
			else if (ui.value == 2006) {
				var val = 458 * 0.35;
				var val2 = 458 - val;
				$( ".decrease" ).animate({left:val2}, 100);
				$( ".increase" ).animate({width:'65%'}, 100);
				$( ".decrease h4" ).text("35%");
				$( ".increase h4" ).text("65%");
			}
			else if (ui.value == 2007) {
				var val = 458 * 0.30;
				var val2 = 458 - val;
				$( ".decrease" ).animate({left:val2}, 100);
				$( ".increase" ).animate({width:'70%'}, 100);
				$( ".decrease h4" ).text("30%");
				$( ".increase h4" ).text("70%");
			}
			else if (ui.value == 2008) {
				var val = 458 * 0.64;
				var val2 = 458 - val;
				$( ".decrease" ).animate({left:val2}, 100);
				$( ".increase" ).animate({width:'36%'}, 100);
				$( ".decrease h4" ).text("64%");
				$( ".increase h4" ).text("36%");
			}
			else if (ui.value == 2009) {
				var val = 458 * 0.88;
				var val2 = 458 - val;
				$( ".decrease" ).animate({left:val2}, 100);
				$( ".increase" ).animate({width:'12%'}, 100);
				$( ".decrease h4" ).text("88%");
				$( ".increase h4" ).text("12%");
			}
			else if (ui.value == 2010) {
				var val = 458 * 0.87;
				var val2 = 458 - val;
				$( ".decrease" ).animate({left:val2}, 100);
				$( ".increase" ).animate({width:'13%'}, 100);
				$( ".decrease h4" ).text("87%");
				$( ".increase h4" ).text("13%");
			}
			else if (ui.value == 2011) {
				var val = 458 * 0.57;
				var val2 = 458 - val;
				$( ".decrease" ).animate({left:val2}, 100);
				$( ".increase" ).animate({width:'43%'}, 100);
				$( ".decrease h4" ).text("57%");
				$( ".increase h4" ).text("43%");
			}
			else if (ui.value == 2012) {
				var val = 458 * 0.43;
				var val2 = 458 - val;
				$( ".decrease" ).animate({left:val2}, 100);
				$( ".increase" ).animate({width:'57%'}, 100);
				$( ".decrease h4" ).text("43%");
				$( ".increase h4" ).text("57%");
			}
			else if (ui.value == 2013) {
				var val = 458 * 0.28;
				var val2 = 458 - val;
				$( ".decrease" ).animate({left:val2}, 100);
				$( ".increase" ).animate({width:'72%'}, 100);
				$( ".decrease h4" ).text("28%");
				$( ".increase h4" ).text("72%");
			}
      	}
		// range: true,
	});

	var value = $( "#slider" ).slider( "value" );
    $( "#year" ).html( value );
  
});

$(function () {
    $('#container').highcharts({
    	chart: {
    		backgroundColor: "transparent"
    	},
        title: {
            text: 'Year-to-year change in general fund revenue and expenditures',
            style: {
            	fontFamily: "'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif",
            	fontSize: '26px',
            	fontWeight: 300
            }
        },
        xAxis: {
            categories: ['1986','1987','1988','1989','1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013'],
            labels:{
                step: 2 // this will show every second label
            }
        },
        yAxis: {
            title: {
                text: 'percentage'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }],
			plotBands: [{ // Light air
                from: -10,
                to: 0,
                color: 'rgba(246, 132, 113, 0.5)',
            }]
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'top',
            borderWidth: 1,
            y: 30
        },
        tooltip: {
            valueSuffix: '%'
        },
        credits: {
        	enabled: false
        },
        series: [{
            name: 'change in revenue',
            data: [4.2,0.3,3.6,0.6,-0.2,-0.5,-0.2,0.5,0.9,1.2,2.9,1.4,2.1,0.1,1,-0.6,0.2,-1,-1.6,1.6,1.9,-0.2,-1.2,-2.7,-4.5,-1.7,-0.9,0.1],
            color: '#59B5D3'
        }, {
            name: 'change in expenditure',
            data: [3.8,-0.1,2,-0.5,2,0.8,-0.7,-0.8,0.5,1.5,3.9,1.4,1.3,1.1,0.8,2,3.3,-1.5,-1,0,1.9,2.6,0.4,0.5,-5.1,-3.4,-0.2,1.5],
            color: '#D32A0E'
        }]
    });
});
    
$(function () {
    $('#container2').highcharts({
    	chart: {
    		backgroundColor: "transparent"
    	},
        title: {
            text: 'Sales tax',
            align: 'left',
            style: {
            	fontFamily: "'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif",
            	fontSize: '26px',
            	fontWeight: 300
            }
        },
        xAxis: {
            categories: ['1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013'],
            labels: {
            	step:4
            }
        },
        yAxis: {
            title: {
                text: 'percentage'
            },
            max: 7,
            min: -10,
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }],
			plotBands: [{ // Light air
                from: -10,
                to: 0,
                color: 'rgba(246, 132, 113, 0.5)',
            }]
        },
        tooltip: {
            valueSuffix: '%'
        },
        legend: {
        	enabled: false,
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'top',
            borderWidth: 1,
            y: 30
        },
        credits: {
        	enabled: false
        },
        series: [{
            name: 'sales tax',
            data: [3.6,3.4,6,2.4,2.8,-5.3,-3.4,-3.2,1,0.5,3,-0.3,2.3,-6.6,-8.4,1.6,6.2,1]
        }]
    });
});

$(function () {
    $('#container3').highcharts({
    	chart: {
    		backgroundColor: "transparent"
    	},
        title: {
            text: 'Income tax',
            align: 'left',
            style: {
            	fontFamily: "'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif",
            	fontSize: '26px',
            	fontWeight: 300
            }
        },
        xAxis: {
            categories: ['1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013'],
            labels: {
            	step:4
            }
        },
        yAxis: {
            title: {
                text: 'percentage'
            },
            max: 7,
            min: -10,
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }],
			plotBands: [{ // Light air
                from: -10,
                to: 0,
                color: 'rgba(246, 132, 113, 0.5)',
            }]
        },
        tooltip: {
            valueSuffix: '%'
        },
        legend: {
        	enabled: false,
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'top',
            borderWidth: 1,
            y: 30
        },
        credits: {
        	enabled: false
        },
        series: [{
            name: 'income tax',
            data: [-0.1,1.2,4.2,0.9,-0.1,-0.2,-5.1,-4.7,-2.3,-1.1,2.8,-2.5,2.2,1.3,-1,-2.5,4.4,2.3]
        }]
    });
});

$(function () {
    $('#container4').highcharts({
    	chart: {
    		backgroundColor: "transparent"
    	},
        title: {
            text: 'Property tax',
            align: 'left',
            style: {
            	fontFamily: "'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif",
            	fontSize: '26px',
            	fontWeight: 300
            }
        },
        xAxis: {
            categories: ['1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013'],
            labels: {
            	step:4
            }
        },
        yAxis: {
            title: {
                text: 'percentage'
            },
            max: 7,
            min: -10,
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }],
			plotBands: [{ // Light air
                from: -10,
                to: 0,
                color: 'rgba(246, 132, 113, 0.5)',
            }]
        },
        tooltip: {
            valueSuffix: '%'
        },
        legend: {
        	enabled: false,
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'top',
            borderWidth: 1,
            y: 30
        },
        credits: {
        	enabled: false
        },
        series: [{
            name: 'property tax',
            data: [1.3,2,1.5,1.4,1,2,4.4,0.6,3.3,2.2,4,6.3,6.2,4.2,-2,-3.9,0.4,-0.2]
        }]
    });
});

$(function () {

	$('#container5').highcharts({
    	chart: {
    		backgroundColor: "transparent",
	        polar: true,
	        type: 'line'
	    },
	    
	    title: {
	        text: 'Positive change in factors',
            style: {
            	fontFamily: "'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif",
            	fontSize: '26px',
            	fontWeight: 300
            }
	    },
	    
	    pane: {
	    	size: '95%'
	    },
	    
	    xAxis: {
	        categories: ['prices/inflation','infrastructure','public safety','human services','pensions','health benefits','wages','population','tax base','local economy','federal aid','state aid'],
	        tickmarkPlacement: 'on',
	        lineWidth: 0
	    },
	        
	    yAxis: {
	        gridLineInterpolation: 'polygon',
	        lineWidth: 0,
	        min: 0,
	        max:80
	    },
	    
	    tooltip: {
	    	shared: true,
	        pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}%</b><br/>'
	    },
	    
	    legend: {
	    	enabled: false,
	        align: 'right',
	        verticalAlign: 'top',
	        y: 70,
	        layout: 'vertical'
	    },
        credits: {
        	enabled: false
        },
	    series: [{
	    	type: 'area',
	        name: 'positive',
	        data: [4,5,5,3,8,7,5,25,47,65,15,14],
	        pointPlacement: 'on'
	    }]
	
	});
});

$(function () {

	$('#container6').highcharts({

    	chart: {
    		backgroundColor: "transparent",
	        polar: true,
	        type: 'line'
	    },
	    
	    title: {
	        text: 'Negative change in factors',
            style: {
            	fontFamily: "'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif",
            	fontSize: '26px',
            	fontWeight: 300
            }
	    },
	    
	    pane: {
	    	size: '95%'
	    },
	    
	    xAxis: {
	        categories: ['prices/inflation','infrastructure','public safety','human services','pensions','health benefits','wages','population','tax base','local economy','federal aid','state aid'],
	        tickmarkPlacement: 'on',
	        lineWidth: 0
	    },
	        
	    yAxis: {
	        gridLineInterpolation: 'polygon',
	        lineWidth: 0,
	        min: 0,
	        max: 80
	    },
	    
	    tooltip: {
	    	shared: true,
	        pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}%</b><br/>'
	    },
	    
	    legend: {
	    	enabled: false,
	        align: 'right',
	        verticalAlign: 'top',
	        y: 70,
	        layout: 'vertical'
	    },
		plotOptions: {
		    line: {
		        marker: {
		            enabled: false
		        }
		    }
		},
        credits: {
        	enabled: false
        },
	    series: [{
	    	type: 'area',
	        name: 'negative',
	        data: [75,72,63,37,25,80,73,20,29,17,47,48],
	        pointPlacement: 'off'
	    }]
	
	});
});


$(function () {

	$('#container13').highcharts({

    	chart: {
    		backgroundColor: "transparent",
	        polar: true,
	        type: 'line'
	    },
	    
	    title: {
	        text: 'Increased exenditure impact',
            style: {
            	fontFamily: "'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif",
            	fontSize: '26px',
            	fontWeight: 300
            }
	    },
	    
	    pane: {
	    	size: '95%'
	    },
	    
	    xAxis: {
	        categories: ['prices/cost','infrastructure','public safety','human services','pensions','health benefits','wages','population','tax base','local economy','federal aid','state aid'],
	        tickmarkPlacement: 'on',
	        lineWidth: 0
	    },
	        
	    yAxis: {
	        gridLineInterpolation: 'polygon',
	        lineWidth: 0,
	        min: 0,
	        max: 100
	    },
	    
	    tooltip: {
	    	shared: true,
	        pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}%</b><br/>'
	    },
	    
	    legend: {
	    	enabled: false,
	        align: 'right',
	        verticalAlign: 'top',
	        y: 70,
	        layout: 'vertical'
	    },
		plotOptions: {
		    line: {
		        marker: {
		            enabled: false
		        }
		    }
		},
        credits: {
        	enabled: false
        },
	    series: [{
	    	type: 'area',
	        name: 'increase',
	        data: [81,79,69,42,80,83,77,57,56,66,16,14],
	        pointPlacement: 'off'
	    }]
	
	});
});

$(function () {

	$('#container14').highcharts({
    	chart: {
    		backgroundColor: "transparent",
	        polar: true,
	        type: 'line'
	    },
	    
	    title: {
	        text: 'Decreased expenditure impact',
            style: {
            	fontFamily: "'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif",
            	fontSize: '26px',
            	fontWeight: 300
            }
	    },
	    
	    pane: {
	    	size: '95%'
	    },
	    
	    xAxis: {
	        categories: ['prices/cost','infrastructure','public safety','human services','pensions','health benefits','wages','population','tax base','local economy','federal aid','state aid'],
	        tickmarkPlacement: 'on',
	        lineWidth: 0
	    },
	        
	    yAxis: {
	        gridLineInterpolation: 'polygon',
	        lineWidth: 0,
	        min: 0,
	        max:100
	    },
	    
	    tooltip: {
	    	shared: true,
	        pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}%</b><br/>'
	    },
	    
	    legend: {
	    	enabled: false,
	        align: 'right',
	        verticalAlign: 'top',
	        y: 70,
	        layout: 'vertical'
	    },
        credits: {
        	enabled: false
        },
	    series: [{
	    	type: 'area',
	        name: 'decrease',
	        data: [1,2,1,0,7,4,2,3,25,7,49,48],
	        pointPlacement: 'on'
	    }]
	
	});
});

$(function () {
    $('#jihadist_pleas').highcharts({
    	chart: {
    		backgroundColor: "transparent",
          type: 'bar',
          renderTo: 'jihadist_pleas',
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false
        },
        title: {
            text: 'Revenue decreases',
            style: {
            	fontFamily: "'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif",
            	fontSize: '26px',
            	fontWeight: 300
            }
        },
        xAxis: {
            categories: ['fee levels','property tax rate','number of fees','level of impact fees','other tax rate','tax base','sales tax rate','number of other taxes','income tax rate'],
            title: {
                text: null
            },
            reversed: true,
            labels: {
            	enabled: false
            }
        },
        yAxis: {
            min: 0,
            max: 50,
            title: {
                text: 'percentage',
            },
            labels: {
                overflow: 'justify'
            },
            reversed: true
        },
        tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}<\/span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0"><b>{point.y}%<\/b><\/td><\/tr>',
          footerFormat: '<\/table>',
          shared: true,
          useHTML: true
        },
        plotOptions: {
            bar: {
                // dataLabels: {
                //     enabled: true
                // },
                align: "right"
            }
        },
        legend: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        series: [{
          name: 'decreased',
          data: [
          ['fee levels', 3],        
          ['property tax rate', 6],        
          ['number of fees', 1],        
          ['level of impact fees', 5],        
          ['other tax rate', 2],
          ['tax base', 3],
          ['sales tax rate', 0],
          ['number of other taxes', 1],
          ['income tax rate', 0],
          ]
        }]
    });
 });
                  
$(function () {
    $('#nonjihadist_pleas').highcharts({
    	chart: {
    		backgroundColor: "transparent",
          type: 'bar',
          renderTo: 'jihadist_pleas',
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false
        },
        title: {
            text: 'Revenue increases',
            style: {
            	fontFamily: "'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif",
            	fontSize: '26px',
            	fontWeight: 300
            }
        },
        xAxis: {
            categories: ['fee levels','property tax rate','number of fees','level of impact fees','other tax rate','tax base','sales tax rate','number of other taxes','income tax rate'],
            title: {
                text: null
            },
            opposite: true,
            labels: {
            	enabled: false
            }
        },
        yAxis: {
            min: 0,
            max: 50,
            title: {
                text: 'percentage',
            },
            labels: {
                overflow: 'justify'
            },
        },
        tooltip: {
            valueSuffix: '%'
        },
        plotOptions: {
            bar: {
                // dataLabels: {
                //     enabled: true
                // },
              align: "left"
            }
        },
        legend: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        series: [{
          name: 'increased',
          color: '#D32A0E',
          data: [
          ['fee levels', 39],        
          ['property tax rate', 19],        
          ['number of fees', 22],        
          ['level of impact fees', 19],        
          ['other tax rate', 7],
          ['tax base', 3],
          ['sales tax rate', 6],
          ['number of other taxes', 3],
          ['income tax rate', 1],
          ]
        }]
    });
});

$(function () {
    $('#container7').highcharts({
    	chart: {
    		backgroundColor: "transparent",
          type: 'bar',
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false
        },
        title: {
            text: 'Expenditure decreases',
            style: {
            	fontFamily: "'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif",
            	fontSize: '26px',
            	fontWeight: 300
            }
        },
        xAxis: {
            categories: ['public safety','captal/infrastructure','workforce','human services','contracting','other city services','interlocal','education'],
            title: {
                text: null
            },
            reversed: true,
            labels: {
            	enabled: false
            }
        },
        yAxis: {
            min: 0,
            max: 75,
            title: {
                text: 'percentage',
            },
            labels: {
                overflow: 'justify'
            },
            reversed: true
        },
        tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}<\/span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0"><b>{point.y}%<\/b><\/td><\/tr>',
          footerFormat: '<\/table>',
          shared: true,
          useHTML: true
        },
        plotOptions: {
            bar: {
                // dataLabels: {
                //     enabled: true
                // },
                align: "right"
            }
        },
        legend: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        series: [{
          name: 'decreased',
          color: '#D32A0E',
          data: [
          ['public safety', 4],        
          ['capital/infrastructure', 19],        
          ['workforce', 32],        
          ['human services', 9],        
          ['contracting', 4],
          ['other city services', 12],
          ['interlocal', 2],
          ['education', 8],
          ]
        }]
    });
 });
                  
$(function () {
    $('#container8').highcharts({
    	chart: {
    		backgroundColor: "transparent",
          type: 'bar',
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false
        },
        title: {
            text: 'Expenditure increases',
            style: {
            	fontFamily: "'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif",
            	fontSize: '26px',
            	fontWeight: 300
            }
        },
        xAxis: {
            categories: ['public safety','captal/infrastructure','workforce','human services','contracting','other city services','interlocal','education'],
            title: {
                text: null
            },
            opposite: true,
            labels: {
            	enabled: false
            }
        },
        yAxis: {
            min: 0,
            max: 75,
            title: {
                text: 'percentage',
            },
            labels: {
                overflow: 'justify'
            },
        },
        tooltip: {
            valueSuffix: '%'
        },
        plotOptions: {
            bar: {
                // dataLabels: {
                //     enabled: true
                // },
              align: "left"
            }
        },
        legend: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        series: [{
          name: 'increased',
          data: [
          ['public safety', 62],        
          ['capital/infrastructure', 37],        
          ['workforce', 20],        
          ['human services', 31],        
          ['contracting', 21],
          ['other city services', 27],
          ['interlocal', 21],
          ['education', 11],
          ]
        }]
    });
});

$(function () {
    $('#container9').highcharts({
    	chart: {
    		backgroundColor: "transparent",
            type: 'column'
        },
        title: {
            text: '2010',
            style: {
            	fontFamily: "'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif",
            	fontSize: '26px',
            	fontWeight: 300
            }
        },
        xAxis: {
            categories: ['hiring freeze','wage reduction','layoffs','early retirement','furloughs','reduce health care','revise union contracts','reduce pension']
        },
        yAxis: {
            min: 0,
            max: 100,
            title: {
                text: 'percentage'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y}%</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        legend: {
        	enabled: false
        },
        credits: {
            enabled: false
        },
        series: [{
            name: '2010',
            data: [74,54,54,35,23,17,15,7]

        }]
    });
});

$(function () {
    $('#container10').highcharts({
    	chart: {
    		backgroundColor: "transparent",
            type: 'column'
        },
        title: {
            text: '2011',
            style: {
            	fontFamily: "'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif",
            	fontSize: '26px',
            	fontWeight: 300
            }
        },
        xAxis: {
            categories: ['hiring freeze','wage reduction','layoffs','early retirement','furloughs','reduce health care','revise union contracts','reduce pension']
        },
        yAxis: {
            min: 0,
            max: 100,
            title: {
                text: 'percentage'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y}%</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        legend: {
        	enabled: false
        },
        credits: {
            enabled: false
        },
        series: [{
            name: '2010',
            data: [60,50,50,31,25,30,18,18]

        }]
    });
});

$(function () {
    $('#container11').highcharts({
    	chart: {
    		backgroundColor: "transparent",
            type: 'column'
        },
        title: {
            text: '2012',
            style: {
            	fontFamily: "'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif",
            	fontSize: '26px',
            	fontWeight: 300
            }
        },
        xAxis: {
            categories: ['hiring freeze','wage reduction','layoffs','early retirement','furloughs','reduce health care','revise union contracts','reduce pension']
        },
        yAxis: {
            min: 0,
            max: 100,
            title: {
                text: 'percentage'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y}%</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        legend: {
        	enabled: false
        },
        credits: {
            enabled: false
        },
        series: [{
            name: '2011',
            data: [45,32,32,18,14,27,1,15]

        }]
    });
});

$(function () {
    $('#container12').highcharts({
    	chart: {
    		backgroundColor: "transparent",
            type: 'column'
        },
        title: {
            text: '2013',
            style: {
            	fontFamily: "'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif",
            	fontSize: '26px',
            	fontWeight: 300
            }
        },
        xAxis: {
            categories: ['hiring freeze','wage reduction','layoffs','early retirement','furloughs','reduce health care','revise union contracts','reduce pension']
        },
        yAxis: {
            min: 0,
            max: 100,
            title: {
                text: 'percentage'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y}%</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        legend: {
        	enabled: false
        },
        credits: {
            enabled: false
        },
        series: [{
            name: '2013',
            data: [38,15,15,17,10,24,17,22]

        }]
    });
});