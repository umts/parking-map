import Locate from '@arcgis/core/widgets/Locate';
import view from '../view.js';

/**
 * Widget that uses GPS services to show a user's current location.
 */
export default new Locate({view});
