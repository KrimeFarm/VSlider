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
        return $(".container").each(function(index) {
          return index + $(this).addClass("container-" + index);
        });
      });
    }
  });

}).call(this);
