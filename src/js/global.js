import { snow } from './modules/snow';
import { audio } from './modules/audio';
import { explain } from './modules/explain';
import { time } from './modules/time';

if (module.hot) {
  module.hot.accept();
}

snow();
audio();
explain();
// time();