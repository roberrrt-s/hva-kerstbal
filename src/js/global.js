import { popup } from './modules/popup';
import { snow } from './modules/snow';
import { audio } from './modules/audio';
import { explain } from './modules/explain';

if (module.hot) {
  module.hot.accept();
}

popup();
snow();
audio();
explain();