typeof flexibility !== "undefined" && flexibility(document.documentElement);

if (typeof lazyloadRunObserver === "undefined") {
    const lazyloadRunObserver = () => {
        const lazyloadBackgrounds = document.querySelectorAll( `.e-con.e-parent:not(.e-lazyloaded)` );
        const lazyloadBackgroundObserver = new IntersectionObserver( ( entries ) => {
            entries.forEach( ( entry ) => {
                if ( entry.isIntersecting ) {
                    let lazyloadBackground = entry.target;
                    if( lazyloadBackground ) {
                        lazyloadBackground.classList.add( 'e-lazyloaded' );
                    }
                    lazyloadBackgroundObserver.unobserve( entry.target );
                }
            });
        }, { rootMargin: '200px 0px 200px 0px' } );
        lazyloadBackgrounds.forEach( ( lazyloadBackground ) => {
            lazyloadBackgroundObserver.observe( lazyloadBackground );
        } );
    };
    const events = [
        'DOMContentLoaded',
        'elementor/lazyload/observe',
    ];
    events.forEach( ( event ) => {
        document.addEventListener( event, lazyloadRunObserver );
    } );
}

var astra = {"break_point":"921","isRtl":"","is_scroll_to_id":"1","is_scroll_to_top":"1","is_header_footer_builder_active":"1","responsive_cart_click":"flyout","is_dark_palette":""};

var elementorFrontendConfig = {"environmentMode":{"edit":false,"wpPreview":false,"isScriptDebug":false},"i18n":{"shareOnFacebook":"Share on Facebook","shareOnTwitter":"Share on Twitter","pinIt":"Pin it","download":"Download","downloadImage":"Download image","fullscreen":"Fullscreen","zoom":"Zoom","share":"Share","playVideo":"Play Video","previous":"Previous","next":"Next","close":"Close","a11yPageTransitionsClosingMessage":"Your page is still loading, please wait.","a11yPageTransitionsOpenedMessage":"The page has loaded","a11yPageTransitionsLoadingMessage":"The page is now loading"},"is_rtl":false,"breakpoints":{"xs":0,"sm":480,"md":768,"lg":1025,"xl":1440,"xxl":1600},"responsive":{"breakpoints":{"mobile":{"label":"Mobile Portrait","value":767,"default_value":767,"direction":"max","is_enabled":true},"mobile_extra":{"label":"Mobile Landscape","value":880,"default_value":880,"direction":"max","is_enabled":false},"tablet":{"label":"Tablet Portrait","value":1024,"default_value":1024,"direction":"max","is_enabled":true},"tablet_extra":{"label":"Tablet Landscape","value":1200,"default_value":1200,"direction":"max","is_enabled":false},"laptop":{"label":"Laptop","value":1366,"default_value":1366,"direction":"max","is_enabled":false},"widescreen":{"label":"Widescreen","value":2400,"default_value":2400,"direction":"min","is_enabled":false}},"hasCustomBreakpoints":false},"version":"3.34.1","is_static":false,"experimentalFeatures":{"e_font_icon_svg":true,"additional_custom_breakpoints":true,"container":true,"container_grid":true,"e_tabs_control":true,"e_form_submissions":true},"urls":{"assets":"/blood-sugar/scripts/"},"settings":{"page":[],"editorPreferences":[]},"kit":{"active_breakpoints":["viewport_mobile","viewport_tablet"],"global_image_lightbox":"yes","lightbox_enable_counter":"yes","lightbox_enable_fullscreen":"yes","lightbox_enable_zoom":"yes","lightbox_enable_share":"yes","lightbox_title_src":"title","lightbox_description_src":"description"},"post":{"id":716,"title":"Humiliated%20By%20A%20Weak%20Stream%20And%20Wet%20Spots%3F%20This%20%22Odd%2015-Second%20Ritual%22%20Forces%20Your%20Bladder%20To%20Empty%20Fully.","excerpt":"","featuredImage":"/blood-sugar/images/salt-1.webp"}};

/(trident|msie)/i.test(navigator.userAgent)&&document.getElementById&&window.addEventListener&&window.addEventListener("hashchange",function(){var t,e=location.hash.substring(1);/^[A-z0-9_-]+$/.test(e)&&(t=document.getElementById(e))&&(/^(?:a|select|input|button|textarea)$/i.test(t.tagName)||(t.tabIndex=-1),t.focus())},!1);
