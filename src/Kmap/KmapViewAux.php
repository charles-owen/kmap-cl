<?php
/**
 * @file
 * Auxiliary view to support Karnaugh Maps
 */

namespace CL\Kmap;

use CL\Site\Site;
use CL\Site\ViewAux;
use CL\Site\View;
use CL\Users\User;
use CL\Course\Member;


/**
 * Auxiliary view to support Karnaugh Maps
 *
 * @cond
 * @property boolean fixed
 * @property int size
 * @property boolean manual
 * @property array minterms
 * @property boolean solve
 * @property boolean verbose
 * @endcond
 */
class KmapViewAux extends ViewAux {

	public function __construct() {
		$this->reset();
	}

	/**
	 * Called when this auxiliary view is installed in a view
	 * @param View $view View we are installing into
	 */
	public function install(View $view) {
		parent::install($view);

		$view->addJS('kmap');
	}

	/**
	 * Property set magic method
	 *
	 * size -
	 * minterms - The minterms to set on the map
	 * dontcare = Minterms that are don't cares
	 * fixed - A single set of minterms is chosen and the
	 *         the generator features are disabled. (default=false)
	 * verbose - Give verbose response on mistakes (default=true)
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 * fixed | boolean | If set true, practice generate features are disabled (default=false)
	 * genDontCareOption | boolean | Include don't cares in the generator options
	 * generator | boolean | Include the generator? (default = true)
	 * manual | boolean | Include the manual data entry section? (default=false)
	 * size | int | Size of the map 2, 3, or 4
	 * solve | boolean | Is the solve button provided? (default=false)
	 * verbose | boolean | Verbose answers on mistakes (default=true)
	 *
	 * @param string $property Property name
	 * @param mixed $value Value to set
	 */
	public function __set($property, $value) {
		switch($property) {
			case "size":
				$this->size = $value;
				break;

			case 'manual':
				$this->manual = $value;
				break;

			case 'solve':
				$this->solve = $value;
				break;

			case 'genDontCareOption':
				$this->genDontCareOption = $value;
				break;

			case 'generator':
				$this->generator = $value;
				break;

			case "minterms":
				$this->minterms = $value;
				break;

			case "fixed":
				$this->fixed = $value;
				break;

			case "verbose":
				$this->verbose = $value;
				break;

			case "dontcare":
				$this->dontcare = $value;
				break;

			case 'genDontCare':
				$this->genDontCare = $value;
				break;

			case 'labels':
				$this->labels = $value;
				break;

			default:
				parent::__set($property, $value);
				break;
		}
	}

	/**
	 * Reset the object.
	 * All default values are set here.
	 */
	public function reset() {
		$this->size = 4;
		$this->manual = false;
		$this->solve = false;
		$this->genDontCareOption = true;
		$this->generator = true;
		$this->fixed = false;
		$this->verbose = true;
		$this->resultSel = null;
		$this->expressionSel = null;
		$this->success = 'success';

		$this->minterms = [];
		$this->dontcare = [];
		$this->genDontCare = false;
		$this->labels = null;
	}


	/**
	 * Present the Karnaugh map editor window in a div.
	 * @return string HTML
	 */
	public function present($class=null) {
		$user =$this->view->user;
		$site = $this->view->site;

		return $this->present_div($site, $user, $class);
	}

	/**
	 * Create a practice page for minimization practice.
	 * @param null $class Optional class to add to the practice section
	 * @return string HTML
	 */
	public function present_practice($class=null) {
		$html = '';

		$user = $this->view->user;
		$site = $this->view->site;

		$html .= $this->present_div($site, $user, $class);

		return $html;

//		$this->new_id();
//
//		if ($user === null) {
//			$user = $this->view->get_user();
//		}
//
//		$course = $user->get_course();
//
//		$class = $class !== null ? ' ' . $class : '';
//		$html = '<div id="' . $this->id . '" class="kmap-practice' . $class . '"></div>';
//
//		$html .= '<script>$(document).ready(function()' . '{';
//
//		$root = $course->get_root() . '/cirsim';
//
//		$other = "kmap.config.size=$this->size;" .
//			'kmap.config.verbose=' . ($this->verbose ? "true" : "false") . ';';
//
//		if ($this->fixed) {
//			$other .= 'kmap.config.fixed=true;';
//		}
//
//		if (count($this->minterms) > 0) {
//			$minterms = implode(",", $this->minterms);
//			$other .= "kmap.config.minterms=[$minterms];";
//		}
//
//		if ($this->genDontCare) {
//			$other .= "kmap.config.gendontcare=true;";
//		}
//
//		if($this->labels !== null) {
//			$labels = '';
//			foreach($this->labels as $label) {
//				if(strlen($labels) > 0) {
//					$labels .= ",";
//				}
//				$labels .= '"' . $label . '"';
//			}
//			$other .= "kmap.config.labels=[$labels];";
//		}
//
//		$other .= $this->js;
//
//		$html .= <<<JS
//var kmap = new Kmap.Practice("$root", "#$this->id");$other
//JS;
//
//		$html .= 'kmap.run();});</script>';
//		return $html;
	}

