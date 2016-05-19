let turnCounter = 0,  // Used For Determining Whose Turn It Is
		tileArray = [],   // Used for Position Checking
		turn = 'Circle\'s', // What Tile Is Currently Playing & Default State
 		currentTurn = document.querySelector('#turn').textContent = turn + ' Turn'; // Used for Displaying Whose Turn It Is


// Creates The Tiles & Initializes The Game
function init () {

	for (i = 0; i < 9; i++) {
		const div = document.createElement('div');
				  div.className = 'play-field';

		tileArray.push(div);

		const wrapper = document.querySelector('#game');
			  	wrapper.appendChild(div);

		div.addEventListener('click', assignSymbol);
	}
}


// Handles Symbol Assignment
function assignSymbol () {

	if (this.id != '') {
		return false;
	}

	turnCounter++;

	if (turnCounter % 2 === 0) {
		this.id = 'cross';
		turn = 'Circle\'s';
	} else {
		this.id = 'circle';
		turn = 'Cross\'s';
	}

	currentTurn.textContent = turn + ' Turn';

	checkPos();
}


// Checks Position of Tiles To Determine Win States
function checkPos () {

	// Cross Win States
		// Horizontal Win States
		if (tileArray[0].id == 'cross' && tileArray[1].id == 'cross' && tileArray[2].id == 'cross') {
			cross_win();
		} else if (tileArray[3].id == 'cross' && tileArray[4].id == 'cross' && tileArray[5].id == 'cross') {
			cross_win();
		} else if (tileArray[6].id == 'cross' && tileArray[7].id == 'cross' && tileArray[8].id == 'cross') {
			cross_win();

		// Tilted Win States
	} else if (tileArray[0].id == 'cross' && tileArray[4].id == 'cross' && tileArray[8].id == 'cross') {
			cross_win();
		} else if (tileArray[6].id == 'cross' && tileArray[4].id == 'cross' && tileArray[2].id == 'cross') {
			cross_win();


		// Vertical Win States
	} else if (tileArray[0].id == 'cross' && tileArray[3].id == 'cross' && tileArray[6].id == 'cross') {
			cross_win();
		} else if (tileArray[1].id == 'cross' && tileArray[4].id == 'cross' && tileArray[7].id == 'cross') {
			cross_win();
		} else if (tileArray[2].id == 'cross' && tileArray[5].id == 'cross' && tileArray[8].id == 'cross') {
			cross_win();
		}

	// Circle Win States
		// Horizontal Win States
		if (tileArray[0].id == 'circle' && tileArray[1].id == 'circle' && tileArray[2].id == 'circle') {
			circle_win();
		} else if (tileArray[3].id == 'circle' && tileArray[4].id == 'circle' && tileArray[5].id == 'circle') {
			circle_win();
		} else if (tileArray[6].id == 'circle' && tileArray[7].id == 'circle' && tileArray[8].id == 'circle') {
			circle_win();

		// Tilted Win States
	} else if (tileArray[0].id == 'circle' && tileArray[4].id == 'circle' && tileArray[8].id == 'circle') {
			circle_win();
		} else if (tileArray[6].id == 'circle' && tileArray[4].id == 'circle' && tileArray[2].id == 'circle') {
			circle_win();


		// Vertical Win States
	} else if (tileArray[0].id == 'circle' && tileArray[3].id == 'circle' && tileArray[6].id == 'circle') {
			circle_win();
		} else if (tileArray[1].id == 'circle' && tileArray[4].id == 'circle' && tileArray[7].id == 'circle') {
			circle_win();
		} else if (tileArray[2].id == 'circle' && tileArray[5].id == 'circle' && tileArray[8].id == 'circle') {
			circle_win();
		}

		// Tie
		if (turnCounter === 9) {
			alert('It\'s a Tie!');
			reset();
		}
}


function cross_win () {
	alert('Cross Wins!');

	reset();
}

function circle_win () {
	alert('Circle Wins!');

	reset();
}


function reset () {

	// Reset Variables
	currentTurn.textContent = 'Circle\'s Turn';
	turnCounter = 0;
	tileArray = [];

	// Clear Tile-Field
	const wrapper = document.getElementById('game');
	while (wrapper.firstChild) {
    wrapper.removeChild(wrapper.firstChild);
	}

	init();
}

// Button For Resetting The Game
const resetButton = document.querySelector('#reset-button');
		  resetButton.addEventListener('click', reset);

init();
