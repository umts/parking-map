import Expand from '@arcgis/core/widgets/Expand';
import Search from '@arcgis/core/widgets/Search';
import buildings from '../layers/buildings.js';
import sections from '../layers/sections.js';
import view from '../view.js';

/**
 * Widget that searches for buildings and lots.
 */
export default new Expand({
  view,
  expandIcon: 'search',
  expandTooltip: 'Search',
  content: new Search({
    view,
    allPlaceholder: 'Find building or lot',
    includeDefaultSources: false,
    locationEnabled: false,
    sources: [
      {
        layer: sections,
        name: 'Lots',
        placeholder: 'Find lot',
        searchFields: ['SectionCode', 'SectionColor', 'SectionName'],
        displayField: 'SectionName',
        outFields: ['*'],
      },
      {
        layer: buildings,
        name: 'Buildings',
        placeholder: 'Find building',
        searchFields: ['Building_Name'],
        displayField: 'Building_Name',
        outFields: ['*'],
      },
    ],
  }),
});
