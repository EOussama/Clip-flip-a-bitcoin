window.addEventListener('load', function() { "use strict";
	const
		coin = document.getElementById('coin'),
		resultPanel = document.getElementById('result'),
		result = ['Tail', 'Head'];
	
	coin.addEventListener('click', function() {
		if(this.classList.contains('animate') === false) {
			this.classList.add('animate');
			resultPanel.style.opacity = '0';
			resultPanel.style.top = '-20px';
			
			setTimeout(function() {
				let rand = Math.floor(Math.random() * 2);
				
				resultPanel.textContent = result[rand];
				resultPanel.style.top = '0px';
				resultPanel.style.opacity = '1';
				coin.classList.remove('animate');
			}, 2000);
		}
	});
});