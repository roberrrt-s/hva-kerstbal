import { popup } from './modules/popup';
import { snow } from './modules/snow';
import { audio } from './modules/audio';
import { explain } from './modules/explain';
import { time } from './modules/time';

if (module.hot) {
  module.hot.accept();
}

popup();
snow();
audio();
explain();
time();