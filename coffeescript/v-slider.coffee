# Reference jQuery
$ = jQuery

# Adds plugin object to jQuery
$.fn.extend
  # Change pluginName to your plugin's name.
  vSlider: (options) ->
    # Default settings
    settings =
      debug: false
      slide_timing: 0.8
      loop_timing: 2
      time_fix: 300
      slide_effect: "cubic-bezier(1,.34,.83,.9)"

    # Merge default settings with options.
    settings = $.extend settings, options

    # Simple logger.
    log = (msg) ->
      console?.log msg if settings.debug
      return

    # _Insert magic here._
    return @each ()->

      $this = $(this)
      $slide = $(".slide", this)

      # css3 transitions
      # on - off
      transitionOn = ->
        $slide.css
          "webkit-transition": "all #{settings.slide_timing}s #{settings.slide_effect}"
          "moz-transition":    "all #{settings.slide_timing}s #{settings.slide_effect}"
          "ms-transition":     "all #{settings.slide_timing}s #{settings.slide_effect}"
          "o-transition":      "all #{settings.slide_timing}s #{settings.slide_effect}"
          "transition":        "all #{settings.slide_timing}s #{settings.slide_effect}"
        return

      transitionOff = ->
        $slide.css
          "webkit-transition": "none"
          "moz-transition":    "none"
          "ms-transition":     "none"
          "o-transition":      "none"
          "transition":        "none"
        return

      # size of the slides has to be the same
      # in every container
      theNumber = $(".container", $this).size()
      theSlides = $(".slide", $this).size()
      thePartialNumber = ( theSlides / theNumber ) - 1
      log thePartialNumber

      # dynamically add classes to control
      # the animation
      $(".container").each (index) ->
        index +
        $(this).addClass "container-#{index}"
        $(".slide", this).each (index) ->
          index +
          $(this).addClass "slide-#{index}"
          return
        return

      # clone the last slide to mimic the continuous loop effect
      cloningIndex = 0
      while (cloningIndex < theNumber)
        $(".container-#{cloningIndex} .slide-0", $this).clone().insertAfter(".container-#{cloningIndex} .slide-#{thePartialNumber}", $this).attr("class", "slide slide-#{thePartialNumber + 1}")
        cloningIndex++

      # start the animation with double loop
      # to give different timings for the second
      # animated loop
      i = 0
      i2 = 0
      # nested interval
      theLoop = setInterval ->
        if i < theNumber
          insideLoop = setInterval ->
            if i < theNumber
              transitionOn()
              $(".container-#{i} .slide-#{i2}").css "margin-top", -200
              i++
              return
            else
              clearInterval(insideLoop)
              return
          , (settings.loop_timing / theNumber) * (settings.time_fix)
        else if i2 < thePartialNumber
          i2++
          i = 0
          return
        else if i2 >= thePartialNumber
          transitionOff()
          i2 = 0
          i = 0
          $(".container .slide").css "margin-top", ""
          return
      , settings.loop_timing * 1000
