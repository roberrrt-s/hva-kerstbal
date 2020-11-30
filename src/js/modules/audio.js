export function audio() {
	const _audio = document.querySelector('#music audio');
	const _button = document.querySelector('#music button');
	const _span = document.querySelector('#music span:last-of-type');
	const _body = document.querySelector('body');

	let _playing = false;

	_button.addEventListener('click', e => {
		if(!_playing) {
			_audio.volume = 0.5;
			_audio.play();
			_playing = true;
			_span.textContent = 'uit'
			_body.classList.add('audio-playing');
		} else {
			_audio.volume = 0.5;
			_audio.pause();
			_playing = false;
			_span.textContent = 'aan'
			_body.classList.remove('audio-playing');
		}
	})
}