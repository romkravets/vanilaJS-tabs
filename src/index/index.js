import { tabs } from './scripts/tabs';
import './index.scss';

tabs(document.querySelector('#fitstTabs'), [
   {
      title: 'Section: 1',
      content: 'test-test 1'
   },
   {
      title: 'Section 2',
      content: 'test-test 2'
   }
]);
tabs(document.querySelector('#secondTabs'), [
   {
      title: 'Section: 1',
      content: 'test 1'
   },
   {
      title: 'Section 2',
      content: 'test 2'
   }
]);