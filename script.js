$('.works').mouseenter(function() {
    $(this).css("cursor","pointer");
    $(this).animate({height: 700;}, 'slow');
});

$('.works').mouseleave(function() {
    $(this).animate({width: "28%"}, 'slow');
});
