StaticScroller
==============

The StaticScroller will keep an element visible on the screen at all times,
and does so in a visually appealing manner.  The element will stay in its
static position until the user has scrolled past the element.  Then its
position is dynamically changed so it stays in a fixed position on the user's
browser window.  When they scroll back up past its original position, the
element will again position itself in its original place.

![Screenshot](http://luke.ehresman.org/sandbox/StaticScroller/Screenshots/example1.jpg)

How to Use
----------

Using the plugin is simple.  Just pass the id (or element reference) into
the constructor.  If you want this effect to happen starting with the initial
page load, then wrap it in a "domready" event on the window.

	#JS
	<script type="text/javascript">
	window.addEvent("domready", function() {
		new StaticScroller("container");
	});
	</script>

Options
-------

The constructor takes an optional second parameter for options.  Valid options are:

* offset: the offset from the top of the viewport to begin scrolling.  By default, this is 20px.
