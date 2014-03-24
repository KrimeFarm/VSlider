(function() {
  var $;

  $ = jQuery;

  $.fn.extend({
    ResponsiveSlider: function(options) {
      var log, settings;
      settings = {
        debug: false,
        slide_timing: 1,
        slide_effect: "cubic-bezier(1,.34,.83,.9)"
      };
      settings = $.extend(settings, options);
      log = function(msg) {
        if (settings.debug) {
          return typeof console !== "undefined" && console !== null ? console.log(msg) : void 0;
        }
      };
      return this.each(function() {
        var $slide, $this, cloningIndex, i, i2, theLoop, theNumber, thePartialNumber, transitionOff, transitionOn;
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
        thePartialNumber = theNumber - 1;
        log(theNumber);
        $(".container").each(function(index) {
          index + $(this).addClass("container-" + index);
          return $(".slide", this).each(function(index) {
            return index + $(this).addClass("slide-" + index);
          });
        });
        cloningIndex = 0;
        while (cloningIndex < theNumber) {
          $(".container-" + cloningIndex + " .slide-0", $this).clone().insertAfter(".container-" + cloningIndex + " .slide-2", $this).attr("class", "slide slide-3");
          cloningIndex++;
        }
        i = 0;
        i2 = 0;
        return theLoop = setInterval(function() {
          var insideLoop;
          if (i < theNumber) {
            return insideLoop = setInterval(function() {
              if (i < theNumber) {
                log("insideLoop");
                transitionOn();
                $(".container-" + i + " .slide-" + i2).css("margin-top", -200);
                return i++;
              } else {
                return clearInterval(insideLoop);
              }
            }, 300);
          } else if (i2 < thePartialNumber) {
            i2++;
            log(i2);
            return i = 0;
          } else if (i2 >= thePartialNumber) {
            transitionOff();
            i2 = 0;
            i = 0;
            return $(".container .slide").css("margin-top", "");
          }
        }, 2000);
      });
    }
  });

}).call(this);
