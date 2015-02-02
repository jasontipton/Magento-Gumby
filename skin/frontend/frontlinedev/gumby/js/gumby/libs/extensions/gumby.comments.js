/**
* Gumby Comments
*/
!function($) {

	'use strict';

	// data attributes
	var attrs = {
		'media' : 'gumby-comment-media',
		'supports' : 'gumby-comment-supports',
		'insert' : 'gumby-comment-insert'
	};

	// cache responsive comments nodes and data
	function prepNodes(nodes) {
		var i = 0, l = nodes.length, mqs = [], el, ins, obj;
		for(; i < l; i++) {
			el = nodes[i];
			// beforeend default insert type
			ins = el.getAttribute(attrs.insert) || 'beforeend';
			// store element, insert type, media query / support test
			obj = {
				'element' : el,
				'insert' : ins,
				'media' :  el.getAttribute(attrs.media) || false,
				'supports' :  el.getAttribute(attrs.supports) || false
			};

			mqs.push(obj);
		}
		return mqs;
	}

	// call required function (media/supports) on each array element
	function testNodes(type) {
		// if type present first argument is event object
		type = typeof type === 'string' ? type : false;
		this.forEach(function(x) {
			if((type === 'supports' || !type) && x.supports) {
				testSupportNodes.apply(x);
			} else if((type === 'media' || !type) && x.media) {
				testMediaNodes.apply(x);
			}
		});
	}

	// test media query nodes, requires matchMedia
	function testMediaNodes() {
		// matchMedia and media query itself required
		if(!this.media || !window.matchMedia) {
			return;
		}

		// media query passes and attribute not already set to complete
		if(window.matchMedia(this.media).matches &&
			this.element.getAttribute(attrs.media) !== 'complete') {
			childNodes.apply(this);
			return;
		}

		return;
	}

	// test media query nodes, requires matchMedia
	function testSupportNodes() {
		// Modernizr and tests required
		if(!this.supports || !Modernizr ||
			// test already been carried out
			this.element.getAttribute(attrs.support) === 'complete') {
			return;
		}

		if(featureDetection(this.supports.split(','))) {
			childNodes.apply(this);
			return;
		}

		return;
	}

	// handle Modernir feature detection
	// if multiple features hand off to multiFeatureDetection
	function featureDetection(features) {
		// multiple feature detections
		if(features.length > 1) {
			return multiFeatureDetection(features);
		}

		// single feature detection
		return Modernizr[features];
	}

	// handle multiple modernizr feature detections
	function multiFeatureDetection(features) {
		var passed = true;
		features.forEach(function(feature) {
			if(!Modernizr[feature]) {
				passed = false;
			}
		});
		return passed;
	}

	// loop round child nodes, find commented content
	function childNodes() {
		var l = this.element.childNodes.length,
			i = 0;

		for(; i < l; i++) {
			// node type 8 is comment
			if(this.element.childNodes[i].nodeType === 8) {
				insertComment.apply(this, [i]);
			}
		}
	}

	// insert commented content into DOM, mark as complete and trigger event
	function insertComment(index) {
		this.element.insertAdjacentHTML(this.insert, this.element.childNodes[index].textContent);
		this.element.setAttribute(attrs.media, 'complete');
		dispatchEvent.apply(this);
	}

	// dispatch CustomEvent if supported with media query and insert type detail
	function dispatchEvent() {
		$(this.element).trigger('gumby.onInsert');
	}

	// add initialisation
	Gumby.addInitalisation('comments', function() {
		// find and cache responsive comments nodes
		var els = prepNodes(
			document.querySelectorAll('['+attrs.media+'],['+attrs.supports+']')
		);

		// test media nodes only on resize
		window.addEventListener('resize', testNodes.bind(els, 'media'));
		// test media and support nodes on load
		window.addEventListener('load', testNodes.bind(els));
	});

	// register UI module
	Gumby.UIModule({
		module: 'comments',
		events: ['onInsert'],
		init: function() {
			Gumby.initialize('comments');
		}
	});
}(jQuery);
