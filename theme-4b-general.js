$(function () {
    handleNavLocation();
    handleSearch();
    handleHero();
    handleTiles();
    handleAllContentList();
    handleBlogsList();
    handleEventDateBlocks();
    handleMostActiveMembers();
    handleCopyright();
});

function handleNavLocation() {
    $('#NAV').appendTo('#MPheader > .row:first-child > .col-md-12');
}

function handleSearch() {
    $('#NAV .navbar-nav').after('<button type="button" class="search-btn-top" onclick="toggleSearch();" />');
    $('.search-bar-top').insertBefore('.search-btn-top');
    $(document).click(function (e) {
        var searchBar = $('.search-bar-top'),
            searchButton = $('.search-btn-top'),
            target = e.target;

        if (!($(target).is(searchBar)) &&
            !($(target).is(searchButton)) &&
            !($(target).closest('.search-bar-top').html()) &&
            !($(target).closest('.search-btn-top').html())) {
                closeSearch();
        }
    });
}

function toggleSearch() {
    if ($('.search-bar-top').hasClass('open')) {
        closeSearch();
    } else {
        openSearch();
    }
}
    
function closeSearch() {
    $('.search-bar-top').removeClass('open');
    $('.search-btn-top').removeClass('open');
}

function openSearch() {
    $('.search-bar-top').addClass('open');
    $('.search-btn-top').addClass('open');
    $('.search-bar-top .form-control').focus();
}

function handleHero() {
    var name = $('#ProfileContainer h4').text();

    if (!!name) {
        var greeting = '<div class="hero-greeting">Welcome back, <strong>' + name + '.</strong></div>';

        $(greeting).prependTo('.hero');    
    }

}

function handleTileLink(self, link) {
    var href = $(link).attr('href');

    if ($(link).attr('target') == '_blank') {
        $(self).wrapInner('<a href="' + href + '" target="_blank" rel="noopener" />');
    } else {
        $(self).wrapInner('<a href="' + href + '" />');
    }

    $(link).contents().unwrap();
}

function handleTiles() {

    $('.tile').each(function () {
        var self = $(this),
            link;

        if (!!($(self).find('h2 a').html())) {
            link = $(self).find('h2 a');
        } else {
            link = $(self).find('h3 a');
        }

        handleTileLink(self, link);
    });
}

function handleByLineAndPostedIn(self) {
    var byline = $(self).find('.ByLine'),
        postedIn = $(self).find('h5');
 
    $(byline).html($.trim($(byline).html()));

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

        // handle tiles

        var link = $(self).find('h3 a');
        handleTileLink(self, link);
    });
}

function handleMostActiveMembers() {
    $('.HLLandingControl.HLEngagement ul li').each(function () {
        var self = $(this),
            link = $(self).find('.col-md-9 > a');

        $(link).wrap('<h3 />')

        handleTileLink(self, link);
    });
}

function handleCopyright() {

    // handle date
    var year = new Date().getFullYear();

    $('.copyright-year').text(year);

    // handle row wrapper
    $('.footer-copyright').closest('.row').addClass('footer-bottom-content');
}