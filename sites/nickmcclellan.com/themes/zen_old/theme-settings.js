$(document).ready( function() {
  // Hide the breadcrumb details, if no breadcrumb.
  $('#edit-zen_old-breadcrumb').change(
    function() {
      div = $('#div-zen_old-breadcrumb-collapse');
      if ($('#edit-zen_old-breadcrumb').val() == 'no') {
        div.slideUp('slow');
      } else if (div.css('display') == 'none') {
        div.slideDown('slow');
      }
    }
  );
  if ($('#edit-zen_old-breadcrumb').val() == 'no') {
    $('#div-zen_old-breadcrumb-collapse').css('display', 'none');
  }
  $('#edit-zen_old-breadcrumb-title').change(
    function() {
      checkbox = $('#edit-zen_old-breadcrumb-trailing');
      if ($('#edit-zen_old-breadcrumb-title').attr('checked')) {
        checkbox.attr('disabled', 'disabled');
      } else {
        checkbox.removeAttr('disabled');
      }
    }
  );
  $('#edit-zen_old-breadcrumb-title').change();
} );
