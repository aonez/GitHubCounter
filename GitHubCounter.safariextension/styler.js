'use strict';

var sizes = document.getElementsByTagName("small");

// Get the maximum width
var i;
var maxwidth = 0;
for (i = 0; i < sizes.length; ++i) {
	if (sizes[i].offsetWidth > maxwidth)
		maxwidth = sizes[i].offsetWidth;
}
maxwidth = maxwidth + 3; // Don't be so strict

// Set all sizes the same width
for (i = 0; i < sizes.length; ++i) {
	sizes[i].style.width = maxwidth + "px";
}

