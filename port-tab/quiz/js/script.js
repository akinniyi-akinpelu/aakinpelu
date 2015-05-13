$(document).ready(function() {
	var key = {
		answers: ["Hayes", "D.C.", "US and Japan", "Apartheid", "1960"]
	};

	var progress = $('#progress'),
		progressBar = $('#progress-bar'),
		notice = $('#notice'),
		barWidth = 790,
		answers = key.answers,
		inputAnswers = [],
		questionLength = answers.length,
		questions = $('.question');

	function roundScore(num, dec) {
		var score = Math.round(num * Math.pow(10,dec)) / Math.pow(10,dec);
		return score;
	}

	function scoreComment(score) {
		var comment;

		if(score == 100) {
			comment = "Well done!";
		} else if (score < 80 && score > 60) {
			comment = "Not bad...";
		} else {
			comment = "You did terrible.";
		}
	}

	function checkAnswer() {
		var resultsArray = [];
		var correct = false;

		for (i = 0; i < answers.length; i++) {
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
	        $(this).next().fadeIn(500, function() {
	        	progress.fadeIn(500);
	        });
	    });
	    return false;
	});

	$('.choices li input').click(function() { 
		$(this).parents('.choices').children('li').removeClass("selected"); 
		$(this).parents('li').addClass('selected'); 
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
		var checked = $(this).parents('.question-section').find('input[type=radio]:checked');

		if (checked.length === 0) {
			notice.fadeIn(300);
			return false;
		}

		var checkedArray = $('input[type=radio]:checked');

		for (var i = 0; i <= checkedArray.length; i++) {
			inputAnswers.push(checkedArray[i].getAttribute('data-key'));
		}

		var results = checkAnswer(),
			resultString = "",
			count = 0,
			answerKey = "Answers: <br/>",
			score;

		for (var j = 0; j <= results.length; j++) {
			if (results[j] === true) {
				count++;
			}

			resultString += '<div class="resultRow"> Question #' + (j + 1) + (results[j] === true ? "<div class='correct'><span>Correct</span></div>": "<div class='incorrect'><span>Incorrect</span></div>") + "</div>"; 
    		answerKey += (j + 1) + " : " + answers[j] + ' &nbsp; &nbsp; &nbsp;';
		}

		score = roundScore(count / (questionLength * 100), 2);

		answerKey = "<div id='answer-key'>" + answerKey + "</div>"; 
		results = '<h2 class="qTitle">' + scoreComment(score) + ' You scored ' + score + '%</h2>' + resultString + answerKey; 
		$('#results').html(resultString).show(); 

		$(this).parents('.question-section').fadeOut(500, function(){ 
			$(this).next().fadeIn(500); 
		}); 
		return false;
	});
});