import Map from '@arcgis/core/Map';
import buildings from './layers/buildings.js';

/**
 * Manages the data sources for the application.
 */
export default new Map({
  basemap: 'topo-vector',
  layers: [buildings],
});
