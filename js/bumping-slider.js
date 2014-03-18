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
        var $this, theWidht;
        $this = $(this);
        theWidht = $this.width();
        $(".container").each(function(index) {
          return index + $(this).addClass("container-" + index);
        });
        return $(".container").each(function() {
          var $container;
          $container = $(this);
          return setTimeout(function() {
            return $(".slide:first", $container).css("margin-top", "-200px");
          }, 500);
        });
      });
    }
  });

}).call(this);
