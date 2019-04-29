import { tabs } from './scripts/tabs';
import './index.scss';

tabs(document.querySelector('#fitstTabs'), [
   {
      title: 'Section 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa expedita harum minima, odio alias atque possimus nostrum optio quae sed aut nobis totam esse consequatur magni doloribus deserunt facilis impedit?'
   },
   {
      title: 'Section 2',
      content: 'Culpa expedita harum minima, odio alias atque possimus nostrum optio quae sed aut nobis totam esse consequatur magni doloribus deserunt facilis impedit?'
   }
]);
tabs(document.querySelector('#secondTabs'), [
   {
      title: 'Section 1',
      content: 'Culpa expedita harum minima, odio alias atque possimus nostrum optio quae sed aut nobis totam esse consequatur magni doloribus deserunt facilis impedit?'
   },
   {
      title: 'Section 2',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa expedita harum minima, odio alias atque possimus nostrum '
   }
]);