$(function () {
    handleNavLocation();
    handleSearch();
    handleHero();
    handleAllContentList();
    handleEventDateBlocks();
});

function handleNavLocation() {
    $('#NAV').appendTo('#MPheader > .row:first-child > .col-md-12');
}

function handleSearch() {
    $('#NAV .navbar-nav').after('<button type="button" class="search-btn-top" />');
}

function handleHero() {
    var name = $('#ProfileContainer h4').text(),
        greeting = '<div class="hero-greeting">Welcome back, <strong>' + name + '.</strong></div>';

    $(greeting).prependTo('.hero');    
}

function handleAllContentList() {
    $('.HLLandingControl.SearchResults ul li').each(function () {

        // handle byline and posted in

        var self = $(this),
            byline = $(self).find('.ByLine'),
            postedIn = $(self).find('h5');

        $(postedIn).insertAfter(byline);

        // handle icons

        var label = $(self).find('.title-row > .col-md-3 > .label-default'),
            labelText = $(label).text();

        labelText = $.trim(labelText);

        switch (labelText) {
            case 'Announcement':
                $(label).addClass('announcement');
                break;
            case 'Discussion':
                $(label).addClass('discussion');
                break;
            case 'Blog Entry':
                $(label).addClass('blog');
                break;
            case 'Event':
                $(label).addClass('event');
                break;
            default:
                $(label).addClass('default');
                break;
        }
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