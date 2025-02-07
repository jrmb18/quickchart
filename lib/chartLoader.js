const Chart = require('chart.js');
require('patternomaly');
require('chartjs-plugin-datalabels');
require('chartjs-plugin-colorschemes');
require('chartjs-adapter-moment');
require('chartjs-chart-geo')(Chart);
require('chartjs-plugin-annotation');

Chart.defaults.global.defaultFontFamily = 'sans-serif';

// Register plugins
Chart.plugins.register({
  id: 'choropleth',
  beforeInit: function(chart) {
    if (chart.config.type === 'choropleth') {
      chart.config.type = 'choropleth';
    }
  }
});
module.exports = Chart;
