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
 * @property boolean generator
 * @property boolean solve
 * @property boolean solved
 *
 * @property int size
 * @property boolean manual
 * @property array minterms
 * @property boolean verbose
 * @endcond
 */
class KmapViewAux extends ViewAux {
	/**
	 * KmapViewAux constructor.
	 */
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
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
     * dontcare | array | Array of don't cares to use
     * dontcares | array | Same as dontcare
     * fixed | boolean | If set true, practice generate features are disabled (default=false)
     * genDontCareOption | boolean | Include don't cares in the generator options
     * generator | boolean | Include the generator? (default = true)
     * manual | boolean | Include the manual data entry section? (default=false)
     * minterms | array | Array of minterms to use
     * size | int | Size of the map 2, 3, or 4
     * solve | boolean | Is the solve button provided? (default=false)
     * solved | boolean | Present a solved map (default=false)
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

            case 'solved':
                $this->solved = $value;
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

			case 'map':
				$this->map = $value;
				break;

			case "fixed":
				$this->fixed = $value;
				break;

			case "verbose":
				$this->verbose = $value;
				break;

            case "dontcare":
            case "dontcares":
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
		$this->solved = false;
		$this->genDontCareOption = true;
		$this->generator = true;
		$this->fixed = false;
		$this->verbose = true;
		$this->resultSel = null;
		$this->expressionSel = null;
		$this->success = 'success';
		$this->options = [];

		$this->minterms = [];
		$this->dontcare = [];
		$this->genDontCare = false;
		$this->labels = null;
	}


	/**
	 * Present the Karnaugh map editor window in a div.
	 * @param string|null $class Optional class to add to the div
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
	}

	/**
	 * Present the kmap div in a view.
	 * @param Site $site The site object
	 * @param User $user The current user
	 * @param null $class Optional class to add to the practice section
	 * @return string HTML
	 */
	public function present_div(Site $site, User $user, $class=null) {
		$html = '';

		$data = $this->options;
		$data['size'] = $this->size;

		if($this->fixed) {
			$data['fixed'] = true;
		}

		if(!$this->map) {
			$data['map'] = false;
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

        if($this->solved) {
            $data['solved'] = true;
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

		if($this->labels !== null) {
			$data['labels'] = $this->labels;
		}

		if($class !== null && strlen($class) > 0) {
			$class = ' ' . $class;
		} else {
            $class = '';
        }

		$payload = base64_encode(htmlspecialchars(json_encode($data), ENT_NOQUOTES));
		$html .= '<div class="cl-kmap' . $class . '">' . $payload . '</div>';

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

	/**
	 * Add other Kmap config options.
	 * @param string $option Option name
	 * @param mixed $value Value to set
	 */
	public function option($option, $value) {
		$this->options[$option] = $value;
	}


	private $size;                  // Size: 2, 3, or 4
	private $manual;                // Manual data entry?
	private $solve;                 // Include Solve button?
    private $solved;                // Present a solved map?
	private $genDontCareOption;     // Generator has don't cares as an option?
	private $generator;             // Display the generator
	private $fixed;                 // Fixed minterm choice, no generator
	private $genDontCare = false;	// Generate don't cares in problems
	private $map = true;            // Include the actual map?
	private $options;               // Other options to set


	// A results selector. Selector that will be set to the success value
	// if the expression successfully checks
	private $resultSel;

	private $success;       // Value resultSel will be set to if check is successful ('fail' otherwise)
	private $expressionSel; // Selector that will be set to the expression each time check is pressed.

	private $verbose = true;		// Verbose response on mistakes
	private $minterms = [];	        // The minterms for the problem
	private $dontcare = []; 	    // Minterms we don't care about
	private $labels = null;			// Optional array of labels to use
}
