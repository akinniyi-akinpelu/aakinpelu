$(document).ready(function() {
	var key = {
		answers: ["Hayes", "D.C.", "US and Japan", "Apartheid", "England", "1960"]
	};

	var progress = $('#progress'),
		progressBar = $('#progress-bar'),
		notice = $('#notice'),
		barWidth = 790,
		answers = key.answers,
		inputAnswers = [],
		questionLength = answers.length,
		questions = $('.question');

	function roundScore(num, digits) {
		var score = Math.round(num * Math.pow(10, digits)) / Math.pow(10, digits);
		return score;
	}

	function scoreComment(score) {
		var comment;

		if (score > 80) {
			comment = "Well done!";
		} else if (score <= 80 && score >= 60) {
			comment = "Not bad...";
		} else {
			comment = "You did terrible.";
		}
		return comment;
	}

	function checkAnswer() {
		var resultsArray = [];
		var correct = false;

		for (var i = 0; i < answers.length; i++) {
			if (answers[i] == inputAnswers[i]) {
				correct = true;
			} else {
				correct = false;
			}
			resultsArray.push(correct);
		}
		return resultsArray;
	}

	$('.start').click(function() {
	    $(this).parents('.question-section').fadeOut(500, function() {
	        $(this).next().fadeIn(100, function() {
	        	progress.fadeIn(1000);
	        });
	    });
	    return false;
	});

	$('.choices .radio input').click(function() { 
		$(this).parents('.choices').children('.radio').removeClass("selected"); 
		$(this).parents('.radio').addClass('selected'); 
	});

	$('.next').click(function() {
	    var checked = $(this).parents('.question-section').find('input[type=radio]:checked');
	    
	    if (checked.length === 0) {
	        notice.fadeIn(300);
	        return false;
	    }

	    notice.hide();

	    $(this).parents('.question-section').fadeOut(500, function() {
	        $(this).next().fadeIn(500);
	    });

	    progressBar.animate({width: progressBar.width() + Math.round(barWidth / questionLength), }, 500);  
	    return false;
	});

	$('.back').click(function() {
        notice.hide();

	    $(this).parents('.question-section').fadeOut(500, function() {
	        $(this).prev().fadeIn(500);
	    });

	    progressBar.animate({width: progressBar.width() - Math.round(barWidth / questionLength), }, 500);
	    return false;
	});

	$('.finish').click(function() {
		progressBar.animate({width: progressBar.width() + Math.round(barWidth / questionLength), }, 500);

		var checked = $(this).parents('.question-section').find('input[type=radio]:checked');

		if (checked.length === 0) {
			notice.fadeIn(300);
			return false;
		}

		notice.remove();

		var checkedArray = $('input[type=radio]:checked');

		for (var i = 0; i < checkedArray.length; i++) {
			inputAnswers.push(checkedArray[i].getAttribute('data-key'));
		}

		var results = checkAnswer(),
			resultString = "",
			count = 0,
			answerKey = "<h3 class='answersHeader'>Answers:</h3>",
			score;

		for (var j = 0; j <= results.length - 1; j++) {
			if (results[j] === true) {
				count++;
			}

			resultString += '<div class="resultRow"> Question #' + (j + 1) + (results[j] === true ? "<div class='correct'><span>Correct</span></div>": "<div class='incorrect'><span>Incorrect</span></div>") + "</div>"; 
    		answerKey += "#" + (j + 1) + " - " + answers[j] + '</br>';
		}

		score = roundScore(count / questionLength * 100, 2);

		answerKey = "<div id='answer-key'>" + answerKey + "</div>"; 
		resultString = '<h2 class="resultsHeader">' + scoreComment(score) + ' You scored ' + score + '%</h2>' + resultString + answerKey; 
		$('#results').html(resultString).show(); 

		$(this).parents('.question-section').fadeOut(500, function(){ 
			$(this).next().fadeIn(500); 
		}); 
		return false;
	});
});