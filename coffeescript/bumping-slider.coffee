# Reference jQuery
$ = jQuery

# Adds plugin object to jQuery
$.fn.extend
  # Change pluginName to your plugin's name.
  BumpingSlider: (options) ->
    # Default settings
    settings =
      debug: true
      slide_timing: 0.5

    # Merge default settings with options.
    settings = $.extend settings, options

    # Simple logger.
    log = (msg) ->
      console?.log msg if settings.debug

    # _Insert magic here._
    return @each ()->

      $this = $(this)
      $slide = $(".slide", this)

      # transitions on/off
      transitionOn = ->
        $slide.css
          "webkit-transition" :"all #{settings.slide_timing}s ease-out"
          "moz-transition" :"all #{settings.slide_timing}s ease-out"
          "ms-transition" :"all #{settings.slide_timing}s ease-out"
          "o-transition" :"all #{settings.slide_timing}s ease-out"
          "transition" :"all #{settings.slide_timing}s ease-out"
        return

      transitionOff = ->
        $slide.css
          "webkit-transition" :"none"
          "moz-transition" :"none"
          "ms-transition" :"none"
          "o-transition" :"none"
          "transition" :"none"
        return

      # theWidht = $this.width()

      theNumber = $(".container", $this).size()
      # thePercentage = 100 / theNumber
      # $(".container").css "width", "#{thePercentage}%"

      $(".container").each (index) ->
        index +
        $(this).addClass "container-#{index}"

        $(".slide", this).each (index) ->
          index +
          $(this).addClass "slide-#{index}"

      slideLenght = $(".slide").size()
      slideLenghtPartial = slideLenght / theNumber


      $(".container-0").each ->
        $(".slide-0", this).clone().insertAfter(".slide-2")

      # i = 0
      # i2 = 0
      # # nested interval
      # loopii = setInterval ->
      #   log "coap"
      #   if i < 3
      #     transitionOn()
      #     $(".container-#{i} .slide-#{i2}").css "margin-top", -200
      #     i++
      #   else if i2 < 3
      #     i2++
      #     log i2
      #     i = 0
      #   else if i2 >= 3
      #     transitionOff()
      #     i2 = 0
      #     i = 0
      #     $(".container .slide").css "margin-top", ""
      # , 500
