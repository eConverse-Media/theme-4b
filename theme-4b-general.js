$(function () {
    handleAllContentList();
    handleEventDateBlocks();
});

function handleAllContentList() {
    $('.HLLandingControl.SearchResults ul li').each(function () {
        var self = $(this),
            byline = $(self).find('.ByLine'),
            postedIn = $(self).find('h5');

        $(postedIn).insertAfter(byline);
    });
}

function handleEventDateBlocks() {
    $('.HLLandingControl.HLEventList ul li').each(function () {
        var self = $(this),
            month = $(self).find('.date-block .calendar-month span').text();

        month = month.substring(0, 3);
        $(self).find('.date-block .calendar-month').text(month);
    });
}