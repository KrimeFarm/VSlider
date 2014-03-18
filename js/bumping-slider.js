(function() {
  var $;

  $ = jQuery;

  $.fn.extend({
    BumpingSlider: function(options) {
      var log, settings;
      settings = {
        debug: true
      };
      settings = $.extend(settings, options);
      log = function(msg) {
        if (settings.debug) {
          return typeof console !== "undefined" && console !== null ? console.log(msg) : void 0;
        }
      };
      return this.each(function() {
        var $this, theNumber, thePercentage, theWidht;
        $this = $(this);
        theWidht = $this.width();
        theNumber = $(".container", $this).size();
        thePercentage = 100 / theNumber;
        $(".container").css("width", "" + thePercentage + "%");
        setTimeout(function() {
          var theImageHeight;
          theImageHeight = $("img").innerHeight();
          return $this.css({
            "height": theImageHeight,
            "opacity": 1
          });
        }, 100);
        $(window).resize(function() {
          var theImageHeight;
          theImageHeight = $("img").innerHeight();
          return $this.css({
            "height": theImageHeight
          });
        });
        return $(".container").each(function(index) {
          index + 1;
          return $(this).addClass("container-" + index);
        });
      });
    }
  });

}).call(this);
