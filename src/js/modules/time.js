import dayjs from 'dayjs';

import { config } from '../config';

export function time() {
	console.log(config.showTime.format('DD-MM-YYYY, HH:mm'))
	console.log(dayjs().isBefore(config.showTime));

	return true;
}