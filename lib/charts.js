const pattern = require('patternomaly');
const { CanvasRenderService } = require('chartjs-node-canvas');
const deepmerge = require('deepmerge');
const Chart = require('./chartLoader');

const defaultFont = 'sans-serif';

const getConfig = (definition) => {
  if (!definition) {
    throw new Error('Chart definition is required');
  }
  
  // Ensure definition is an object
  const chartDef = typeof definition === 'string' ? JSON.parse(definition) : definition;
  
  const type = chartDef.type || 'line';
  const config = deepmerge(
    {
      type,
      data: chartDef.data || {},
      options: {
        plugins: {
          colorschemes: {
            scheme: 'brewer.Paired12'
          }
        },
        animation: {
          duration: 0
        }
      }
    },
    chartDef
  );

  // Set default fonts
  if (!config.options.defaultFontFamily) {
    config.options.defaultFontFamily = defaultFont;
  }
  if (!config.options.font) {
    config.options.font = { family: defaultFont };
  }

  console.log('Chart config:', JSON.stringify(config, null, 2));
  return config;
};

const getRenderer = (width, height, backgroundColor) => {
  return new CanvasRenderService(width, height, (ChartJS) => {
    ChartJS.defaults.global.defaultFontFamily = defaultFont;
    ChartJS.plugins.register({
      id: 'choropleth',
      beforeInit: function(chart) {
        if (chart.config.type === 'choropleth') {
          chart.config.type = 'choropleth';
        }
      }
    });
  }, () => {}, { backgroundColor });
};

const renderChartJs = async (width, height, backgroundColor, definition) => {
  try {
    const config = getConfig(definition);
    const renderer = getRenderer(width, height, backgroundColor);
    return await renderer.renderToBuffer(config);
  } catch (error) {
    console.error('Error rendering chart:', error);
    throw error;
  }
};

module.exports = {
  renderChartJs
};
