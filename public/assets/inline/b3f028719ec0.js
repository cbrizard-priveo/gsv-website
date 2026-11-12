function setEqualHeights() {
  // Reset heights first
  jQuery('.locations-outer h3, .locations-outer p').css('height', 'auto');

  // Equal height for h2
  var maxH2Height = 0;
  jQuery('.locations-outer h3').each(function() {
    var height = jQuery(this).outerHeight();
    if (height > maxH2Height) {
      maxH2Height = height;
    }
  });
  jQuery('.locations-outer h3').height(maxH2Height);

  // Equal height for p
  var maxPHeight = 0;
  jQuery('.locations-outer p').each(function() {
    var height = jQuery(this).outerHeight();
    if (height > maxPHeight) {
      maxPHeight = height;
    }
  });
  jQuery('.locations-outer p').height(maxPHeight);
}

// Run on DOM ready
jQuery(function() {
  setEqualHeights();

  // Run again on window resize
  jQuery(window).resize(function() {
    setEqualHeights();
  });
});