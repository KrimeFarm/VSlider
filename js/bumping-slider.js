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
        return $(".container").css("width", "" + thePercentage + "%");
      });
    }
  });

}).call(this);
