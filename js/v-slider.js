(function() {
  var $;

  $ = jQuery;

  $.fn.extend({
    vSlider: function(options) {
      var log, settings;
      settings = {
        debug: true,
        slide_timing: 0.4,
        loop_timing: 2,
        slide_effect: "cubic-bezier(1,.34,.83,.9)"
      };
      settings = $.extend(settings, options);
      log = function(msg) {
        if (settings.debug) {
          if (typeof console !== "undefined" && console !== null) {
            console.log(msg);
          }
        }
      };
      return this.each(function() {
        var $slide, $this, cloningIndex, i, i2, theLoop, theNumber, thePartialNumber, theSlides, transitionOff, transitionOn;
        $this = $(this);
        $slide = $(".slide", this);
        transitionOn = function() {
          $slide.css({
            "webkit-transition": "all " + settings.slide_timing + "s " + settings.slide_effect,
            "moz-transition": "all " + settings.slide_timing + "s " + settings.slide_effect,
            "ms-transition": "all " + settings.slide_timing + "s " + settings.slide_effect,
            "o-transition": "all " + settings.slide_timing + "s " + settings.slide_effect,
            "transition": "all " + settings.slide_timing + "s " + settings.slide_effect
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
        theSlides = $(".slide", $this).size();
        thePartialNumber = (theSlides / theNumber) - 1;
        log(thePartialNumber);
        $(".container").each(function(index) {
          index + $(this).addClass("container-" + index);
          $(".slide", this).each(function(index) {
            index + $(this).addClass("slide-" + index);
          });
        });
        cloningIndex = 0;
        while (cloningIndex < theNumber) {
          $(".container-" + cloningIndex + " .slide-0", $this).clone().insertAfter(".container-" + cloningIndex + " .slide-" + thePartialNumber, $this).attr("class", "slide slide-" + (thePartialNumber + 1));
          cloningIndex++;
        }
        i = 0;
        i2 = 0;
        return theLoop = setInterval(function() {
          var insideLoop;
          if (i < theNumber) {
            return insideLoop = setInterval(function() {
              if (i < theNumber) {
                transitionOn();
                $(".container-" + i + " .slide-" + i2).css("margin-top", -200);
                i++;
              } else {
                clearInterval(insideLoop);
              }
            }, (settings.loop_timing / theNumber) * 1000);
          } else if (i2 < thePartialNumber) {
            i2++;
            i = 0;
          } else if (i2 >= thePartialNumber) {
            transitionOff();
            i2 = 0;
            i = 0;
            $(".container .slide").css("margin-top", "");
          }
        }, settings.loop_timing * 1000);
      });
    }
  });

}).call(this);
