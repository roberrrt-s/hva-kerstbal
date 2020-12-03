import dayjs from 'dayjs';

import { config } from '../config';

export function time() {
	console.log(config.showTime.format('DD-MM-YYYY, HH:mm'))
	console.log(dayjs().isBefore(config.showTime));

	// Set the date we're counting down to
	const countDownDate = new Date(config.showTime).getTime();

	// Update the count down every 1 second
	const x = setInterval(function() {

		// Get today's date and time
		const now = new Date().getTime();

		// Find the distance between now and the count down date
		const distance = countDownDate - now;

		// Time calculations for days, hours, minutes and seconds
		const days = Math.floor(distance / (1000 * 60 * 60 * 24));
		const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Output the result in an element with id="demo"
		document.querySelector("#countdown").innerHTML = `${days} dagen ${hours} uur ${minutes} minuten ${seconds} seconden`;

		// If the count down is over, write some text
		if (distance < 0) {
			clearInterval(x);
			document.querySelector("#countdown").innerHTML = "";
		}
	}, 1000);

	return true;
}