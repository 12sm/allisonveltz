var $talkbtn, $question, hashtags, twitter_url, update_widgets;

$talkbtn = $("#talk_btn"), $question = $("#question_text"), twitter_url = "https://twitter.com/intent/tweet", 
hashtags = "brightside", update_widgets = function() {
    var t, e;
    return t = encodeURIComponent($question.val()), e = "" + twitter_url + "?hashtags=" + hashtags + "&text=" + t, 
    $talkbtn.attr("href", e);
}, $question.on("keyup", function() {
    return update_widgets();
    console.log(hashtags);
}), $talkbtn.on("click ", function(t) {
    return t.preventDefault(), update_widgets(), !0;
});