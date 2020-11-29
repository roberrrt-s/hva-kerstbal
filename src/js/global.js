import { popup } from './modules/popup';
import { snow } from './modules/snow';
import { audio } from './modules/audio';

if (module.hot) {
  module.hot.accept();
}

popup();
snow();
audio();