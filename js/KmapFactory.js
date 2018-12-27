import Kmap from 'kmap';

export const KmapFactory = function() {
}

KmapFactory.create = function(site) {

	function install() {
		const elements = document.querySelectorAll('div.cl-kmap');
		for(let i=0; i<elements.length; i++) {
			let element = elements[i];
			const json = element.textContent;
			element.innerHTML = '';
			const kmap = new Kmap(element, json);
			kmap.startNow();
			element.style.display = 'block';
		}
	}

	site.start( () => {
		install();
	});

	site.messageListener((msg, data) => {
		if(msg === 'cl-quiz-after-installed') {
			install();
		}
	});
}