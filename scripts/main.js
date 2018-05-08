window.addEventListener('load', function() { "use strict";
	const
		coin = document.getElementById('coin'),
		resultPanel = document.getElementById('result'),
		resultLabel = document.getElementById('label'),
		resultStats = document.getElementById('stats'),
		result = ['Tail', 'Head'];
	
	var
		score = { tails : 0, heads : 0 },
		flipping = false,
		rand = 0;
	
	coin.addEventListener('click', function() {
		if(flipping === false) {
			rand += 180 * Math.floor((Math.random() * 10) + 3);
			flipping = true;
			coin.style.transform = `rotateY(${rand}deg)`;
			hideResult();
			
			console.log(rand, Math.floor(rand / 180));
			
			setTimeout(function() {
				
				if(((rand / 180) % 2 === 0))
					score.tails++;
				else
					score.heads++;
				
				resultLabel.textContent = result[+ ((rand / 180) % 2 !== 0)];
				resultStats.textContent = `T - ${score.tails} / H - ${score.heads}`;
				
				flipping = false;
				showResult();
			}, 2000);
		}
	});
											
	function showResult() {
		resultPanel.style.top = '0px';
		resultPanel.style.opacity = '1';
	}

	function hideResult() {
		resultPanel.style.opacity = '0';
		resultPanel.style.top = '-20px';
	}
});