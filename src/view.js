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
    maxZoom: 22,
    minZoom: 14,
  },
  highlightOptions: {
    color: [0, 0, 0, 0.25],
    haloOpacity: 0.5,
  },
  ui: {
    components: ['attribution'],
  },
});
