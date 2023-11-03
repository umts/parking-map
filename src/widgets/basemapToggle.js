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

// Labels (building names) are already part of the vector basemap, so only show them for the satellite basemap.
basemapToggle.watch('activeBasemap', (basemap) => {
  buildings.labelsVisible = basemap.id === 'satellite';
});

export default basemapToggle;
