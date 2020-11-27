export function popup() {
	const _body = document.querySelector('body');

	_body.classList.add('popup-visible');

	setTimeout(e => {
		_body.classList.remove('popup-visible');
	}, 52000);

}