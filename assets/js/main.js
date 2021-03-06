/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can 
 * always reference jQuery with $, even when in .noConflict() mode.
 *
 * Google CDN, Latest jQuery
 * To use the default WordPress version of jQuery, go to lib/config.php and
 * remove or comment out: add_theme_support('jquery-cdn');
 * ======================================================================== */

(function($) {

// Use this variable to set up the common and page specific functions. If you 
// rename this variable, you will also need to rename the namespace below.
var Roots = {
  // All pages
  common: {
    init: function() {
      // JavaScript to be fired on all pages
      $("#id_email").attr("placeholder", "Email");
      $("#id_member_field_postal_code").attr("placeholder", "Zip Code");
      $('#e2ma_signup_submit_button').attr('value', '{ Sign me up! }');
      $('.vid-container').fitVids();
      $('#social-float>ul>li>a').attr('target', '_blank');
    }
  },
  // Home page
  home: {
    init: function() {
      // JavaScript to be fired on the home page
      var $talkbtn,$question,hashtags,twitter_url,update_widgets;
      $talkbtn=$("#talk_btn");
      $question=$("#question_text");
      twitter_url="https://twitter.com/intent/tweet";
      hashtags="brightside";
      update_widgets=function(){
        var e,t;
        e=encodeURIComponent($question.val());
        t=""+twitter_url+"?hashtags="+hashtags+"&text="+e;return $talkbtn.attr("href",t)};
        $question.on("keyup",function(e){return update_widgets()});
        return update_widgets()
        //$talkbtn.on("click ",function(e){e.preventDefault();update_widgets();return!0});
    }
  },
  // About us page, note the change from about-us to about_us.
  about_us: {
    init: function() {
      // JavaScript to be fired on the about us page
    }
  }
};

// The routing fires all common scripts, followed by the page specific scripts.
// Add additional events for more control over timing e.g. a finalize event
var UTIL = {
  fire: function(func, funcname, args) {
    var namespace = Roots;
    funcname = (funcname === undefined) ? 'init' : funcname;
    if (func !== '' && namespace[func] && typeof namespace[func][funcname] === 'function') {
      namespace[func][funcname](args);
    }
  },
  loadEvents: function() {
    UTIL.fire('common');

    $.each(document.body.className.replace(/-/g, '_').split(/\s+/),function(i,classnm) {
      UTIL.fire(classnm);
    });
  }
};

$(document).ready(UTIL.loadEvents);

})(jQuery); // Fully reference jQuery after this point.

