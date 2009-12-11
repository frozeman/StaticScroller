/*
---
description:
license: MIT-style
author: Luke Ehresman
requires: []
provides: [StaticScroller]
...
*/
var StaticScroller = new Class({
	Implements: Options,
	container: null,
	origPosition: null,
	options: {
		offset: 20
	},

	initialize: function(container, options) {
		this.setOptions(options);
		this.container = $(container);
		this.origPosition = this.container.getPosition();

		document.addEvent("scroll", function() {
			if (document.getScroll().y >= this.origPosition.y - this.options.offset) {
				this.container.setStyle("position", "relative");
				this.container.setStyle("top", document.getScroll().y - this.origPosition.y + this.options.offset);
			} else {
				this.container.setStyle("position", "static");
			}
		}.bind(this));
		document.fireEvent("scroll");
	}
});
