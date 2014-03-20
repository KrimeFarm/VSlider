(function() {
  var $;

  $ = jQuery;

  $.fn.extend({
    BumpingSlider: function(options) {
      var log, settings;
      settings = {
        debug: true,
        slide_timing: 0.5
      };
      settings = $.extend(settings, options);
      log = function(msg) {
        if (settings.debug) {
          return typeof console !== "undefined" && console !== null ? console.log(msg) : void 0;
        }
      };
      return this.each(function() {
        var $slide, $this, slideLenght, slideLenghtPartial, theNumber, transitionOff, transitionOn;
        $this = $(this);
        $slide = $(".slide", this);
        transitionOn = function() {
          $slide.css({
            "webkit-transition": "all " + settings.slide_timing + "s ease-out",
            "moz-transition": "all " + settings.slide_timing + "s ease-out",
            "ms-transition": "all " + settings.slide_timing + "s ease-out",
            "o-transition": "all " + settings.slide_timing + "s ease-out",
            "transition": "all " + settings.slide_timing + "s ease-out"
          });
        };
        transitionOff = function() {
          $slide.css({
            "webkit-transition": "none",
            "moz-transition": "none",
            "ms-transition": "none",
            "o-transition": "none",
            "transition": "none"
          });
        };
        theNumber = $(".container", $this).size();
        $(".container").each(function(index) {
          index + $(this).addClass("container-" + index);
          return $(".slide", this).each(function(index) {
            return index + $(this).addClass("slide-" + index);
          });
        });
        slideLenght = $(".slide").size();
        slideLenghtPartial = slideLenght / theNumber;
        return $(".container-0").each(function() {
          return $(".slide-0", this).clone().insertAfter(".slide-2");
        });
      });
    }
  });

}).call(this);
