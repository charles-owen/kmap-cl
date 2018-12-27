import './kmap.scss';
import Kmap from 'kmap';

export {Kmap};
export default Kmap;

import {KmapFactory} from './js/KmapFactory';

KmapFactory.create(Site.Site);
