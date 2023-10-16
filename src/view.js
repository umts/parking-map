import MapView from '@arcgis/core/views/MapView';
import map from './map.js';

/**
 * Manages the UI for the application.
 */
export default new MapView({
  container: 'view',
  map: map,
  center: [-72.5283, 42.3898],
  zoom: 15,
  constraints: {
    maxZoom: 20,
    minZoom: 14,
  },
  ui: {
    components: ['attribution'],
  },
});
