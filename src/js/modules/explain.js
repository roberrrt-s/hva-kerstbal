export function explain() {
	const _body = document.querySelector('body');
	const _button = document.querySelector('#how button');
	const _close = document.querySelector('#explain button');

	_button.addEventListener('click', e => {
		_body.classList.add('explain-visible');
	})

	_close.addEventListener('click', e => {
		console.log('sluiten')
		_body.classList.remove('explain-visible');
	})

	document.addEventListener('keydown', e => {
		if(e.keyCode === 27) {
			_body.classList.remove('explain-visible');
		}
	})

}

	// const _audio = document.querySelector('#music audio');
	// const _button = document.querySelector('#music button');
	// const _span = document.querySelector('#music span:last-of-type');
	// const _body = document.querySelector('body');

	// let _playing = false;

	// _button.addEventListener('click', e => {
	// 	if(!_playing) {
	// 		_audio.volume = 0.5;
	// 		_audio.play();
	// 		_playing = true;
	// 		_span.textContent = 'uit'
	// 		_body.classList.add('audio-playing');
	// 	} else {
	// 		_audio.volume = 0.5;
	// 		_audio.pause();
	// 		_playing = false;
	// 		_span.textContent = 'aan'
	// 		_body.classList.remove('audio-playing');
	// 	}
	// })