---
---
/* js/main.js - main JavaScript for kata.wiki
 *
 * @author: Cade Brown <me@cade.site>
 */


// initialize stuff like theme, etc
(function () {
    // set the theme to what data is stored, or the default
    theme_set(localStorage.getItem('data-theme'))

    // perform a search for all header links
    $(function() {
        return $("h2, h3, h4, h5, h6").each(function(i, el_) {
            let el = $(el_)
            let id = el.attr('id')
            if (!id) return
            
            // now, actually generate a clickable link with an icon
            return el.append($("<a/>").addClass("header-link").attr("href", "#" + id).html('<i class="fa fa-link"></i>'))
        })
    })
})()