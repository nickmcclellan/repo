// $Id: disqus.js,v 1.1.2.2.2.2 2010/03/19 11:02:54 robloach Exp $
(function ($) {

/**
 * Drupal Disqus behavior.
 */
Drupal.behaviors.disqus = {
  attach: function (context, settings) {
    if (settings.disqusCommentDomain || false) {
      // Create the query.
      var query = '?';
      jQuery("a[href$='#disqus_thread']").each(function(i) {
        query += 'url' + i + '=' + encodeURIComponent($(this).attr('href')) + '&';
      });

      // Make sure we are actually processing some links.
      if (query.length > 2) {
        // Make the AJAX call to get the number of comments.
        jQuery.ajax({
          type: 'GET',
          url: 'http://disqus.com/forums/' + settings.disqusCommentDomain + '/get_num_replies.js' + query,
          dataType: 'script',
          cache: true
        });
      }
    }
  }
};

})(jQuery);
