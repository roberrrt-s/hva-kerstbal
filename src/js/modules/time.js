import dayjs from 'dayjs';

import { config } from '../config';

export function time() {
	const _body = document.querySelector('body');

	// Set the date we're counting down to
	const countDownDate = new Date(config.showTime).getTime();	
	const buttonDate = new Date(config.buttonTime).getTime();
	const now = new Date().getTime();

	let isButtonVisible = false;

	// console.log('nu', now)
	// console.log('cd', countDownDate);
	// console.log('bt', buttonDate)

	if(countDownDate > now) {
		_body.classList.add('popup-visible');

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

			if(buttonDate < 0 && isButtonVisible) {
				showButton();
			}

			// If the count down is over, write some text
			if (distance < 0) {
				clearInterval(x);
				document.querySelector("#countdown").innerHTML = "";
			}
		}, 1000);

	}

	if(buttonDate < now) {
		showButton();
	}

	function showButton() {
		const _popup = document.querySelector('#popup');
		const _h2 = document.querySelector('#popup h2');
		const _h3 = document.querySelector('#popup h3');
		const _p = document.querySelector('#popup p:last-of-type');

		_popup.classList.add('show-button');
		_h2.innerHTML = 'Welkom op <br /> het magische kerstbal!';
		_h3.parentNode.removeChild(_h3);
		_p.innerHTML = 'Klik om te beginnen op de onderstaande knop. <br /> Daarna zien we je graag hier terug en kan het feest beginnen.'


		isButtonVisible = true;
	}
}