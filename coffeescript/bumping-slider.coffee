# Reference jQuery
$ = jQuery

# Adds plugin object to jQuery
$.fn.extend
  # Change pluginName to your plugin's name.
  BumpingSlider: (options) ->
    # Default settings
    settings =
      debug: true

    # Merge default settings with options.
    settings = $.extend settings, options

    # Simple logger.
    log = (msg) ->
      console?.log msg if settings.debug

    # _Insert magic here._
    return @each ()->

      $this = $(this)

      theWidht = $this.width()

      theNumber = $(".container", $this).size()
      thePercentage = 100 / theNumber
      $(".container").css "width", "#{thePercentage}%"

      setTimeout ->
        theImageHeight = $("img").innerHeight()
        $this.css
          "height": theImageHeight
          "opacity": 1
      , 100

      $(window).resize ->
        theImageHeight = $("img").innerHeight()
        $this.css
          "height": theImageHeight

      $(".container").each (index) ->
        index ++
        $(this).addClass "container-#{index}"

