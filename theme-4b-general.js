$(function () {
    handleAllContentList();
});

function handleAllContentList() {
    $('.HLLandingControl.SearchResults ul li').each(function () {
        var self = $(this),
            byline = $(self).find('.ByLine'),
            postedIn = $(self).find('h5');

        $(postedIn).insertAfter(byline);
    });
}