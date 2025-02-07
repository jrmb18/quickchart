const Chart = require('chart.js');
require('chartjs-chart-geo')(Chart);
require('chartjs-chart-box-and-violin-plot');
require('chartjs-plugin-annotation');
require('chartjs-plugin-datalabels');
require('chartjs-plugin-colorschemes');
require('chartjs-adapter-moment');
require('patternomaly');

Chart.plugins.register({
  id: 'choropleth',
  beforeInit: function(chart) {
    if (chart.config.type === 'choropleth') {
      chart.config.type = 'choropleth';
    }
  }
});

module.exports = Chart;
