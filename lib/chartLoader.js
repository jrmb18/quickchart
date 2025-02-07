const Chart = require('chart.js');
require('chartjs-chart-geo')(Chart);
require('patternomaly');
require('chartjs-plugin-annotation');
require('chartjs-plugin-datalabels');
require('chartjs-plugin-colorschemes');

Chart.plugins.register({
  id: 'choropleth',
  beforeInit: function(chart) {
    if (chart.config.type === 'choropleth') {
      chart.config.type = 'choropleth';
    }
  }
});

module.exports = Chart;
