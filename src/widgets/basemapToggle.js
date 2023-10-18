import BasemapToggle from '@arcgis/core/widgets/BasemapToggle';
import buildings from '../layers/buildings.js';
import view from '../view.js';

/**
 * Widget that enables switching between vector/satellite base maps.
 */
const basemapToggle = new BasemapToggle({
  view: view,
  nextBasemap: 'satellite',
});

basemapToggle.watch('activeBasemap', (basemap) => {
  buildings.labelsVisible = basemap.id === 'satellite';
});

export default basemapToggle;
