var $talkbtn, $question, hashtags, twitter_url, update_widgets;

$talkbtn = $("#talk_btn");

$question = $("#question_text");

twitter_url = "https://twitter.com/intent/tweet";

hashtags = "bright";

update_widgets = function() {
    var e, t;
    e = encodeURIComponent($question.val());
    t = "" + twitter_url + "?hashtags=" + hashtags + "&text=" + e;
    return $talkbtn.attr("href", t);
};

$question.on("keyup", function(e) {
    return update_widgets();
});

$talkbtn.on("click ", function(e) {
    e.preventDefault();
    update_widgets();
    return !0;
});