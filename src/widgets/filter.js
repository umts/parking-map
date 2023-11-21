import Expand from '@arcgis/core/widgets/Expand';
import LayerList from '@arcgis/core/widgets/LayerList';
import view from '../view.js';

/**
 * Widget that controls feature visibility.
 */
export default new Expand({
  view: view,
  expandIcon: 'layers',
  expandTooltip: 'Filter',
  content: new LayerList({
    view,
  }),
});
