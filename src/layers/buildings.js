import FeatureLayer from '@arcgis/core/layers/FeatureLayer';

/**
 * Campus buildings data layer.
 *
 *   - rendering is disabled due to buildings being a part of both base maps
 *   - labels are a part of the vector base map, so they are only shown on the satellite base map
 *
 * @see {basemapToggle} for label show/hide logic.
 */
export default new FeatureLayer({
  portalItem: {
    id: 'c048f4a9df6344b19281876740c44ba0',
  },
  title: 'Buildings',
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
  labelsVisible: false,
  labelingInfo: [{
    symbol: {
      type: 'text',
      color: 'white',
      haloColor: 'black',
      haloSize: 1,
      font: {
        size: 10,
      },
    },
    labelExpressionInfo: {
      expression: '$feature.Building_Name',
    },
    minScale: 9027,
  }],
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
