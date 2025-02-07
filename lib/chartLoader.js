const Chart = require('chart.js');
const chartGeo = require('chartjs-chart-geo');

// Load required plugins
require('patternomaly');
require('chartjs-plugin-datalabels');
require('chartjs-plugin-colorschemes');
require('chartjs-adapter-moment');
require('chartjs-plugin-annotation');

// Initialize chartjs-chart-geo
chartGeo.initialize(Chart);

// Set defaults
Chart.defaults.global.defaultFontFamily = 'sans-serif';

module.exports = Chart;
