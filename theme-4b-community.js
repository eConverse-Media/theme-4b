$(function () {
    $('#MainCopy_ContentWrapper').addClass('community');
    $('.JoinLeaveLink').appendTo('#PageTitleH1');
    handleRecentFiles();
});

function handleRecentFiles() {
    $('.HLMyDocuments ul li').each(function () {
        var self = $(this);
        handleByLineAndPostedIn(self);
    });
}