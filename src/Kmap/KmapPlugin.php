<?php
/**
 * @file
 * Plugin that adds support for Karnaugh Maps to a course.
 */

/// Classes in the Kmap subsystem
namespace CL\Kmap;

use CL\Site\Site;
use CL\Site\System\Server;
use CL\Site\Router;

/**
 * Plugin that adds server-side support for Karnaugh Maps to a course.
 */
class KmapPlugin extends \CL\Site\Plugin {
	/**
	 * A tag that represents this plugin
	 * @return string A tag like 'course', 'users', etc.
	 */
	public function tag() {return 'kmap';}

	/**
	 * Return an array of tags indicating what plugins this one is dependent on.
	 * @return array of tags this plugin is dependent on
	 */
	public function depends() {return ['course'];}

	/**
	 * Amend existing object
	 * The Router is amended with routes for the login page
	 * and for the user API.
	 * @param $object Object to amend.
	 */
	public function amend($object) {

	}

}