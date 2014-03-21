(function() {
  var $;

  $ = jQuery;

  $.fn.extend({
    BumpingSlider: function(options) {
      var log, settings;
      settings = {
        debug: true,
        slide_timing: 1
      };
      settings = $.extend(settings, options);
      log = function(msg) {
        if (settings.debug) {
          return typeof console !== "undefined" && console !== null ? console.log(msg) : void 0;
        }
      };
      return this.each(function() {
        var $slide, $this, cloningIndex, i, i2, slideLenght, slideLenghtPartial, theLoop, theNumber, transitionOff, transitionOn;
        $this = $(this);
        $slide = $(".slide", this);
        transitionOn = function() {
          $slide.css({
            "webkit-transition": "all " + settings.slide_timing + "s cubic-bezier(1,.34,.83,.9)",
            "moz-transition": "all " + settings.slide_timing + "s cubic-bezier(1,.34,.83,.9)",
            "ms-transition": "all " + settings.slide_timing + "s cubic-bezier(1,.34,.83,.9)",
            "o-transition": "all " + settings.slide_timing + "s cubic-bezier(1,.34,.83,.9)",
            "transition": "all " + settings.slide_timing + "s cubic-bezier(1,.34,.83,.9)"
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
        cloningIndex = 0;
        while (cloningIndex < 3) {
          $(".container-" + cloningIndex + " .slide-0", $this).clone().insertAfter(".container-" + cloningIndex + " .slide-2", $this).attr("class", "slide slide-3");
          cloningIndex++;
        }
        i = 0;
        i2 = 0;
        return theLoop = setInterval(function() {
          var insideLoop;
          if (i < 3) {
            return insideLoop = setInterval(function() {
              if (i < 3) {
                log("insideLoop");
                transitionOn();
                $(".container-" + i + " .slide-" + i2).css("margin-top", -200);
                return i++;
              } else {
                return clearInterval(insideLoop);
              }
            }, 300);
          } else if (i2 < 2) {
            i2++;
            log(i2);
            return i = 0;
          } else if (i2 >= 2) {
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
