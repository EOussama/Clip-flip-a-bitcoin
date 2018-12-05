/**
*
* @name:       Clip - flip a bitcoin
* @version:    0.1.0
* @author:     EOussama
* @license     MIT
* @source:     https://github.com/EOussama/Clip-flip-a-bitcoin
* 
* The main javascript file of the app.
*
*/

"use strict";

window.addEventListener('load', function() {
	const
		result = ['Tail', 'Head'],
		coins = document.querySelectorAll('div.coin-side'),
		coin = document.getElementById('coin'),
		resultPanel = document.getElementById('result'),
		resultLabel = document.getElementById('label'),
		resultStats = document.getElementById('stats');
	
	let
		score = { tails : 0, heads : 0 },
		flipping = false,
		rand = 0;
	
	coins.forEach(_coin => {
		_coin.addEventListener('click', function() {
			if(flipping === false) {
				rand += 180 * Math.floor((Math.random() * 10) + 3);
				flipping = true;
				coin.style.transform = `rotateY(${rand}deg)`;
				hideResult();
				
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
	});
	
	/**
	 * Show the results panel.
	 */
	function showResult() {
		resultPanel.classList.add('active');
	}

	/**
	 * Hide the results panel.
	 */
	function hideResult() {
		resultPanel.classList.remove('active');
	}
});