	/**
	 * Present the kmap div in a view.
	 * @return string
	 */
	public function present_div(Site $site, User $user, $class=null) {
		$html = '';

		$data = [
			'size'=>$this->size
		];

		if($this->fixed) {
			$data['fixed'] = true;
		}

		if(!$this->generator) {
			$data['generator'] = false;
		}

		if($this->manual) {
			$data['manual'] = true;
		}

		if($this->solve) {
			$data['solve'] = true;
		}

		if(!$this->verbose) {
			$data['verbose'] = false;
		}

		if(!$this->genDontCareOption) {
			$data['genDontCareOption'] = false;
		}

		if($this->genDontCare) {
			$data['genDontCare'] = true;
		}

		if($this->resultSel !== null) {
			$data['resultSel'] = $this->resultSel;
			$data['expressionSel'] = $this->expressionSel;
			$data['success'] = $this->success;
		}

		if(count($this->minterms) > 0) {
			$data['minterms'] = $this->minterms;
		}

		if(count($this->dontcare) > 0) {
			$data['dontcare'] = $this->dontcare;
		}

		if(strlen($class) > 0) {
			$class = ' ' . $class;
		}

		$payload = base64_encode(htmlspecialchars(json_encode($data), ENT_NOQUOTES));
		$html .= '<div class="cl-kmap' . $class . '">' . $payload . '</div>';

		return $html;
	}

	public function present_script(\Course $course, \User $user, $demo=false, $json=null) {
		$html = '<script>$(document).ready(function()' . '{';

		$root = $course->get_root() . '/cirsim';

		$id = $user->get_id();
		$staff = $user->at_least(\User::GRADER) ? "1" : "0";

		$minterms = implode(",", $this->minterms);

		$html .= <<<JS
var kmap = new Kmap.Main("$root", "#$this->id"); kmap.config.size=$this->size;
kmap.config.minterms=[$minterms];
JS;

		if(count($this->dontcare) > 0) {
			$dontcare = implode(",", $this->dontcare);
			$html .= "kmap.config.dontcare=[$dontcare];";
		}

		if($this->genDontCare) {
			$html .= "kmap.config.gendontcare=true";
		}

		if($this->labels !== null) {
			$labels = '';
			foreach($this->labels as $label) {
				if(strlen($labels) > 0) {
					$labels .= ",";
				}
				$labels .= '"' . $label . '"';
			}
			$html .= "kmap.config.labels=[$labels];";
		}

		$html .= $this->js;

		$html .= 'kmap.run();});</script>';
		return $html;
	}

	/**
	 * Set selectors that will be set when Check is pressed.
	 *
	 * This is used to support the online quiz system. Check sets a selector
	 * with the results so the quiz can then record the results. This avoids
	 * having to directly interact with the quiz system.
	 * @param string $resultSel Selector that is set to the value of $success if check succeeds or 'fail' if not
	 * @param string $expressionSel Selector that is set to the expression when check is pressed.
	 * @param string $success Value to set $resultSel to on success
	 */
	public function setResult($resultSel, $expressionSel, $success) {
		$this->resultSel = $resultSel;
		$this->expressionSel = $expressionSel;
		$this->success = $success;
	}


	private $size;                  // Size: 2, 3, or 4
	private $manual;                // Manual data entry?
	private $solve;                 // Include Solve button?
	private $genDontCareOption;     // Generator has don't cares as an option?
	private $generator;             // Display the generator
	private $fixed;                 // Fixed minterm choice, no generator
	private $genDontCare = false;	// Generate don't cares in problems

	// A results selector. Selector that will be set to the success value
	// if the expression successfully checks
	private $resultSel;

	private $success;       // Value resultSel will be set to if check is successful ('fail' otherwise)
	private $expressionSel; // Selector that will be set to the expression each time check is pressed.

	private $verbose = true;		///< Verbose response on mistakes
	private $minterms = array();	///< The minterms for the problem
	private $dontcare = array(); 	///< Minterms we don't care about
	private $labels = null;			///< Optional array of labels to use

}