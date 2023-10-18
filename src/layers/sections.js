import FeatureLayer from '@arcgis/core/layers/FeatureLayer';

export default new FeatureLayer({
  portalItem: {
    id: '7f8f103d89b544b9b13b1fd7ffcd4338',
  },
  layerId: 1,
  definitionExpression: `SectionPublicVisible = 'Yes'`,
  renderer: {
    type: 'unique-value',
    field: 'SectionColor',
    defaultSymbol: {type: 'simple-fill'},
    uniqueValueInfos: [{
      value: 'Blue',
      symbol: {type: 'simple-fill', color: [0, 0, 192, 0.5], outline: {color: '#0000bf'}},
    }, {
      value: 'Green',
      symbol: {type: 'simple-fill', color: [0, 128, 0, 0.5], outline: {color: '#008000'}},
    }, {
      value: 'Pink',
      symbol: {type: 'simple-fill', color: [255, 0, 255, 0.5], outline: {color: '#ff00ff'}},
    }, {
      value: 'Purple',
      symbol: {type: 'simple-fill', color: [128, 0, 128, 0.5], outline: {color: '#800080'}},
    }, {
      value: 'Red',
      symbol: {type: 'simple-fill', color: [192, 0, 0, 0.5], outline: {color: '#bf0000'}},
    }, {
      value: 'Yellow',
      symbol: {type: 'simple-fill', color: [192, 192, 0, 0.5], outline: {color: '#bfbf00'}},
    }],
  },
  labelingInfo: [{
    symbol: {
      type: 'text',
      color: 'white',
      haloColor: 'black',
      haloSize: 1.25,
      font: {
        size: 16,
      },
    },
    labelExpressionInfo: {
      expression: '$feature.SectionCode',
    },
    minScale: 36111,
  }],
});
