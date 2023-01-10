(function () {
	var retargetUrl = window.location.href;
	if (window.parent && window.location !== window.parent.location) {
		retargetUrl = window.parent.document.referrer;
	}
	const ticker = window.setInterval(function() {
		if (!window.document.body) {
			return;
		}
		clearInterval(ticker);

		var pixel = document.createElement('img');
		pixel.setAttribute(
			'style',
			'position: absolute; width: 1px; height: 1px; left: 0px; bottom: 0px; opacity: 0;',
		)
		pixel.src = 'https://my.rtmark.net/img.gif?f=sync&partner=80218ebfb11a1f3d5ef49cc0313aad8d4d065b77fb9fbd4aa4ac424078e84524&ttl=&rurl=' + encodeURIComponent(retargetUrl);
		window.document.body.appendChild(pixel);
	}, 500);
})();
