#CSS Layout

##Display Property

###Block
<div> >>> standard block-level element

###inline
<span> >>> standard inline element

##Setting width and margin
<div id="main">

###Example CSS:
  #main {
    width: 600px;
    margin: 0 auto;
  }

##Box-model
###Example CSS
width: 500px;
margin: 20px auto;
padding: 50px;
border-width: 10px;

##Box-sizing
To create a maximum width of box.
###Example
width: 500px;
  margin: 20px auto;
  padding: 50px;
  border: solid blue 10px;
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;

##Position
###Static
Default - 'not positioned'

###Relative
Adjusted away from it's normal position.

###Fixed
Positioned relative to the viewport, fixed on the screen and doesn't move on scroll.

###Absolute
Positioned relative to nearest positioned ancestor.

##Float
Float is intended for wrapping text around images

##Percent width
Unit measurement relative to containing Block, rather than using px.
E.g.
nav {
  float: left;
  width: 25%;
}
section {
  margin-left: 25%;
}

##Media queries
Positioning elements relative to screen size
e.g.
@media screen and (min-width:600px) {
  nav {
    float: left;
    width: 25%;
  }
  section {
    margin-left: 25%;
  }
}
@media screen and (max-width:599px) {
  nav li {
    display: inline;
  }
}
