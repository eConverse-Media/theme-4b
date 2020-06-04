$(function () {
    handleNavLocation();
    handleSearch();
    handleHero();
    handleTiles();
    handleAllContentList();
    handleBlogsList();
    handleEventDateBlocks();
    handleCopyright();
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

function handleTiles() {
    $('.tile-secondary').each(function () {
        var self = $(this),
            link = $(self).find('a'),
            href = $(link).attr('href');

        if ($(link).attr('target') == '_blank') {
            $(self).wrapInner('<a href="' + href + '" target="_blank" rel="noopener" />');
        } else {
            $(self).wrapInner('<a href="' + href + '" />');
        }

        $(link).hide();
    });
}

function handleByLineAndPostedIn(self) {
    var byline = $(self).find('.ByLine'),
        postedIn = $(self).find('h5');
 
    $(byline).text($.trim($(byline).text()));

    $(postedIn).insertAfter(byline);
}

function handleAllContentList() {
    $('.HLLandingControl.SearchResults ul li').each(function () {
        var self = $(this);

        // handle byline and posted in

        handleByLineAndPostedIn(self);

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

function handleBlogsList() {
    $('.home .HLRecentBlogs ul li').each(function () {
        var self = $(this);
        handleByLineAndPostedIn(self);
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

function handleCopyright() {

    // handle date
    var year = new Date().getFullYear();

    $('.copyright-year').text(year);

    // handle row wrapper
    $('.footer-copyright').closest('.row').addClass('footer-bottom-content');
}