var score = 0;
for (var i = 0; i < 1000; i++) {
	if (i % 3 === 0) {
    score += i;
    } else if ( i % 5 === 0) {
    	score += i;
    }
}

alert(score);
