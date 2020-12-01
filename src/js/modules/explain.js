export function explain() {
	const _body = document.querySelector('body');
	const _button = document.querySelector('#how button');
	const _close = document.querySelector('#explain button');
	const _popup = document.querySelector("#how");

	_button.addEventListener('click', e => {
		_body.classList.add('explain-visible');

		document.addEventListener('click', backdrop);

		function backdrop(e) {
			if(e.target.classList.contains('explain-visible')) {
				document.removeEventListener('click', backdrop);
				_body.classList.remove('explain-visible');
			}
		}
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