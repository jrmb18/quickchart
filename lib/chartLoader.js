const Chart = require('chart.js');
require('patternomaly');
require('chartjs-plugin-datalabels');
require('chartjs-plugin-colorschemes');
require('chartjs-adapter-moment');

// Initialize chartjs-chart-geo
const geo = require('chartjs-chart-geo');
geo(Chart);

// Initialize plugins
require('chartjs-plugin-annotation')(Chart);

Chart.defaults.global.defaultFontFamily = 'sans-serif';

module.exports = Chart;
