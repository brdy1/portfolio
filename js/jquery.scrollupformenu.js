
;(function ( $, window, document, undefined ) {

	var pluginName = "scrollUpMenu";
	var defaults = {
			waitTime: 200,
			transitionTime: 150,
			menuCss: { 'position': 'fixed', 'top': '0'}
	};

	var lastScrollTop = 0;				
	var $header;
	var timer;
	var pixelsFromTheTop;

	// The actual plugin constructor
	function Plugin ( element, options ) {
		this.element = element;
		this.settings = $.extend( {}, defaults, options );
		this._defaults = defaults;
		this._name = pluginName;
		this.init();
	}

	Plugin.prototype = {
		init: function () {
			
			var self = this;
			$header = $(this.element);
			$header.css(self.settings.menuCss);
			pixelsFromTheTop = $header.height();
			
			$header.next().css({ 'margin-top': pixelsFromTheTop });
		
			$(window).bind('scroll',function () {
				clearTimeout(timer);
				timer = setTimeout(function() {
					self.refresh(self.settings) 
				}, self.settings.waitTime );
			});
		},
		refresh: function (settings) { 
			// Stopped scrolling, do stuff...				   			
			var scrollTop = $(window).scrollTop();

			if (scrollTop > lastScrollTop && scrollTop > pixelsFromTheTop){ // ensure that the header doesnt disappear too early
				// downscroll
				$header.slideUp(settings.transitionTime);
			} else {
				// upscroll
				$header.slideDown(settings.transitionTime);
			}
			lastScrollTop = scrollTop;
		}
	};

	$.fn[ pluginName ] = function ( options ) {
		return this.each(function() {
				if ( !$.data( this, "plugin_" + pluginName ) ) {
						$.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
				}
		});
	};

})( jQuery, window, document );