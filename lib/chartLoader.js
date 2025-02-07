const Chart = require('chart.js');
require('chartjs-chart-geo')(Chart);

Chart.plugins.register({
  id: 'choropleth',
  beforeInit: function(chart) {
    chart.options.type = 'choropleth';
  }
});

module.exports = Chart;
