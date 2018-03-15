window.addEventListener('load', function() { "use strict";
	const
		coin = document.getElementById('coin'),
		resultPanel = document.getElementById('result'),
		resultLabel = document.getElementById('label'),
		resultStats = document.getElementById('stats'),
		result = ['Tail', 'Head'];
	
	var score = { tails : 0, heads : 0 }
	
	coin.addEventListener('click', function() {
		if(this.classList.contains('animate') === false) {
			this.classList.add('animate');
			resultPanel.style.opacity = '0';
			resultPanel.style.top = '-20px';
			
			setTimeout(function() {
				let rand = Math.floor(Math.random() * 2);
				
				if(rand == 0)
					score.tails++;
				else
					score.heads++;
				
				resultLabel.textContent = result[rand];
				resultStats.textContent = `T - ${score.tails} / H - ${score.heads}`;
				resultPanel.style.top = '0px';
				resultPanel.style.opacity = '1';
				coin.classList.remove('animate');
			}, 2000);
		}
	});
});