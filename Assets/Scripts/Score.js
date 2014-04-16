#pragma strict

static var playerScore : int = 0;

static function score() {
	playerScore += 1;
}

static function resetScore() {
	playerScore = 0;
}

static function getScore() {
	return playerScore;
}
