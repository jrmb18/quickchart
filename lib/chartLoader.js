const Chart = require('chart.js');

// Load plugins
require('patternomaly');
require('chartjs-plugin-datalabels');
require('chartjs-plugin-colorschemes');
require('chartjs-adapter-moment');
require('chartjs-plugin-annotation');

// Explicitly require and register chartjs-chart-geo
const { GeoController, ColorScale, ProjectionScale } = require('chartjs-chart-geo');
Chart.controllers.choropleth = GeoController;
Chart.scales.color = ColorScale;
Chart.scales.projection = ProjectionScale;

// Set defaults
Chart.defaults.global.defaultFontFamily = 'sans-serif';

module.exports = Chart;
