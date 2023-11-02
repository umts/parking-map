import view from './view.js';
import basemapToggle from './widgets/basemapToggle.js';
import home from './widgets/home.js';
import locate from './widgets/locate.js';
import zoom from './widgets/zoom.js';

view.ui.add(zoom, 'top-left');
view.ui.add(home, 'top-left');
view.ui.add(locate, 'top-left');
view.ui.add(basemapToggle, 'bottom-right');
