const pattern = require('patternomaly');
const { CanvasRenderService } = require('chartjs-node-canvas');
const deepmerge = require('deepmerge');

const defaultFont = 'sans-serif';

const getConfig = (definition) => {
  const type = definition.type || 'line';
  const config = deepmerge(
    {
      type,
      data: definition.data || {},
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
    definition
  );

  // Set default fonts
  if (!config.options.defaultFontFamily) {
    config.options.defaultFontFamily = defaultFont;
  }
  if (!config.options.font) {
    config.options.font = { family: defaultFont };
  }

  return config;
};

const getRenderer = (width, height, backgroundColor) => {
  return new CanvasRenderService(width, height, (ChartJS) => {
    ChartJS.defaults.global.defaultFontFamily = defaultFont;
  }, () => {}, { backgroundColor });
};

const renderChartJs = async (width, height, backgroundColor, definition) => {
  const config = getConfig(definition);
  const renderer = getRenderer(width, height, backgroundColor);
  return renderer.renderToBuffer(config);
};

module.exports = {
  renderChartJs
};
