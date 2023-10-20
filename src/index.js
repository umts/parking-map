import view from './view.js';
import basemapToggle from './widgets/basemapToggle.js';
import filter from './widgets/filter.js';
import home from './widgets/home.js';
import locate from './widgets/locate.js';
import search from './widgets/search.js';
import zoom from './widgets/zoom.js';

view.ui.add(search, 'top-left');
view.ui.add(zoom, 'top-left');
view.ui.add(home, 'top-left');
view.ui.add(locate, 'top-left');
view.ui.add(filter, 'top-left');
view.ui.add(basemapToggle, 'bottom-right');
