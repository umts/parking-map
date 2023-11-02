import BasemapToggle from '@arcgis/core/widgets/BasemapToggle';
import view from '../view.js';

/**
 * Widget that enables switching between vector/satellite base maps.
 */
export default new BasemapToggle({
  view: view,
  nextBasemap: 'satellite',
});
