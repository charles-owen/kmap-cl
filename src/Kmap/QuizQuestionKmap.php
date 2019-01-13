<?php
/**
 * @file
 * Class that describes a question that is answered using
 * the Karnaugh Maps practice system.
 */

namespace CL\Kmap;

use \CL\Site\Site;
use \CL\Users\User;

/**
 * Class that describes a question that is answered using
 * the Karnaugh Maps practice system.
 */
class QuizQuestionKmap extends \CL\Quiz\QuizQuestion {

	/** Constructor */
	public function __construct() {
		parent::__construct();

		$this->kmap = new KmapViewAux();

		// This is the value that must be returned on a test success for this question.
		$this->success = mt_rand(1, mt_getrandmax());
	}

	/**
	 * Property get magic method
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 *
	 * @param string $property Property name
	 * @return mixed
	 */
	public function __get($property) {
		switch($property) {
			case 'kmap':
				return $this->kmap;

			case 'success':
				return $this->success;

			default:
				return parent::__get($property);
		}
	}


	/**
	 * Present the question to the user
	 * @param Site $site The Site object
	 * @param User $user The current User object
	 * @return string HTML for the quiz question
	 */
	public function present(Site $site, User $user) {
		$html = parent::present($site, $user);

		/*
		 * The question
		 */
		$html .= $this->text;

		$this->kmap->setResult('input[name="cl-kmap-answer"]', 'input[name="cl-kmap-expression"]', $this->success);
		$html .= $this->kmap->present_div($site, $user);

		$html .= <<<HTML
<p>Be sure you click Submit after checking your answer to receive credit for the quiz.</p>
HTML;


		//
		// Place for the test result and circuit data
		//
		$html .= <<<HTML
<input type="hidden" class="cl-answer-required" name="cl-kmap-answer">
<input type="hidden" name="cl-kmap-expression">
HTML;

		return $html;
	}


//    /*
//	 * Present the question to the user
//     * @param string $sessionName The name of the session variable for the QuizSession object
//     * @param $preview TRUE if staff preview mode
//     * @return string HTML for the quiz question
//	 */
//	public function present(\User $user, $sessionName, $preview=false) {
//		$html = parent::present($user, $sessionName, $preview);
//
//		$libroot = $this->quiz->get_assignment()->get_course()->get_libroot();
//
//		/*
//		 * The question
//		 */
//		$html .= $this->text;
//
//		$html .= $this->kmap->present_practice(null, $user);
//
//		/*
//		 * Either answer preview or answer submission form
//		 */
//		if($preview) {
//			$html .= "<hr />";
//
//			//$html .= $this->cirsim->present_tests();
//
//			// Comment preview
//			if($this->comment !== null) {
//				$html .= "<p>Comment:</p>";
//				$html .= $this->comment;
//			}
//		} else {
//			$html .= <<<END
//<form id="question" action="" method="post"><p>
//<input type="hidden" name="answer" id="answer">
//<input type="hidden" name="answer" id="expr">
//<input type="hidden" name="minterms" id="minterms">
//<input name="Submit" type="submit" value="submit" /> <span id="message" class="smallred">&nbsp;</span>
//END;
//
//			$html .= <<<END
//<br /></p></form><script>
//var present_post = function() {
//	$('#question').submit(function(event) {
//	    event.preventDefault();
//		var answer = $("#answer").val();
//		var minterms = $("#minterms").val();
//		var expr = $("#expr").val();
//		if(answer == "") {
//			$('#message').text("Must click the Check option before submitting");
//		} else {
//			var data = {session: '$sessionName', cmd: 'submit', answer: answer, minterms: minterms, expr: expr};
//			$.ajax({
//				type: "POST",
//				url: "$libroot/quiz/quiz-post.php",
//				data: data,
//				success: function(data) {
//				console.log(data);
//					$("#quiz").html(data);
//					present_post();
//				}
//			});
//		}
//		return false; // prevent default
//	});
//}
//END;
//			$html .= "</script>";
//		}
//
//		return $html;
//	}

	/**
	 * Handle quiz submission of a Kmap quiz
	 * @param Site $site The site object
	 * @param User $user The current user
	 * @param $post $_POST as sent to the API
	 * @return string HTML for the response to the user
	 */
	public function submit(Site $site, User $user, $post) {

		$answer = $post['cl-kmap-answer'];
		$expression = $post['cl-kmap-expression'];

		$html = $this->text;
		$good = +$answer === $this->success;

		$this->correct = $good ? $this->points : 0;
		$this->studentanswer = $expression;

		// Did they get it right?
		if($good) {
			$html .= "Your answer was correct!";
		} else {
			$html .= "Your answer was incorrect!";

			if($this->comment != null) {
				$html .= "<div class=\"centerbox primary\">$this->comment</div>";
			}
		}

		$this->rightanswer = "";
		return $html;
	}

    
//	/** Handle a submit of the question answer from the POST page
//	 * @returns HTML for the question */
//    public function submit($post) {
//    	$answer = trim(htmlentities($post['answer']));
//		$expr = $post['expr'];
//
//    	$html = $this->text;
//		$good = $answer === "success";
//
//		$this->correct = $good ? $this->get_points() : 0;
//        $this->studentanswer = $expr;
//
//    	// Did they get it right?
//        if($good) {
//        	$html .= "<hr><p>Your answer was correct!</p>";
//        } else {
//			$html .= "<hr><p>Your answer was incorrect!</p>";
//
//           	if($this->comment != null) {
//             	$html .= "<div class=\"centerbox primary\">$this->comment</div>";
//            }
//        }
//
//		$this->rightanswer = "";
//		return $html;
//    }

    public function get_kmap() {
		return $this->kmap;
	}

    private $kmap;
	private $success;
}
