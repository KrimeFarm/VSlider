# Reference jQuery
$ = jQuery

# Adds plugin object to jQuery
$.fn.extend
  # Change pluginName to your plugin's name.
  BumpingSlider: (options) ->
    # Default settings
    settings =
      debug: true
      slide_timing: 1

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
          "webkit-transition" : "all #{settings.slide_timing}s cubic-bezier(1,.34,.83,.9)"
          "moz-transition" : "all #{settings.slide_timing}s cubic-bezier(1,.34,.83,.9)"
          "ms-transition" : "all #{settings.slide_timing}s cubic-bezier(1,.34,.83,.9)"
          "o-transition" : "all #{settings.slide_timing}s cubic-bezier(1,.34,.83,.9)"
          "transition" : "all #{settings.slide_timing}s cubic-bezier(1,.34,.83,.9)"
        return

      transitionOff = ->
        $slide.css
          "webkit-transition" : "none"
          "moz-transition" : "none"
          "ms-transition" : "none"
          "o-transition" : "none"
          "transition" : "none"
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


      cloningIndex = 0
      while (cloningIndex < 3)
        $(".container-#{cloningIndex} .slide-0", $this).clone().insertAfter(".container-#{cloningIndex} .slide-2", $this).attr("class", "slide slide-3")
        cloningIndex++

      i = 0
      i2 = 0
      # nested interval
      theLoop = setInterval ->
        if i < 3
          insideLoop = setInterval ->
            if i < 3
              log "insideLoop"
              transitionOn()
              $(".container-#{i} .slide-#{i2}").css "margin-top", -200
              i++
            else
              clearInterval(insideLoop)
          , 300
        else if i2 < 2
          i2++
          log i2
          i = 0
        else if i2 >= 2
          transitionOff()
          i2 = 0
          i = 0
          $(".container .slide").css "margin-top", ""
      , 2000



