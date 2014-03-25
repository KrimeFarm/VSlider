VSlider
=================

This is a fairly stright forward **jQuery 2** plugin, compatible with **Bootstrap** that creates a responsive multi slider animated with **CSS3 transitions**.

## How it works

``` html
<div class="content">

  <div class="container">
    <div class="slide"><p>content</p></div>
    <div class="slide"><p>content</p></div>
    <div class="slide"><p>content</p></div>
  </div>

  <div class="container">
    <div class="slide"><p>content</p></div>
    <div class="slide"><p>content</p></div>
    <div class="slide"><p>content</p></div>
  </div>

  <div class="container">
    <div class="slide"><p>content</p></div>
    <div class="slide"><p>content</p></div>
    <div class="slide"><p>content</p></div>
  </div>

</div>
```

This is a basic 3 slides block

```scss
.content {
  @media (min-width: @screen-sm) {
    width: @container-sm;
  }
  @media (min-width: @screen-md) {
    width: @container-md;
  }
  @media (min-width: @screen-lg) {
    width: @container-lg;
  }
}

.content {
  border: 1px solid red;
  margin: 0 auto;
  background: red;
  min-height: 200px;

  .container {
    height: 200px;
    clear: right;
    overflow: hidden;

    @media (min-width: @screen-sm) {
      float: left;
      width: 100% / 3; //100% divided for the number of slide blocks
    }
  }
}
```

The relative **less** configuration.

### Options

`slide_timing` the css3 transition timing ( default 1s )

`slide_effect` the css3 transition type ( default "cubic-bezier(1,.34,.83,.9)" )
