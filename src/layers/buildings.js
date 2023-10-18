import FeatureLayer from '@arcgis/core/layers/FeatureLayer';

export default new FeatureLayer({
  portalItem: {
    id: 'c048f4a9df6344b19281876740c44ba0',
  },
  renderer: {
    type: 'simple',
    symbol: {
      type: 'simple-fill',
      color: [0, 0, 0, 0],
      outline: {
        width: 0,
      },
    },
  },
  popupTemplate: {
    title: '{Building_Name}',
    content: [{
      type: 'text',
      text: '{Address}',
    }, {
      type: 'media',
      mediaInfos: [{
        type: 'image',
        title: null,
        value: {
          sourceURL: '{PhotoURL}',
        },
      }],
    }],
  },
});
