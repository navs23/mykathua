const cheerio = require('cheerio')
const $ = cheerio.load(`

<!doctype html >
<!--[if IE 8]>    <html class="ie8" lang="en"> <![endif]-->
<!--[if IE 9]>    <html class="ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html lang="en-US" prefix="og: http://ogp.me/ns#"> <!--<![endif]-->
<head>
    <title>Daily Excelsior - Jammu News | Kashmir News | Ladakh | Latest News | JK</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="pingback" href="https://www.dailyexcelsior.com/xmlrpc.php" />
    <link rel="icon" type="image/png" href="/wp-content/uploads/2018/08/favicon.ico">
<!-- This site is optimized with the Yoast SEO plugin v9.2.1 - https://yoast.com/wordpress/plugins/seo/ -->
<meta name="description" content="Daily Excelsior provides the latest news stories from Jammu Kashmir and Ladakh , India and the World.Get todays headlines from politics,sports,business"/>
<link rel="canonical" href="https://www.dailyexcelsior.com/" />
<link rel="publisher" href="https://www.google.com/+DailyexcelsiorPage"/>
<meta property="og:locale" content="en_US" />
<meta property="og:type" content="website" />
<meta property="og:title" content="Daily Excelsior - Jammu News | Kashmir News | Ladakh | Latest News | JK" />
<meta property="og:description" content="Daily Excelsior provides the latest news stories from Jammu Kashmir and Ladakh , India and the World.Get todays headlines from politics,sports,business" />
<meta property="og:url" content="https://www.dailyexcelsior.com/" />
<meta property="og:site_name" content="Jammu Kashmir Latest News | Tourism | Breaking News J&amp;K" />
<meta property="fb:app_id" content="1938849599736695" />
<meta property="og:image" content="https://www.dailyexcelsior.com/wp-content/uploads/2018/08/dailyexcelsior.jpg" />
<meta property="og:image:secure_url" content="https://www.dailyexcelsior.com/wp-content/uploads/2018/08/dailyexcelsior.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:description" content="Daily Excelsior provides the latest news stories from Jammu Kashmir and Ladakh , India and the World.Get todays headlines from politics,sports,business" />
<meta name="twitter:title" content="Daily Excelsior - Jammu News | Kashmir News | Ladakh | Latest News | JK" />
<meta name="twitter:site" content="@dailyexcelsior1" />
<meta name="twitter:image" content="http://www.dailyexcelsior.com/wp-content/uploads/2018/08/dailyexcelsior.jpg" />
<meta name="twitter:creator" content="@dailyexcelsior1" />
<script type='application/ld+json'>{"@context":"https:\/\/schema.org","@type":"WebSite","@id":"#website","url":"https:\/\/www.dailyexcelsior.com\/","name":"Jammu Kashmir Latest News | Tourism | Breaking News J&amp;K","potentialAction":{"@type":"SearchAction","target":"https:\/\/www.dailyexcelsior.com\/?s={search_term_string}","query-input":"required name=search_term_string"}}</script>
<script type='application/ld+json'>{"@context":"https:\/\/schema.org","@type":"Organization","url":"https:\/\/www.dailyexcelsior.com\/","sameAs":["https:\/\/www.facebook.com\/dailyexcelsior","https:\/\/www.instagram.com\/dailyexcelsior\/","https:\/\/www.linkedin.com\/company\/daily-excelsior","https:\/\/www.google.com\/+DailyexcelsiorPage","https:\/\/www.pinterest.com\/dailyexcelsior\/","https:\/\/twitter.com\/dailyexcelsior1"],"@id":"https:\/\/www.dailyexcelsior.com\/#organization","name":"Daily Excelsior","logo":"http:\/\/www.dailyexcelsior.com\/wp-content\/uploads\/2014\/05\/200x200logo.png"}</script>
<meta name="msvalidate.01" content="D7863839893B155027EBEB1A562E3568" />
<meta name="yandex-verification" content="7d897f991c7e9fc0" />
<!-- / Yoast SEO plugin. -->

<link rel='dns-prefetch' href='//fonts.googleapis.com' />
<link rel='dns-prefetch' href='//s.w.org' />
<link rel="alternate" type="application/rss+xml" title="Jammu Kashmir Latest News | Tourism | Breaking News J&amp;K &raquo; Feed" href="https://www.dailyexcelsior.com/feed/" />
<link rel="alternate" type="application/rss+xml" title="Jammu Kashmir Latest News | Tourism | Breaking News J&amp;K &raquo; Comments Feed" href="https://www.dailyexcelsior.com/comments/feed/" />
		<script type="text/javascript">
			window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/2.4\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/2.4\/svg\/","svgExt":".svg","source":{"concatemoji":"https:\/\/www.dailyexcelsior.com\/wp-includes\/js\/wp-emoji-release.min.js?ver=4.9.7"}};
			!function(a,b,c){function d(a,b){var c=String.fromCharCode;l.clearRect(0,0,k.width,k.height),l.fillText(c.apply(this,a),0,0);var d=k.toDataURL();l.clearRect(0,0,k.width,k.height),l.fillText(c.apply(this,b),0,0);var e=k.toDataURL();return d===e}function e(a){var b;if(!l||!l.fillText)return!1;switch(l.textBaseline="top",l.font="600 32px Arial",a){case"flag":return!(b=d([55356,56826,55356,56819],[55356,56826,8203,55356,56819]))&&(b=d([55356,57332,56128,56423,56128,56418,56128,56421,56128,56430,56128,56423,56128,56447],[55356,57332,8203,56128,56423,8203,56128,56418,8203,56128,56421,8203,56128,56430,8203,56128,56423,8203,56128,56447]),!b);case"emoji":return b=d([55357,56692,8205,9792,65039],[55357,56692,8203,9792,65039]),!b}return!1}function f(a){var c=b.createElement("script");c.src=a,c.defer=c.type="text/javascript",b.getElementsByTagName("head")[0].appendChild(c)}var g,h,i,j,k=b.createElement("canvas"),l=k.getContext&&k.getContext("2d");for(j=Array("flag","emoji"),c.supports={everything:!0,everythingExceptFlag:!0},i=0;i<j.length;i++)c.supports[j[i]]=e(j[i]),c.supports.everything=c.supports.everything&&c.supports[j[i]],"flag"!==j[i]&&(c.supports.everythingExceptFlag=c.supports.everythingExceptFlag&&c.supports[j[i]]);c.supports.everythingExceptFlag=c.supports.everythingExceptFlag&&!c.supports.flag,c.DOMReady=!1,c.readyCallback=function(){c.DOMReady=!0},c.supports.everything||(h=function(){c.readyCallback()},b.addEventListener?(b.addEventListener("DOMContentLoaded",h,!1),a.addEventListener("load",h,!1)):(a.attachEvent("onload",h),b.attachEvent("onreadystatechange",function(){"complete"===b.readyState&&c.readyCallback()})),g=c.source||{},g.concatemoji?f(g.concatemoji):g.wpemoji&&g.twemoji&&(f(g.twemoji),f(g.wpemoji)))}(window,document,window._wpemojiSettings);
		</script>
		<style type="text/css">
img.wp-smiley,
img.emoji {
	display: inline !important;
	border: none !important;
	box-shadow: none !important;
	height: 1em !important;
	width: 1em !important;
	margin: 0 .07em !important;
	vertical-align: -0.1em !important;
	background: none !important;
	padding: 0 !important;
}
</style>
<link rel='stylesheet' id='contact-form-7-css'  href='https://www.dailyexcelsior.com/wp-content/plugins/contact-form-7/includes/css/styles.css?ver=5.0.5' type='text/css' media='all' />
<link rel='stylesheet' id='td-plugin-multi-purpose-css'  href='https://www.dailyexcelsior.com/wp-content/plugins/td-multi-purpose/style.css?ver=4.9.7' type='text/css' media='all' />
<link rel='stylesheet' id='font_awesome-css'  href='https://www.dailyexcelsior.com/wp-content/plugins/td-composer/assets/fonts/font-awesome/font-awesome.css?ver=4.9.7' type='text/css' media='all' />
<link rel='stylesheet' id='google-fonts-style-css'  href='https://fonts.googleapis.com/css?family=Open+Sans%3A300italic%2C400%2C400italic%2C600%2C600italic%2C700%7CRoboto%3A300%2C400%2C400italic%2C500%2C500italic%2C700%2C900&#038;ver=8.7' type='text/css' media='all' />
<link rel='stylesheet' id='td-theme-css'  href='https://www.dailyexcelsior.com/wp-content/themes/Newspaper/style.css?ver=8.7' type='text/css' media='all' />
<link rel='stylesheet' id='td-theme-child-css'  href='https://www.dailyexcelsior.com/wp-content/themes/Newspaper-child/style.css?ver=8.7c' type='text/css' media='all' />
<script type='text/javascript' src='https://www.dailyexcelsior.com/wp-includes/js/jquery/jquery.js?ver=1.12.4'></script>
<script type='text/javascript' src='https://www.dailyexcelsior.com/wp-includes/js/jquery/jquery-migrate.min.js?ver=1.4.1'></script>
<link rel='https://api.w.org/' href='https://www.dailyexcelsior.com/wp-json/' />
<link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://www.dailyexcelsior.com/xmlrpc.php?rsd" />
<link rel="wlwmanifest" type="application/wlwmanifest+xml" href="https://www.dailyexcelsior.com/wp-includes/wlwmanifest.xml" /> 
<meta name="generator" content="WordPress 4.9.7" />
<link rel='shortlink' href='https://www.dailyexcelsior.com/' />
<link rel="alternate" type="application/json+oembed" href="https://www.dailyexcelsior.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwww.dailyexcelsior.com%2F" />
<link rel="alternate" type="text/xml+oembed" href="https://www.dailyexcelsior.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwww.dailyexcelsior.com%2F&#038;format=xml" />
			<script>
				window.tdwGlobal = {"adminUrl":"https:\/\/www.dailyexcelsior.com\/wp-admin\/","wpRestNonce":"7a5fadf054","wpRestUrl":"https:\/\/www.dailyexcelsior.com\/wp-json\/","permalinkStructure":"\/%postname%\/"};
			</script>
			<!--[if lt IE 9]><script src="https://html5shim.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
    
<!-- JS generated by theme -->

<script>
    
    

	    var tdBlocksArray = []; //here we store all the items for the current page

	    //td_block class - each ajax block uses a object of this class for requests
	    function tdBlock() {
		    this.id = '';
		    this.block_type = 1; //block type id (1-234 etc)
		    this.atts = '';
		    this.td_column_number = '';
		    this.td_current_page = 1; //
		    this.post_count = 0; //from wp
		    this.found_posts = 0; //from wp
		    this.max_num_pages = 0; //from wp
		    this.td_filter_value = ''; //current live filter value
		    this.is_ajax_running = false;
		    this.td_user_action = ''; // load more or infinite loader (used by the animation)
		    this.header_color = '';
		    this.ajax_pagination_infinite_stop = ''; //show load more at page x
	    }


        // td_js_generator - mini detector
        (function(){
            var htmlTag = document.getElementsByTagName("html")[0];

	        if ( navigator.userAgent.indexOf("MSIE 10.0") > -1 ) {
                htmlTag.className += ' ie10';
            }

            if ( !!navigator.userAgent.match(/Trident.*rv\:11\./) ) {
                htmlTag.className += ' ie11';
            }

	        if ( navigator.userAgent.indexOf("Edge") > -1 ) {
                htmlTag.className += ' ieEdge';
            }

            if ( /(iPad|iPhone|iPod)/g.test(navigator.userAgent) ) {
                htmlTag.className += ' td-md-is-ios';
            }

            var user_agent = navigator.userAgent.toLowerCase();
            if ( user_agent.indexOf("android") > -1 ) {
                htmlTag.className += ' td-md-is-android';
            }

            if ( -1 !== navigator.userAgent.indexOf('Mac OS X')  ) {
                htmlTag.className += ' td-md-is-os-x';
            }

            if ( /chrom(e|ium)/.test(navigator.userAgent.toLowerCase()) ) {
               htmlTag.className += ' td-md-is-chrome';
            }

            if ( -1 !== navigator.userAgent.indexOf('Firefox') ) {
                htmlTag.className += ' td-md-is-firefox';
            }

            if ( -1 !== navigator.userAgent.indexOf('Safari') && -1 === navigator.userAgent.indexOf('Chrome') ) {
                htmlTag.className += ' td-md-is-safari';
            }

            if( -1 !== navigator.userAgent.indexOf('IEMobile') ){
                htmlTag.className += ' td-md-is-iemobile';
            }

        })();




        var tdLocalCache = {};

        ( function () {
            "use strict";

            tdLocalCache = {
                data: {},
                remove: function (resource_id) {
                    delete tdLocalCache.data[resource_id];
                },
                exist: function (resource_id) {
                    return tdLocalCache.data.hasOwnProperty(resource_id) && tdLocalCache.data[resource_id] !== null;
                },
                get: function (resource_id) {
                    return tdLocalCache.data[resource_id];
                },
                set: function (resource_id, cachedData) {
                    tdLocalCache.remove(resource_id);
                    tdLocalCache.data[resource_id] = cachedData;
                }
            };
        })();

    
    
var td_viewport_interval_list=[{"limitBottom":767,"sidebarWidth":228},{"limitBottom":1018,"sidebarWidth":300},{"limitBottom":1140,"sidebarWidth":324}];
var td_animation_stack_effect="type0";
var tds_animation_stack=true;
var td_animation_stack_specific_selectors=".entry-thumb, img";
var td_animation_stack_general_selectors=".td-animation-stack img, .td-animation-stack .entry-thumb, .post img";
var td_ajax_url="https:\/\/www.dailyexcelsior.com\/wp-admin\/admin-ajax.php?td_theme_name=Newspaper&v=8.7";
var td_get_template_directory_uri="https:\/\/www.dailyexcelsior.com\/wp-content\/themes\/Newspaper";
var tds_snap_menu="";
var tds_logo_on_sticky="";
var tds_header_style="";
var td_please_wait="Please wait...";
var td_email_user_pass_incorrect="User or password incorrect!";
var td_email_user_incorrect="Email or username incorrect!";
var td_email_incorrect="Email incorrect!";
var tds_more_articles_on_post_enable="";
var tds_more_articles_on_post_time_to_wait="";
var tds_more_articles_on_post_pages_distance_from_top=0;
var tds_theme_color_site_wide="#4db2ec";
var tds_smart_sidebar="";
var tdThemeName="Newspaper";
var td_magnific_popup_translation_tPrev="Previous (Left arrow key)";
var td_magnific_popup_translation_tNext="Next (Right arrow key)";
var td_magnific_popup_translation_tCounter="%curr% of %total%";
var td_magnific_popup_translation_ajax_tError="The content from %url% could not be loaded.";
var td_magnific_popup_translation_image_tError="The image #%curr% could not be loaded.";
var tdDateNamesI18n={"month_names":["January","February","March","April","May","June","July","August","September","October","November","December"],"month_names_short":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"day_names_short":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]};
var td_ad_background_click_link="";
var td_ad_background_click_target="";
</script>


<!-- Header style compiled by theme -->

<style>
    
.td-header-wrap .td-header-top-menu-full,
    .td-header-wrap .top-header-menu .sub-menu {
        background-color: #dd3333;
    }
    .td-header-style-8 .td-header-top-menu-full {
        background-color: transparent;
    }
    .td-header-style-8 .td-header-top-menu-full .td-header-top-menu {
        background-color: #dd3333;
        padding-left: 15px;
        padding-right: 15px;
    }

    .td-header-wrap .td-header-top-menu-full .td-header-top-menu,
    .td-header-wrap .td-header-top-menu-full {
        border-bottom: none;
    }


    
    .td-banner-wrap-full,
    .td-header-style-11 .td-logo-wrap-full {
        background-color: rgba(255,255,255,0.28);
    }

    .td-header-style-11 .td-logo-wrap-full {
        border-bottom: 0;
    }

    @media (min-width: 1019px) {
        .td-header-style-2 .td-header-sp-recs,
        .td-header-style-5 .td-a-rec-id-header > div,
        .td-header-style-5 .td-g-rec-id-header > .adsbygoogle,
        .td-header-style-6 .td-a-rec-id-header > div,
        .td-header-style-6 .td-g-rec-id-header > .adsbygoogle,
        .td-header-style-7 .td-a-rec-id-header > div,
        .td-header-style-7 .td-g-rec-id-header > .adsbygoogle,
        .td-header-style-8 .td-a-rec-id-header > div,
        .td-header-style-8 .td-g-rec-id-header > .adsbygoogle,
        .td-header-style-12 .td-a-rec-id-header > div,
        .td-header-style-12 .td-g-rec-id-header > .adsbygoogle {
            margin-bottom: 24px !important;
        }
    }

    @media (min-width: 768px) and (max-width: 1018px) {
        .td-header-style-2 .td-header-sp-recs,
        .td-header-style-5 .td-a-rec-id-header > div,
        .td-header-style-5 .td-g-rec-id-header > .adsbygoogle,
        .td-header-style-6 .td-a-rec-id-header > div,
        .td-header-style-6 .td-g-rec-id-header > .adsbygoogle,
        .td-header-style-7 .td-a-rec-id-header > div,
        .td-header-style-7 .td-g-rec-id-header > .adsbygoogle,
        .td-header-style-8 .td-a-rec-id-header > div,
        .td-header-style-8 .td-g-rec-id-header > .adsbygoogle,
        .td-header-style-12 .td-a-rec-id-header > div,
        .td-header-style-12 .td-g-rec-id-header > .adsbygoogle {
            margin-bottom: 14px !important;
        }
    }
</style>

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-52508570-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-52508570-1');
</script>
<!-- Feedify Script added on March 29 for feedify Notifications-->
<script  id="feedify_webscript" >
var feedify = feedify || {};
window.feedify_options={fedify_url:"https://feedify.net/"};
(function (window, document){
	function addScript( script_url ){
		var s = document.createElement('script');
		s.type = 'text/javascript';
		s.src = script_url;
		document.getElementsByTagName('head')[0].appendChild(s);
	}
	addScript('https://tpcf.feedify.net/uploads/settings/2c9f0b7a8b090d408cba2c1b467aecc7.js?ts='+Math.random());
	addScript('https://cdn.feedify.net/getjs/feedbackembad-min-2.0.js');
})(window, document);
</script>
<link rel="manifest" href="/manifest.json">
<!-- Feedify Script Ends Here-->

<!-- Erelego Header Code-->

<script language="JavaScript" src="https://saxp.zedo.com/jsc/sxp2/fo.js"></script>
<!-- Erelego Header Code Ends-->
<!-- BEGIN ExactMetrics v5.3.7 Universal Analytics - https://exactmetrics.com/ -->
<script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-52508570-1', 'auto');
  ga('send', 'pageview');
</script>
<!-- END ExactMetrics Universal Analytics -->

<!-- Button style compiled by theme -->

<style>
    .tdm-header-style-1.td-header-wrap .td-header-top-menu-full,
                .tdm-header-style-1.td-header-wrap .top-header-menu .sub-menu,
                .tdm-header-style-2.td-header-wrap .td-header-top-menu-full,
                .tdm-header-style-2.td-header-wrap .top-header-menu .sub-menu,
                .tdm-header-style-3.td-header-wrap .td-header-top-menu-full,
                .tdm-header-style-3.td-header-wrap .top-header-menu .sub-menu{
                    background-color: #dd3333;
                }
</style>

	<style id="tdw-css-placeholder">.page-id-6724 .td_module_10 .td-module-thumb {
  display: none;
}
.page-id-6724 .td_module_10 .item-details {
  margin-left: 0px;
}
.page-id-6724 .td_module_10 .td-module-comments {
  display: none;
}
.page-id-12385 .td_module_10 .td-module-thumb {
  display: none;
}
.page-id-12385 .td_module_10 .item-details {
  margin-left: 0px;
}
.page-id-12385 .td_module_10 .td-module-comments {
  display: none;
}
.page-id-6728 .td_module_10 .td-module-thumb {
  display: none;
}
.page-id-6728 .td_module_10 .item-details {
  margin-left: 0px;
}
.page-id-6728 .td_module_10 .td-module-comments {
  display: none;
}
.page-id-6730 .td_module_10 .td-module-thumb {
  display: none;
}
.page-id-6730 .td_module_10 .item-details {
  margin-left: 0px;
}
.page-id-6730 .td_module_10 .td-module-comments {
  display: none;
}
.page-id-99 .td_module_16 .td-module-thumb {
  display: none;
}
.page-id-99 .td_module_16 .item-details {
  margin-left: 0px;
}
.page-id-99 .td_module_16 .td-module-comments {
  display: none;
}
.page-id-1619 .td_module_16 .td-module-thumb {
  display: none;
}
.page-id-1619 .td_module_16 .item-details {
  margin-left: 0px;
}
.page-id-1619 .td_module_16 .td-module-comments {
  display: none;
}
.page-id-603 .td_module_16 .td-module-thumb {
  display: none;
}
.page-id-603 .td_module_16 .item-details {
  margin-left: 0px;
}
.page-id-603 .td_module_16 .td-module-comments {
  display: none;
}
.page-id-107 .td_module_16 .td-module-thumb {
  display: none;
}
.page-id-107 .td_module_16 .item-details {
  margin-left: 0px;
}
.page-id-107 .td_module_16 .td-module-comments {
  display: none;
}
.page-id-109 .td_module_16 .td-module-thumb {
  display: none;
}
.page-id-109 .td_module_16 .item-details {
  margin-left: 0px;
}
.page-id-109 .td_module_16 .td-module-comments {
  display: none;
}
.page-id-112 .td_module_8 .td-module-comments {
  display: none;
}
.page-id-114 .td_module_8 .td-module-comments {
  display: none;
}
.page-id-21427 .td_module_16 .td-module-thumb {
  display: none;
}
.page-id-21427 .td_module_16 .item-details {
  margin-left: 0px;
}
.page-id-21427 .td_module_16 .td-module-comments {
  display: none;
}
.page-id-2178 .td_module_8 .td-module-comments {
  display: none;
}
.page-id-6722 .td_module_8 .td-module-comments {
  display: none;
}
.page-id-2192 .td_module_8 .td-module-comments {
  display: none;
}
.page-id-2188 .td_module_8 .td-module-comments {
  display: none;
}
.page-id-2180 .td_module_8 .td-module-comments {
  display: none;
}
.page-id-2185 .td_module_8 .td-module-comments {
  display: none;
}
.page-id-219524 .td_module_8 .td-module-comments {
  display: none;
}
.desk {
  display: block !important;
}
.mobi {
  display: none !important;
}
@media only screen and (max-width: 672px) {
  .desk {
    display: none !important;
  }
  .mobi {
    display: block !important;
  }
}
</style>	<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({
          google_ad_client: "ca-pub-9133447367964563",
          enable_page_level_ads: true
     });
</script>
</head>

<body class="home page-template-default page page-id-601037 daily-excelsior-2 global-block-template-1 td-animation-stack-type0 td-full-layout" itemscope="itemscope" itemtype="https://schema.org/WebPage">

        <div class="td-scroll-up"><i class="td-icon-menu-up"></i></div>    
    <div class="td-menu-background"></div>
<div id="td-mobile-nav">
    <div class="td-mobile-container">
        <!-- mobile menu top section -->
        <div class="td-menu-socials-wrap">
            <!-- socials -->
            <div class="td-menu-socials">
                
        <span class="td-social-icon-wrap">
            <a target="_blank" href="https://www.facebook.com/dailyexcelsior" title="Facebook">
                <i class="td-icon-font td-icon-facebook"></i>
            </a>
        </span>
        <span class="td-social-icon-wrap">
            <a target="_blank" href="https://www.instagram.com/dailyexcelsior/" title="Instagram">
                <i class="td-icon-font td-icon-instagram"></i>
            </a>
        </span>
        <span class="td-social-icon-wrap">
            <a target="_blank" href="http://thedailyexcelsior.tumblr.com/" title="Tumblr">
                <i class="td-icon-font td-icon-tumblr"></i>
            </a>
        </span>
        <span class="td-social-icon-wrap">
            <a target="_blank" href="https://twitter.com/dailyexcelsior1" title="Twitter">
                <i class="td-icon-font td-icon-twitter"></i>
            </a>
        </span>
        <span class="td-social-icon-wrap">
            <a target="_blank" href="https://www.youtube.com/channel/UCT4ZAqOV3-2s5pKnBEhh4fw" title="Youtube">
                <i class="td-icon-font td-icon-youtube"></i>
            </a>
        </span>            </div>
            <!-- close button -->
            <div class="td-mobile-close">
                <a href="#"><i class="td-icon-close-mobile"></i></a>
            </div>
        </div>

        <!-- login section -->
        
        <!-- menu section -->
        <div class="td-mobile-content">
            <div class="menu-main-menu-container"><ul id="menu-main-menu" class="td-mobile-main-menu"><li id="menu-item-663844" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-601037 current_page_item menu-item-first menu-item-663844"><a href="https://www.dailyexcelsior.com/">Home</a></li>
<li id="menu-item-601277" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-601277"><a href="https://www.dailyexcelsior.com/state/">State</a></li>
<li id="menu-item-601285" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-601285"><a href="https://www.dailyexcelsior.com/national-news/">National</a></li>
<li id="menu-item-601288" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-601288"><a href="https://www.dailyexcelsior.com/business-news/">Business</a></li>
<li id="menu-item-601186" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-601186"><a href="https://www.dailyexcelsior.com/edit/">Opinion</a></li>
<li id="menu-item-601292" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-601292"><a href="https://www.dailyexcelsior.com/sports/">Sports</a></li>
<li id="menu-item-601295" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-601295"><a href="https://www.dailyexcelsior.com/international/">International</a></li>
<li id="menu-item-601201" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-601201"><a href="#">horoscope<i class="td-icon-menu-right td-element-after"></i></a>
<ul class="sub-menu">
	<li id="menu-item-601187" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-601187"><a href="https://www.dailyexcelsior.com/daily-horoscope/">Daily Horoscope</a></li>
	<li id="menu-item-601188" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-601188"><a href="https://www.dailyexcelsior.com/horoscope/">Weekly Horoscope</a></li>
</ul>
</li>
<li id="menu-item-601359" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-601359"><a href="https://www.dailyexcelsior.com/sunday-magazine/">Sunday Magazine</a></li>
<li id="menu-item-601202" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-601202"><a href="https://www.dailyexcelsior.com/photo-gallery/">Photo Gallery</a></li>
<li id="menu-item-601604" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-601604"><a href="http://excelsiornews.com/">Videos</a></li>
</ul></div>        </div>
    </div>

    <!-- register/login section -->
    </div>    <div class="td-search-background"></div>
<div class="td-search-wrap-mob">
	<div class="td-drop-down-search" aria-labelledby="td-header-search-button">
		<form method="get" class="td-search-form" action="https://www.dailyexcelsior.com/">
			<!-- close button -->
			<div class="td-search-close">
				<a href="#"><i class="td-icon-close-mobile"></i></a>
			</div>
			<div role="search" class="td-search-input">
				<span>Search</span>
				<input id="td-header-search-mob" type="text" value="" name="s" autocomplete="off" />
			</div>
		</form>
		<div id="td-aj-search-mob"></div>
	</div>
</div>    
    
    <div id="td-outer-wrap" class="td-theme-wrap">
    
        <!--
Header style 1
-->


<div class="td-header-wrap td-header-style-1 ">
    
    <div class="td-header-top-menu-full td-container-wrap ">
        <div class="td-container td-header-row td-header-top-menu">
            
    <div class="top-bar-style-1">
        
<div class="td-header-sp-top-menu">


	</div>
        <!--/**
* Date & Time + main links
*/-->
<div id="timeTop">
Mon December 16, 2019 &nbsp;|&nbsp; Updated 03:54 PM IST  &nbsp; | <a href="https://www.dailyexcelsior.com">Home</a> | <a href="https://www.dailyexcelsior.com/sitemap/">Sitemap</a> | <a href="https://www.dailyexcelsior.com/feed/">Rss Feed</a>
 </div>


<div class="td-header-sp-top-widget">
            <div class="td-search-btns-wrap">
            <a id="td-header-search-button" href="#" role="button" class="dropdown-toggle " data-toggle="dropdown"><i class="td-icon-search"></i></a>
        </div>


        <div class="td-drop-down-search" aria-labelledby="td-header-search-button">
            <form method="get" class="td-search-form" action="https://www.dailyexcelsior.com/">
                <div role="search" class="td-head-form-search-wrap">
                    <input id="td-header-search" type="text" value="" name="s" autocomplete="off" /><input class="wpb_button wpb_btn-inverse btn" type="submit" id="td-header-search-top" value="Search" />
                </div>
            </form>
            <div id="td-aj-search"></div>
        </div>
    
    
        
        <span class="td-social-icon-wrap">
            <a target="_blank" href="https://www.facebook.com/dailyexcelsior" title="Facebook">
                <i class="td-icon-font td-icon-facebook"></i>
            </a>
        </span>
        <span class="td-social-icon-wrap">
            <a target="_blank" href="https://www.instagram.com/dailyexcelsior/" title="Instagram">
                <i class="td-icon-font td-icon-instagram"></i>
            </a>
        </span>
        <span class="td-social-icon-wrap">
            <a target="_blank" href="http://thedailyexcelsior.tumblr.com/" title="Tumblr">
                <i class="td-icon-font td-icon-tumblr"></i>
            </a>
        </span>
        <span class="td-social-icon-wrap">
            <a target="_blank" href="https://twitter.com/dailyexcelsior1" title="Twitter">
                <i class="td-icon-font td-icon-twitter"></i>
            </a>
        </span>
        <span class="td-social-icon-wrap">
            <a target="_blank" href="https://www.youtube.com/channel/UCT4ZAqOV3-2s5pKnBEhh4fw" title="Youtube">
                <i class="td-icon-font td-icon-youtube"></i>
            </a>
        </span>    </div>    </div>

<!-- LOGIN MODAL -->
        </div>
    </div>

    <div class="td-banner-wrap-full td-logo-wrap-full td-container-wrap ">
        <div class="td-container td-header-row td-header-header">
            <div class="td-header-sp-logo">
                <h1 class="td-logo">            <a class="td-main-logo" href="https://www.dailyexcelsior.com/">
                <img src="/wp-content/uploads/2018/05/final-logo-300x51.jpg" alt=""/>
                <span class="td-visual-hidden">Jammu Kashmir Latest News | Tourism | Breaking News J&amp;K</span>
            </a>
        </h1><span class="logo-img">
                <a href="/54years/"><img src="/wp-content/themes/Newspaper-child/parts/header/img/excellence.png" /></a>
                </span>
            </div>
			
                            <div class="td-header-sp-recs">
                    <div class="td-header-rec-wrap">
    
 <!-- A generated by theme --> 

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><div class="td-g-rec td-g-rec-id-header td_uid_1_5df75b5d552ac_rand td_block_template_1 ">
<script type="text/javascript">
var td_screen_width = window.innerWidth;

                    if ( td_screen_width >= 1140 ) {
                        /* large monitors */
                        document.write('<ins class="adsbygoogle" style="display:inline-block;width:728px;height:90px" data-ad-client="ca-pub-9133447367964563" data-ad-slot="9264089776"></ins>');
                        (adsbygoogle = window.adsbygoogle || []).push({});
                    }
            
	                    if ( td_screen_width >= 1019  && td_screen_width < 1140 ) {
	                        /* landscape tablets */
                        document.write('<ins class="adsbygoogle" style="display:inline-block;width:468px;height:60px" data-ad-client="ca-pub-9133447367964563" data-ad-slot="9264089776"></ins>');
	                        (adsbygoogle = window.adsbygoogle || []).push({});
	                    }
	                
                    if ( td_screen_width >= 768  && td_screen_width < 1019 ) {
                        /* portrait tablets */
                        document.write('<ins class="adsbygoogle" style="display:inline-block;width:468px;height:60px" data-ad-client="ca-pub-9133447367964563" data-ad-slot="9264089776"></ins>');
                        (adsbygoogle = window.adsbygoogle || []).push({});
                    }
                </script>
</div>

 <!-- end A --> 


</div>                </div>
                    </div>
    </div>

    <div class="td-header-menu-wrap-full td-container-wrap ">
        
        <div class="td-header-menu-wrap td-header-gradient td-header-menu-no-search">
            <div class="td-container td-header-row td-header-main-menu">
                <div id="td-header-menu" role="navigation">
    <div id="td-top-mobile-toggle"><a href="#"><i class="td-icon-font td-icon-mobile"></i></a></div>
    <div class="td-main-menu-logo td-logo-in-header">
        		<a class="td-mobile-logo td-sticky-disable" href="https://www.dailyexcelsior.com/">
			<img class="td-retina-data" data-retina="/wp-content/uploads/2018/09/final-logo-300x51.jpg" src="/wp-content/uploads/2018/09/final-logo-300x51.jpg" alt=""/>
		</a>
			<a class="td-header-logo td-sticky-disable" href="https://www.dailyexcelsior.com/">
			<img src="/wp-content/uploads/2018/05/final-logo-300x51.jpg" alt=""/>
		</a>
	    </div>
    <div class="menu-main-menu-container"><ul id="menu-main-menu-1" class="sf-menu"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-601037 current_page_item menu-item-first td-menu-item td-normal-menu menu-item-663844"><a href="https://www.dailyexcelsior.com/">Home</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page td-menu-item td-normal-menu menu-item-601277"><a href="https://www.dailyexcelsior.com/state/">State</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page td-menu-item td-normal-menu menu-item-601285"><a href="https://www.dailyexcelsior.com/national-news/">National</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page td-menu-item td-normal-menu menu-item-601288"><a href="https://www.dailyexcelsior.com/business-news/">Business</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page td-menu-item td-normal-menu menu-item-601186"><a href="https://www.dailyexcelsior.com/edit/">Opinion</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page td-menu-item td-normal-menu menu-item-601292"><a href="https://www.dailyexcelsior.com/sports/">Sports</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page td-menu-item td-normal-menu menu-item-601295"><a href="https://www.dailyexcelsior.com/international/">International</a></li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children td-menu-item td-normal-menu menu-item-601201"><a href="#">horoscope</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-post_type menu-item-object-page td-menu-item td-normal-menu menu-item-601187"><a href="https://www.dailyexcelsior.com/daily-horoscope/">Daily Horoscope</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page td-menu-item td-normal-menu menu-item-601188"><a href="https://www.dailyexcelsior.com/horoscope/">Weekly Horoscope</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-post_type menu-item-object-page td-menu-item td-normal-menu menu-item-601359"><a href="https://www.dailyexcelsior.com/sunday-magazine/">Sunday Magazine</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page td-menu-item td-normal-menu menu-item-601202"><a href="https://www.dailyexcelsior.com/photo-gallery/">Photo Gallery</a></li>
<li class="menu-item menu-item-type-custom menu-item-object-custom td-menu-item td-normal-menu menu-item-601604"><a href="http://excelsiornews.com/">Videos</a></li>
</ul></div></div>


    <div class="td-search-wrapper">
        <div id="td-top-search">
            <!-- Search -->
            <div class="header-search-wrap">
                <div class="dropdown header-search">
                    <a id="td-header-search-button-mob" href="#" role="button" class="dropdown-toggle " data-toggle="dropdown"><i class="td-icon-search"></i></a>
                </div>
            </div>
        </div>
    </div>
            </div>
        </div>
    </div>

	<div class="td-container"> 
		<div class="tren-now">
		<div id="td_uid_1_5df75b5d5db78" class="tdc-row"><div class="vc_row td_uid_2_5df75b5d5dbc6_rand  wpb_row td-pb-row" ><div class="vc_column td_uid_3_5df75b5d5dee9_rand  wpb_column vc_column_container tdc-column td-pb-span12"><div class="wpb_wrapper"><div class="td_block_wrap td_block_trending_now td_uid_4_5df75b5d5e30f_rand td-pb-border-top  reb-btn-n td_block_template_1"  data-td-block-uid="td_uid_4_5df75b5d5e30f" ><script>var block_td_uid_4_5df75b5d5e30f = new tdBlock();
block_td_uid_4_5df75b5d5e30f.id = "td_uid_4_5df75b5d5e30f";
block_td_uid_4_5df75b5d5e30f.atts = '{"category_id":"39","el_class":" reb-btn-n","navigation":"","style":"","header_text_color":"","header_color":"","articles_color":"","next_prev_color":"","next_prev_border_color":"","separator":"","post_ids":"","category_ids":"","tag_slug":"","autors_id":"","installed_post_types":"","sort":"","limit":"5","offset":"","css":"","tdc_css":"","block_template_id":"","td_column_number":3,"ajax_pagination_infinite_stop":"","td_ajax_preloading":"","td_ajax_filter_type":"","td_filter_default_txt":"","td_ajax_filter_ids":"","color_preset":"","ajax_pagination":"","border_top":"","class":"td_uid_4_5df75b5d5e30f_rand","tdc_css_class":"td_uid_4_5df75b5d5e30f_rand","tdc_css_class_style":"td_uid_4_5df75b5d5e30f_rand_style"}';
block_td_uid_4_5df75b5d5e30f.td_column_number = "3";
block_td_uid_4_5df75b5d5e30f.block_type = "td_block_trending_now";
block_td_uid_4_5df75b5d5e30f.post_count = "5";
block_td_uid_4_5df75b5d5e30f.found_posts = "32081";
block_td_uid_4_5df75b5d5e30f.header_color = "";
block_td_uid_4_5df75b5d5e30f.ajax_pagination_infinite_stop = "";
block_td_uid_4_5df75b5d5e30f.max_num_pages = "6417";
tdBlocksArray.push(block_td_uid_4_5df75b5d5e30f);
</script><div id=td_uid_4_5df75b5d5e30f class="td_block_inner">

	<div class="td-block-row"><div class="td-trending-now-wrapper" id="td_uid_4_5df75b5d5e30f" data-start=""><div class="td-trending-now-title">Trending Now</div><div class="td-trending-now-display-area">
        <div class="td_module_trending_now td-trending-now-post-0 td-trending-now-post">

            <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/goyal-agrees-for-regular-train-services-from-jammu-to-chandigarh-via-amritsar/" rel="bookmark" title="Goyal agrees for regular train services from Jammu to Chandigarh via Amritsar">Goyal agrees for regular train services from Jammu to Chandigarh via Amritsar</a></h3>
        </div>

        
        <div class="td_module_trending_now td-trending-now-post-1 td-trending-now-post">

            <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/crpf-dig-among-2-killed-as-boulder-falls-on-vehicle-nh-again-blocked/" rel="bookmark" title="CRPF DIG among 2 killed as boulder falls on vehicle, NH again blocked">CRPF DIG among 2 killed as boulder falls on vehicle, NH again blocked</a></h3>
        </div>

        
        <div class="td_module_trending_now td-trending-now-post-2 td-trending-now-post">

            <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/bid-to-alter-demography-identity-of-locals-by-lifting-ban-on-sale-of-land/" rel="bookmark" title="Bid to alter demography, identity of locals by lifting ban on sale of land">Bid to alter demography, identity of locals by lifting ban on sale of land</a></h3>
        </div>

        
        <div class="td_module_trending_now td-trending-now-post-3 td-trending-now-post">

            <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/majority-of-courts-in-jk-ladakh-uts-lack-cctv-surveillance/" rel="bookmark" title="Majority of courts in J&#038;K, Ladakh  UTs lack CCTV surveillance">Majority of courts in J&#038;K, Ladakh  UTs lack CCTV surveillance</a></h3>
        </div>

        
        <div class="td_module_trending_now td-trending-now-post-4 td-trending-now-post">

            <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/over-60-villages-face-water-scarcity-in-south-kashmir/" rel="bookmark" title="Over 60 villages face water scarcity in South Kashmir">Over 60 villages face water scarcity in South Kashmir</a></h3>
        </div>

        </div><div class="td-next-prev-wrap"><a href="#"
                                  class="td_ajax-prev-pagex td-trending-now-nav-left"
                                  data-block-id="td_uid_4_5df75b5d5e30f"
                                  data-moving="left"
                                  data-control-start=""><i class="td-icon-menu-left"></i></a><a href="#"
                                  class="td_ajax-next-pagex td-trending-now-nav-right"
                                  data-block-id="td_uid_4_5df75b5d5e30f"
                                  data-moving="right"
                                  data-control-start=""><i class="td-icon-menu-right"></i></a></div></div></div><!--./row-fluid--></div></div> <!-- ./block --></div></div></div></div>
		<script>

			jQuery(window).load(function () {
				jQuery('body').find('#td_uid_1_5df75b5d5db78 .td-element-style').each(function (index, element) {
					jQuery(element).css('opacity', 1);
					return;
				});
			});

		</script>

		
			<script>

				jQuery(window).ready(function () {

					// We need timeout because the content must be rendered and interpreted on client
					setTimeout(function () {

						var $content = jQuery('body').find('#tdc-live-iframe'),
							refWindow = undefined;

						if ($content.length) {
							$content = $content.contents();
							refWindow = document.getElementById('tdc-live-iframe').contentWindow || document.getElementById('tdc-live-iframe').contentDocument;

						} else {
							$content = jQuery('body');
							refWindow = window;
						}

						$content.find('#td_uid_1_5df75b5d5db78 .td-element-style').each(function (index, element) {
							jQuery(element).css('opacity', 1);
							return;
						});
					});

				}, 200);
			</script>

					<a href="http://epaper.dailyexcelsior.com/"><div class="tren-now-btn reb-btn-n">E-Paper</div></a>
		</div>
	</div>
	
</div>        
            <div class="td-main-content-wrap td-main-page-wrap td-container-wrap">
                <div class="tdc-content-wrap">
                    <div id="td_uid_3_5df75b5dc4365" class="tdc-row"><div class="vc_row td_uid_5_5df75b5dc43b4_rand  wpb_row td-pb-row" ><div class="vc_column td_uid_6_5df75b5dc46b8_rand  wpb_column vc_column_container tdc-column td-pb-span12"><div class="wpb_wrapper"></div></div></div></div>
		<script>

			jQuery(window).load(function () {
				jQuery('body').find('#td_uid_3_5df75b5dc4365 .td-element-style').each(function (index, element) {
					jQuery(element).css('opacity', 1);
					return;
				});
			});

		</script>

		
			<script>

				jQuery(window).ready(function () {

					// We need timeout because the content must be rendered and interpreted on client
					setTimeout(function () {

						var $content = jQuery('body').find('#tdc-live-iframe'),
							refWindow = undefined;

						if ($content.length) {
							$content = $content.contents();
							refWindow = document.getElementById('tdc-live-iframe').contentWindow || document.getElementById('tdc-live-iframe').contentDocument;

						} else {
							$content = jQuery('body');
							refWindow = window;
						}

						$content.find('#td_uid_3_5df75b5dc4365 .td-element-style').each(function (index, element) {
							jQuery(element).css('opacity', 1);
							return;
						});
					});

				}, 200);
			</script>

			<div id="td_uid_5_5df75b5dc4817" class="tdc-row"><div class="vc_row td_uid_7_5df75b5dc485f_rand  wpb_row td-pb-row" ><div class="vc_column td_uid_8_5df75b5dc4c02_rand  wpb_column vc_column_container tdc-column td-pb-span8"><div class="wpb_wrapper"><div class="td_block_wrap td_block_slide td_uid_9_5df75b5dc52f0_rand td-pb-border-top td_block_template_1"  data-td-block-uid="td_uid_9_5df75b5dc52f0" ><script>var block_td_uid_9_5df75b5dc52f0 = new tdBlock();
block_td_uid_9_5df75b5dc52f0.id = "td_uid_9_5df75b5dc52f0";
block_td_uid_9_5df75b5dc52f0.atts = '{"limit":"4","td_filter_default_txt":"All","sort":"","category_id":"106","autoplay":"5","separator":"","custom_title":"","custom_url":"","block_template_id":"","post_ids":"","category_ids":"","tag_slug":"","autors_id":"","installed_post_types":"","offset":"","el_class":"","td_ajax_filter_type":"","td_ajax_filter_ids":"","td_ajax_preloading":"","f_header_font_header":"","f_header_font_title":"Block header","f_header_font_reset":"","f_header_font_family":"","f_header_font_size":"","f_header_font_line_height":"","f_header_font_style":"","f_header_font_weight":"","f_header_font_transform":"","f_header_font_spacing":"","f_header_":"","f_ajax_font_title":"Ajax categories","f_ajax_font_reset":"","f_ajax_font_family":"","f_ajax_font_size":"","f_ajax_font_line_height":"","f_ajax_font_style":"","f_ajax_font_weight":"","f_ajax_font_transform":"","f_ajax_font_spacing":"","f_ajax_":"","f_more_font_title":"Load more button","f_more_font_reset":"","f_more_font_family":"","f_more_font_size":"","f_more_font_line_height":"","f_more_font_style":"","f_more_font_weight":"","f_more_font_transform":"","f_more_font_spacing":"","f_more_":"","msf_title_font_header":"","msf_title_font_title":"Article title","msf_title_font_reset":"","msf_title_font_family":"","msf_title_font_size":"","msf_title_font_line_height":"","msf_title_font_style":"","msf_title_font_weight":"","msf_title_font_transform":"","msf_title_font_spacing":"","msf_title_":"","msf_cat_font_title":"Article category tag","msf_cat_font_reset":"","msf_cat_font_family":"","msf_cat_font_size":"","msf_cat_font_line_height":"","msf_cat_font_style":"","msf_cat_font_weight":"","msf_cat_font_transform":"","msf_cat_font_spacing":"","msf_cat_":"","msf_meta_font_title":"Article meta info","msf_meta_font_reset":"","msf_meta_font_family":"","msf_meta_font_size":"","msf_meta_font_line_height":"","msf_meta_font_style":"","msf_meta_font_weight":"","msf_meta_font_transform":"","msf_meta_font_spacing":"","msf_meta_":"","css":"","tdc_css":"","td_column_number":2,"header_color":"","ajax_pagination_infinite_stop":"","color_preset":"","ajax_pagination":"","border_top":"","class":"td_uid_9_5df75b5dc52f0_rand","tdc_css_class":"td_uid_9_5df75b5dc52f0_rand","tdc_css_class_style":"td_uid_9_5df75b5dc52f0_rand_style"}';
block_td_uid_9_5df75b5dc52f0.td_column_number = "2";
block_td_uid_9_5df75b5dc52f0.block_type = "td_block_slide";
block_td_uid_9_5df75b5dc52f0.post_count = "4";
block_td_uid_9_5df75b5dc52f0.found_posts = "8386";
block_td_uid_9_5df75b5dc52f0.header_color = "";
block_td_uid_9_5df75b5dc52f0.ajax_pagination_infinite_stop = "";
block_td_uid_9_5df75b5dc52f0.max_num_pages = "2097";
tdBlocksArray.push(block_td_uid_9_5df75b5dc52f0);
</script><div class="td-block-title-wrap"></div><div id=td_uid_9_5df75b5dc52f0 class="td_block_inner"><div id="td_uid_10_5df75b5df3fc0" class="td-theme-slider iosSlider-col-2 td_mod_wrap"><div class="td-slider "><div id="td_uid_10_5df75b5df3fc0_item_0" class = "td_module_slide td-animation-stack td-image-gradient"><div class="td-module-thumb"><a href="https://www.dailyexcelsior.com/snow-clearance-work-in-progress-at-patnitop-excelsior-parvez-mir/" rel="bookmark" class="td-image-wrap" title="Snow clearance work in progress at Patnitop. 	-Excelsior/Parvez Mir"><img width="696" height="383" class="entry-thumb" src="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/page1-3-7-696x383.jpg" srcset="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/page1-3-7-696x383.jpg 696w, https://www.dailyexcelsior.com/wp-content/uploads/2019/12/page1-3-7.jpg 1392w" sizes="(-webkit-min-device-pixel-ratio: 2) 1392px, (min-resolution: 192dpi) 1392px, 696px" alt="Snow clearance work in progress at Patnitop. -Excelsior/Parvez Mir" title="Snow clearance work in progress at Patnitop. 	-Excelsior/Parvez Mir"/></a></div><div class="td-slide-meta"><h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/snow-clearance-work-in-progress-at-patnitop-excelsior-parvez-mir/" rel="bookmark" title="Snow clearance work in progress at Patnitop. 	-Excelsior/Parvez Mir">Snow clearance work in progress at Patnitop. 	-Excelsior/Parvez Mir</a></h3><div class="td-module-meta-info"><span class="td-post-author-name"><a href="https://www.dailyexcelsior.com/author/admin/">Daily Excelsior</a> <span>-</span> </span><span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-16T01:19:07+05:30" >16/12/2019</time></span></div></div></div><div id="td_uid_10_5df75b5df3fc0_item_1" class = "td_module_slide td-animation-stack td-image-gradient"><div class="td-module-thumb"><a href="https://www.dailyexcelsior.com/crpf-digs-damaged-scorpio-vehicle-lying-on-highway-near-khooni-nallah-in-ramban-excelsior-parvez-mir/" rel="bookmark" class="td-image-wrap" title="CRPF DIG’s damaged Scorpio vehicle lying on highway near Khooni Nallah in Ramban. 	-Excelsior/Parvez Mir"><img width="696" height="385" class="entry-thumb" src="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/page1-2-7-696x385.jpg" srcset="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/page1-2-7-696x385.jpg 696w, https://www.dailyexcelsior.com/wp-content/uploads/2019/12/page1-2-7.jpg 1392w" sizes="(-webkit-min-device-pixel-ratio: 2) 1392px, (min-resolution: 192dpi) 1392px, 696px" alt="CRPF DIG’s damaged Scorpio vehicle lying on highway near Khooni Nallah in Ramban. -Excelsior/Parvez Mir" title="CRPF DIG’s damaged Scorpio vehicle lying on highway near Khooni Nallah in Ramban. 	-Excelsior/Parvez Mir"/></a></div><div class="td-slide-meta"><h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/crpf-digs-damaged-scorpio-vehicle-lying-on-highway-near-khooni-nallah-in-ramban-excelsior-parvez-mir/" rel="bookmark" title="CRPF DIG’s damaged Scorpio vehicle lying on highway near Khooni Nallah in Ramban. 	-Excelsior/Parvez Mir">CRPF DIG’s damaged Scorpio vehicle lying on highway near Khooni Nallah in Ramban. 	-Excelsior/Parvez Mir</a></h3><div class="td-module-meta-info"><span class="td-post-author-name"><a href="https://www.dailyexcelsior.com/author/admin/">Daily Excelsior</a> <span>-</span> </span><span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-16T01:18:39+05:30" >16/12/2019</time></span></div></div></div><div id="td_uid_10_5df75b5df3fc0_item_2" class = "td_module_slide td-animation-stack td-image-gradient"><div class="td-module-thumb"><a href="https://www.dailyexcelsior.com/a-view-of-heavy-snowfall-at-patnitop/" rel="bookmark" class="td-image-wrap" title="A view of heavy snowfall at Patnitop."><img width="696" height="385" class="entry-thumb" src="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/page1-14-696x385.jpg" srcset="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/page1-14-696x385.jpg 696w, https://www.dailyexcelsior.com/wp-content/uploads/2019/12/page1-14.jpg 1392w" sizes="(-webkit-min-device-pixel-ratio: 2) 1392px, (min-resolution: 192dpi) 1392px, 696px" alt="A view of heavy snowfall at Patnitop." title="A view of heavy snowfall at Patnitop."/></a></div><div class="td-slide-meta"><h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/a-view-of-heavy-snowfall-at-patnitop/" rel="bookmark" title="A view of heavy snowfall at Patnitop.">A view of heavy snowfall at Patnitop.</a></h3><div class="td-module-meta-info"><span class="td-post-author-name"><a href="https://www.dailyexcelsior.com/author/admin/">Daily Excelsior</a> <span>-</span> </span><span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-16T01:18:13+05:30" >16/12/2019</time></span></div></div></div><div id="td_uid_10_5df75b5df3fc0_item_3" class = "td_module_slide td-animation-stack td-image-gradient"><div class="td-module-thumb"><a href="https://www.dailyexcelsior.com/top-congress-leaders-at-ramlila-maidan-in-new-delhi-on-saturday/" rel="bookmark" class="td-image-wrap" title="Top Congress leaders at Ramlila Maidan in New Delhi on Saturday."><img width="696" height="385" class="entry-thumb" src="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/p-1-2-696x385.jpg" srcset="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/p-1-2-696x385.jpg 696w, https://www.dailyexcelsior.com/wp-content/uploads/2019/12/p-1-2.jpg 1392w" sizes="(-webkit-min-device-pixel-ratio: 2) 1392px, (min-resolution: 192dpi) 1392px, 696px" alt="Top Congress leaders at Ramlila Maidan in New Delhi on Saturday." title="Top Congress leaders at Ramlila Maidan in New Delhi on Saturday."/></a></div><div class="td-slide-meta"><h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/top-congress-leaders-at-ramlila-maidan-in-new-delhi-on-saturday/" rel="bookmark" title="Top Congress leaders at Ramlila Maidan in New Delhi on Saturday.">Top Congress leaders at Ramlila Maidan in New Delhi on Saturday.</a></h3><div class="td-module-meta-info"><span class="td-post-author-name"><a href="https://www.dailyexcelsior.com/author/admin/">Daily Excelsior</a> <span>-</span> </span><span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-15T01:01:17+05:30" >15/12/2019</time></span></div></div></div></div><i class = "td-icon-left prevButton"></i><i class = "td-icon-right nextButton"></i></div></div></div> <!-- ./block1 --><div class="td_block_wrap td_block_7 td_uid_11_5df75b5e1c19f_rand td-pb-border-top full-btn reb-btn-n td_block_template_1 td-column-2 td_block_padding"  data-td-block-uid="td_uid_11_5df75b5e1c19f" >
<style>

/* inline tdc_css att */

.td_uid_11_5df75b5e1c19f_rand{
margin-top:50px !important;
margin-bottom:0px !important;
}

</style><script>var block_td_uid_11_5df75b5e1c19f = new tdBlock();
block_td_uid_11_5df75b5e1c19f.id = "td_uid_11_5df75b5e1c19f";
block_td_uid_11_5df75b5e1c19f.atts = '{"custom_title":"Today\u0027s Stories","td_filter_default_txt":"All","category_id":"39","ajax_pagination":"","offset":"","sort":"","limit":"10","block_template_id":"td_block_template_1","tdc_css":"eyJhbGwiOnsibWFyZ2luLXRvcCI6IjUwIiwibWFyZ2luLWJvdHRvbSI6IjAiLCJkaXNwbGF5IjoiIn19","el_class":"full-btn reb-btn-n","separator":"","custom_url":"","m6_tl":"","post_ids":"","category_ids":"","tag_slug":"","autors_id":"","installed_post_types":"","td_ajax_filter_type":"","td_ajax_filter_ids":"","td_ajax_preloading":"","f_header_font_header":"","f_header_font_title":"Block header","f_header_font_reset":"","f_header_font_family":"","f_header_font_size":"","f_header_font_line_height":"","f_header_font_style":"","f_header_font_weight":"","f_header_font_transform":"","f_header_font_spacing":"","f_header_":"","f_ajax_font_title":"Ajax categories","f_ajax_font_reset":"","f_ajax_font_family":"","f_ajax_font_size":"","f_ajax_font_line_height":"","f_ajax_font_style":"","f_ajax_font_weight":"","f_ajax_font_transform":"","f_ajax_font_spacing":"","f_ajax_":"","f_more_font_title":"Load more button","f_more_font_reset":"","f_more_font_family":"","f_more_font_size":"","f_more_font_line_height":"","f_more_font_style":"","f_more_font_weight":"","f_more_font_transform":"","f_more_font_spacing":"","f_more_":"","m6f_title_font_header":"","m6f_title_font_title":"Article title","m6f_title_font_reset":"","m6f_title_font_family":"","m6f_title_font_size":"","m6f_title_font_line_height":"","m6f_title_font_style":"","m6f_title_font_weight":"","m6f_title_font_transform":"","m6f_title_font_spacing":"","m6f_title_":"","m6f_cat_font_title":"Article category tag","m6f_cat_font_reset":"","m6f_cat_font_family":"","m6f_cat_font_size":"","m6f_cat_font_line_height":"","m6f_cat_font_style":"","m6f_cat_font_weight":"","m6f_cat_font_transform":"","m6f_cat_font_spacing":"","m6f_cat_":"","m6f_meta_font_title":"Article meta info","m6f_meta_font_reset":"","m6f_meta_font_family":"","m6f_meta_font_size":"","m6f_meta_font_line_height":"","m6f_meta_font_style":"","m6f_meta_font_weight":"","m6f_meta_font_transform":"","m6f_meta_font_spacing":"","m6f_meta_":"","ajax_pagination_infinite_stop":"","css":"","td_column_number":2,"header_color":"","color_preset":"","border_top":"","class":"td_uid_11_5df75b5e1c19f_rand","tdc_css_class":"td_uid_11_5df75b5e1c19f_rand","tdc_css_class_style":"td_uid_11_5df75b5e1c19f_rand_style"}';
block_td_uid_11_5df75b5e1c19f.td_column_number = "2";
block_td_uid_11_5df75b5e1c19f.block_type = "td_block_7";
block_td_uid_11_5df75b5e1c19f.post_count = "10";
block_td_uid_11_5df75b5e1c19f.found_posts = "32081";
block_td_uid_11_5df75b5e1c19f.header_color = "";
block_td_uid_11_5df75b5e1c19f.ajax_pagination_infinite_stop = "";
block_td_uid_11_5df75b5e1c19f.max_num_pages = "3209";
tdBlocksArray.push(block_td_uid_11_5df75b5e1c19f);
</script><div class="td-block-title-wrap"><h4 class="block-title td-block-title"><span class="td-pulldown-size">Today&#039;s Stories</span></h4></div><div id=td_uid_11_5df75b5e1c19f class="td_block_inner">

	<div class="td-block-row">

	<div class="td-block-span6">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://www.dailyexcelsior.com/goyal-agrees-for-regular-train-services-from-jammu-to-chandigarh-via-amritsar/" rel="bookmark" class="td-image-wrap" title="Goyal agrees for regular train services from Jammu to Chandigarh via Amritsar"><img width="100" height="70" class="entry-thumb" src="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/page1-4-4-100x70.jpg" srcset="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/page1-4-4-100x70.jpg 100w, https://www.dailyexcelsior.com/wp-content/uploads/2019/12/page1-4-4-218x150.jpg 218w" sizes="(max-width: 100px) 100vw, 100px" alt="" title="Goyal agrees for regular train services from Jammu to Chandigarh via Amritsar"/></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/goyal-agrees-for-regular-train-services-from-jammu-to-chandigarh-via-amritsar/" rel="bookmark" title="Goyal agrees for regular train services from Jammu to Chandigarh via Amritsar">Goyal agrees for regular train services from Jammu to Chandigarh via...</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-16T03:12:02+05:30" >16/12/2019</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span6 -->

	<div class="td-block-span6">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://www.dailyexcelsior.com/crpf-dig-among-2-killed-as-boulder-falls-on-vehicle-nh-again-blocked/" rel="bookmark" class="td-image-wrap" title="CRPF DIG among 2 killed as boulder falls on vehicle, NH again blocked"><img width="100" height="70" class="entry-thumb" src="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/page1-2-7-100x70.jpg" srcset="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/page1-2-7-100x70.jpg 100w, https://www.dailyexcelsior.com/wp-content/uploads/2019/12/page1-2-7-218x150.jpg 218w" sizes="(max-width: 100px) 100vw, 100px" alt="CRPF DIG’s damaged Scorpio vehicle lying on highway near Khooni Nallah in Ramban. -Excelsior/Parvez Mir" title="CRPF DIG among 2 killed as boulder falls on vehicle, NH again blocked"/></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/crpf-dig-among-2-killed-as-boulder-falls-on-vehicle-nh-again-blocked/" rel="bookmark" title="CRPF DIG among 2 killed as boulder falls on vehicle, NH again blocked">CRPF DIG among 2 killed as boulder falls on vehicle, NH...</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-16T03:10:48+05:30" >16/12/2019</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span6 --></div><!--./row-fluid-->

	<div class="td-block-row">

	<div class="td-block-span6">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://www.dailyexcelsior.com/bid-to-alter-demography-identity-of-locals-by-lifting-ban-on-sale-of-land/" rel="bookmark" class="td-image-wrap" title="Bid to alter demography, identity of locals by lifting ban on sale of land"><img width="100" height="70" class="entry-thumb" src="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/Page-111-100x70.jpg" srcset="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/Page-111-100x70.jpg 100w, https://www.dailyexcelsior.com/wp-content/uploads/2019/12/Page-111-218x150.jpg 218w, https://www.dailyexcelsior.com/wp-content/uploads/2019/12/Page-111-534x379.jpg 534w" sizes="(max-width: 100px) 100vw, 100px" alt="" title="Bid to alter demography, identity of locals by lifting ban on sale of land"/></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/bid-to-alter-demography-identity-of-locals-by-lifting-ban-on-sale-of-land/" rel="bookmark" title="Bid to alter demography, identity of locals by lifting ban on sale of land">Bid to alter demography, identity of locals by lifting ban on...</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-16T03:09:05+05:30" >16/12/2019</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span6 -->

	<div class="td-block-span6">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://www.dailyexcelsior.com/majority-of-courts-in-jk-ladakh-uts-lack-cctv-surveillance/" rel="bookmark" class="td-image-wrap" title="Majority of courts in J&#038;K, Ladakh  UTs lack CCTV surveillance"><img width="100" height="70" class="entry-thumb" src="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/Majority-of-courts-in-JK-Ladakh-100x70.jpg" srcset="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/Majority-of-courts-in-JK-Ladakh-100x70.jpg 100w, https://www.dailyexcelsior.com/wp-content/uploads/2019/12/Majority-of-courts-in-JK-Ladakh-218x150.jpg 218w, https://www.dailyexcelsior.com/wp-content/uploads/2019/12/Majority-of-courts-in-JK-Ladakh-530x377.jpg 530w, https://www.dailyexcelsior.com/wp-content/uploads/2019/12/Majority-of-courts-in-JK-Ladakh-534x377.jpg 534w" sizes="(max-width: 100px) 100vw, 100px" alt="" title="Majority of courts in J&#038;K, Ladakh  UTs lack CCTV surveillance"/></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/majority-of-courts-in-jk-ladakh-uts-lack-cctv-surveillance/" rel="bookmark" title="Majority of courts in J&#038;K, Ladakh  UTs lack CCTV surveillance">Majority of courts in J&#038;K, Ladakh  UTs lack CCTV surveillance</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-16T03:08:32+05:30" >16/12/2019</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span6 --></div><!--./row-fluid-->

	<div class="td-block-row">

	<div class="td-block-span6">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://www.dailyexcelsior.com/over-60-villages-face-water-scarcity-in-south-kashmir/" rel="bookmark" class="td-image-wrap" title="Over 60 villages face water scarcity in South Kashmir"><img width="100" height="70" class="entry-thumb" src="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/Over-60-villages-face-water-100x70.jpg" srcset="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/Over-60-villages-face-water-100x70.jpg 100w, https://www.dailyexcelsior.com/wp-content/uploads/2019/12/Over-60-villages-face-water-218x150.jpg 218w, https://www.dailyexcelsior.com/wp-content/uploads/2019/12/Over-60-villages-face-water-530x367.jpg 530w, https://www.dailyexcelsior.com/wp-content/uploads/2019/12/Over-60-villages-face-water-534x367.jpg 534w" sizes="(max-width: 100px) 100vw, 100px" alt="" title="Over 60 villages face water scarcity in South Kashmir"/></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/over-60-villages-face-water-scarcity-in-south-kashmir/" rel="bookmark" title="Over 60 villages face water scarcity in South Kashmir">Over 60 villages face water scarcity in South Kashmir</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-16T03:07:51+05:30" >16/12/2019</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span6 -->

	<div class="td-block-span6">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://www.dailyexcelsior.com/want-detained-jk-leaders-to-come-out-says-madhav/" rel="bookmark" class="td-image-wrap" title="Want detained J&#038;K leaders to come out, says Madhav"><img width="100" height="70" class="entry-thumb" src="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/Want-detained-JK-leaders-to-come-out-says-Madhav-100x70.jpg" srcset="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/Want-detained-JK-leaders-to-come-out-says-Madhav-100x70.jpg 100w, https://www.dailyexcelsior.com/wp-content/uploads/2019/12/Want-detained-JK-leaders-to-come-out-says-Madhav-218x150.jpg 218w" sizes="(max-width: 100px) 100vw, 100px" alt="" title="Want detained J&#038;K leaders to come out, says Madhav"/></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/want-detained-jk-leaders-to-come-out-says-madhav/" rel="bookmark" title="Want detained J&#038;K leaders to come out, says Madhav">Want detained J&#038;K leaders to come out, says Madhav</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-16T03:06:56+05:30" >16/12/2019</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span6 --></div><!--./row-fluid-->

	<div class="td-block-row">

	<div class="td-block-span6">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://www.dailyexcelsior.com/no-proposal-for-art-371-in-jk-mha/" rel="bookmark" class="td-image-wrap" title="No proposal for Art 371 in J&#038;K: MHA"><img width="100" height="70" class="entry-thumb" src="https://www.dailyexcelsior.com/wp-content/themes/Newspaper/images/no-thumb/td_100x70.png" alt=""/></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/no-proposal-for-art-371-in-jk-mha/" rel="bookmark" title="No proposal for Art 371 in J&#038;K: MHA">No proposal for Art 371 in J&#038;K: MHA</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-16T03:05:23+05:30" >16/12/2019</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span6 -->

	<div class="td-block-span6">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://www.dailyexcelsior.com/ann-singh-is-miss-world-2019/" rel="bookmark" class="td-image-wrap" title="Ann Singh is Miss World 2019"><img width="100" height="70" class="entry-thumb" src="https://www.dailyexcelsior.com/wp-content/themes/Newspaper/images/no-thumb/td_100x70.png" alt=""/></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/ann-singh-is-miss-world-2019/" rel="bookmark" title="Ann Singh is Miss World 2019">Ann Singh is Miss World 2019</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-16T03:04:57+05:30" >16/12/2019</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span6 --></div><!--./row-fluid-->

	<div class="td-block-row">

	<div class="td-block-span6">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://www.dailyexcelsior.com/2-children-die-of-asphyxia/" rel="bookmark" class="td-image-wrap" title="2 children die  of asphyxia"><img width="100" height="70" class="entry-thumb" src="https://www.dailyexcelsior.com/wp-content/themes/Newspaper/images/no-thumb/td_100x70.png" alt=""/></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/2-children-die-of-asphyxia/" rel="bookmark" title="2 children die  of asphyxia">2 children die  of asphyxia</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-16T03:03:30+05:30" >16/12/2019</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span6 -->

	<div class="td-block-span6">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://www.dailyexcelsior.com/66-dysps-transferred/" rel="bookmark" class="td-image-wrap" title="66 DySPs  transferred"><img width="100" height="70" class="entry-thumb" src="https://www.dailyexcelsior.com/wp-content/themes/Newspaper/images/no-thumb/td_100x70.png" alt=""/></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/66-dysps-transferred/" rel="bookmark" title="66 DySPs  transferred">66 DySPs  transferred</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-16T03:02:19+05:30" >16/12/2019</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span6 --></div><!--./row-fluid--></div></div> <!-- ./block --><div class="tdm_block td_block_wrap tdm_block_button td_uid_12_5df75b5eadef3_rand tdm-content-horiz-right td-pb-border-top td_block_template_1"  data-td-block-uid="td_uid_12_5df75b5eadef3"     >
<style>

/* inline tdc_css att */

.td_uid_12_5df75b5eadef3_rand{
margin-bottom:50px !important;
}

</style>
<style>

</style><div class="tds-button td-fix-index"><a href="/todays/" class="tds-button1 tdm-btn tdm-btn-sm td_uid_13_5df75b5f79c9f" ><span class="tdm-btn-text">More</span></a></div></div><div class="vc_row_inner td_uid_14_5df75b5f7a917_rand  vc_row vc_inner wpb_row td-pb-row" ><div class="vc_column_inner td_uid_15_5df75b5f7abb6_rand  wpb_column vc_column_container tdc-inner-column td-pb-span12"><div class="vc_column-inner"><div class="wpb_wrapper"><div class="td_block_wrap td_block_9 td_uid_16_5df75b5f7b21d_rand td-pb-border-top latest_news_update full-btn mobi td_block_template_1 td-column-2 td_block_padding td_block_bot_line"  data-td-block-uid="td_uid_16_5df75b5f7b21d" ><script>var block_td_uid_16_5df75b5f7b21d = new tdBlock();
block_td_uid_16_5df75b5f7b21d.id = "td_uid_16_5df75b5f7b21d";
block_td_uid_16_5df75b5f7b21d.atts = '{"custom_title":"Latest News Update","el_class":"latest_news_update full-btn mobi","limit":"6","category_id":"116","separator":"","custom_url":"","block_template_id":"","m8_tl":"","post_ids":"","category_ids":"","tag_slug":"","autors_id":"","installed_post_types":"","sort":"","offset":"","td_ajax_filter_type":"","td_ajax_filter_ids":"","td_filter_default_txt":"All","td_ajax_preloading":"","f_header_font_header":"","f_header_font_title":"Block header","f_header_font_reset":"","f_header_font_family":"","f_header_font_size":"","f_header_font_line_height":"","f_header_font_style":"","f_header_font_weight":"","f_header_font_transform":"","f_header_font_spacing":"","f_header_":"","f_ajax_font_title":"Ajax categories","f_ajax_font_reset":"","f_ajax_font_family":"","f_ajax_font_size":"","f_ajax_font_line_height":"","f_ajax_font_style":"","f_ajax_font_weight":"","f_ajax_font_transform":"","f_ajax_font_spacing":"","f_ajax_":"","f_more_font_title":"Load more button","f_more_font_reset":"","f_more_font_family":"","f_more_font_size":"","f_more_font_line_height":"","f_more_font_style":"","f_more_font_weight":"","f_more_font_transform":"","f_more_font_spacing":"","f_more_":"","m8f_title_font_header":"","m8f_title_font_title":"Article title","m8f_title_font_reset":"","m8f_title_font_family":"","m8f_title_font_size":"","m8f_title_font_line_height":"","m8f_title_font_style":"","m8f_title_font_weight":"","m8f_title_font_transform":"","m8f_title_font_spacing":"","m8f_title_":"","m8f_cat_font_title":"Article category tag","m8f_cat_font_reset":"","m8f_cat_font_family":"","m8f_cat_font_size":"","m8f_cat_font_line_height":"","m8f_cat_font_style":"","m8f_cat_font_weight":"","m8f_cat_font_transform":"","m8f_cat_font_spacing":"","m8f_cat_":"","m8f_meta_font_title":"Article meta info","m8f_meta_font_reset":"","m8f_meta_font_family":"","m8f_meta_font_size":"","m8f_meta_font_line_height":"","m8f_meta_font_style":"","m8f_meta_font_weight":"","m8f_meta_font_transform":"","m8f_meta_font_spacing":"","m8f_meta_":"","ajax_pagination":"","ajax_pagination_infinite_stop":"","css":"","tdc_css":"","td_column_number":2,"header_color":"","color_preset":"","border_top":"","class":"td_uid_16_5df75b5f7b21d_rand","tdc_css_class":"td_uid_16_5df75b5f7b21d_rand","tdc_css_class_style":"td_uid_16_5df75b5f7b21d_rand_style"}';
block_td_uid_16_5df75b5f7b21d.td_column_number = "2";
block_td_uid_16_5df75b5f7b21d.block_type = "td_block_9";
block_td_uid_16_5df75b5f7b21d.post_count = "6";
block_td_uid_16_5df75b5f7b21d.found_posts = "66050";
block_td_uid_16_5df75b5f7b21d.header_color = "";
block_td_uid_16_5df75b5f7b21d.ajax_pagination_infinite_stop = "";
block_td_uid_16_5df75b5f7b21d.max_num_pages = "11009";
tdBlocksArray.push(block_td_uid_16_5df75b5f7b21d);
</script><div class="td-block-title-wrap"><h4 class="block-title td-block-title"><span class="td-pulldown-size">Latest News Update</span></h4></div><div id=td_uid_16_5df75b5f7b21d class="td_block_inner">

	<div class="td-block-row">

	<div class="td-block-span6">

        <div class="td_module_8 td_module_wrap">

            <div class="item-details">
                <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/advance-tax-payment-deadline-for-ne-states-extended-to-dec-31-cbdt/" rel="bookmark" title="Advance tax payment deadline for NE states extended to Dec 31: CBDT">Advance tax payment deadline for NE states extended to Dec 31: CBDT</a></h3>
                <div class="td-module-meta-info">
                                        <span class="td-post-author-name"><a href="https://www.dailyexcelsior.com/author/admin/">Daily Excelsior</a> <span>-</span> </span>                    <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-16T16:11:14+05:30" >16/12/2019</time></span>                                    </div>
            </div>

            
        </div>

        
	</div> <!-- ./td-block-span6 -->

	<div class="td-block-span6">

        <div class="td_module_8 td_module_wrap">

            <div class="item-details">
                <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/bangladesh-marks-49th-victory-day-with-grand-parade-indian-army-band-contingent-participates/" rel="bookmark" title="Bangladesh marks 49th ‘Victory Day’ with grand  parade; Indian Army band contingent participates">Bangladesh marks 49th ‘Victory Day’ with grand  parade; Indian Army band contingent participates</a></h3>
                <div class="td-module-meta-info">
                                        <span class="td-post-author-name"><a href="https://www.dailyexcelsior.com/author/admin/">Daily Excelsior</a> <span>-</span> </span>                    <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-16T16:11:12+05:30" >16/12/2019</time></span>                                    </div>
            </div>

            
        </div>

        
	</div> <!-- ./td-block-span6 --></div><!--./row-fluid-->

	<div class="td-block-row">

	<div class="td-block-span6">

        <div class="td_module_8 td_module_wrap">

            <div class="item-details">
                <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/cbi-seeks-more-time-to-complete-probe-in-rakesh-asthana-bribery-case/" rel="bookmark" title="CBI seeks more time to complete probe in Rakesh Asthana bribery case">CBI seeks more time to complete probe in Rakesh Asthana bribery case</a></h3>
                <div class="td-module-meta-info">
                                        <span class="td-post-author-name"><a href="https://www.dailyexcelsior.com/author/admin/">Daily Excelsior</a> <span>-</span> </span>                    <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-16T16:10:41+05:30" >16/12/2019</time></span>                                    </div>
            </div>

            
        </div>

        
	</div> <!-- ./td-block-span6 -->

	<div class="td-block-span6">

        <div class="td_module_8 td_module_wrap">

            <div class="item-details">
                <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/modi-calls-citizenship-protests-deeply-distressing-asks-people-not-to-allow-vested-interests-to-divide-society/" rel="bookmark" title="Modi calls citizenship protests ‘deeply distressing’, asks people not to allow ‘vested interests’ to divide society">Modi calls citizenship protests ‘deeply distressing’, asks people not to allow ‘vested interests’ to...</a></h3>
                <div class="td-module-meta-info">
                                        <span class="td-post-author-name"><a href="https://www.dailyexcelsior.com/author/admin/">Daily Excelsior</a> <span>-</span> </span>                    <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-16T15:54:01+05:30" >16/12/2019</time></span>                                    </div>
            </div>

            
        </div>

        
	</div> <!-- ./td-block-span6 --></div><!--./row-fluid-->

	<div class="td-block-row">

	<div class="td-block-span6">

        <div class="td_module_8 td_module_wrap">

            <div class="item-details">
                <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/tributes-paid-to-crpf-dig-killed-in-landslide-on-jammu-srinagar-highway/" rel="bookmark" title="Tributes paid to CRPF DIG killed in landslide on Jammu-Srinagar highway">Tributes paid to CRPF DIG killed in landslide on Jammu-Srinagar highway</a></h3>
                <div class="td-module-meta-info">
                                        <span class="td-post-author-name"><a href="https://www.dailyexcelsior.com/author/admin/">Daily Excelsior</a> <span>-</span> </span>                    <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-16T15:51:41+05:30" >16/12/2019</time></span>                                    </div>
            </div>

            
        </div>

        
	</div> <!-- ./td-block-span6 -->

	<div class="td-block-span6">

        <div class="td_module_8 td_module_wrap">

            <div class="item-details">
                <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/lahore-high-court-issues-notice-to-govt-on-musharrafs-plea-to-halt-high-treason-trial/" rel="bookmark" title="Lahore High court issues notice to Govt on Musharraf’s plea to halt high treason trial">Lahore High court issues notice to Govt on Musharraf’s plea to halt high treason...</a></h3>
                <div class="td-module-meta-info">
                                        <span class="td-post-author-name"><a href="https://www.dailyexcelsior.com/author/admin/">Daily Excelsior</a> <span>-</span> </span>                    <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-16T15:44:34+05:30" >16/12/2019</time></span>                                    </div>
            </div>

            
        </div>

        
	</div> <!-- ./td-block-span6 --></div><!--./row-fluid--></div></div> <!-- ./block --><div class="tdm_block td_block_wrap tdm_block_button td_uid_17_5df75b5fe54c0_rand tdm-content-horiz-right td-pb-border-top mobi td_block_template_1"  data-td-block-uid="td_uid_17_5df75b5fe54c0"     >
<style>

/* inline tdc_css att */

.td_uid_17_5df75b5fe54c0_rand{
margin-bottom:50px !important;
}

</style>
<style>

</style><div class="tds-button td-fix-index"><a href="/latest-news/" class="tds-button1 tdm-btn tdm-btn-sm td_uid_18_5df75b6087031" ><span class="tdm-btn-text">More</span></a></div></div></div></div></div></div>
 <!-- A generated by theme --> 

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><div class="td-g-rec td-g-rec-id-custom_ad_1 td_uid_20_5df75b6087f6c_rand td_block_template_1 ">

<style>

/* inline tdc_css att */

.td_uid_20_5df75b6087f6c_rand{
margin-bottom:50px !important;
}

</style><script type="text/javascript">
var td_screen_width = window.innerWidth;

                    if ( td_screen_width >= 1140 ) {
                        /* large monitors */
                        document.write('<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-9133447367964563" data-ad-slot="9264089776"></ins>');
                        (adsbygoogle = window.adsbygoogle || []).push({});
                    }
            
	                    if ( td_screen_width >= 1019  && td_screen_width < 1140 ) {
	                        /* landscape tablets */
                        document.write('<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-9133447367964563" data-ad-slot="9264089776"></ins>');
	                        (adsbygoogle = window.adsbygoogle || []).push({});
	                    }
	                
                    if ( td_screen_width >= 768  && td_screen_width < 1019 ) {
                        /* portrait tablets */
                        document.write('<ins class="adsbygoogle" style="display:inline-block;width:200px;height:200px" data-ad-client="ca-pub-9133447367964563" data-ad-slot="9264089776"></ins>');
                        (adsbygoogle = window.adsbygoogle || []).push({});
                    }
                
                    if ( td_screen_width < 768 ) {
                        /* Phones */
                        document.write('<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-9133447367964563" data-ad-slot="9264089776"></ins>');
                        (adsbygoogle = window.adsbygoogle || []).push({});
                    }
                </script>
</div>

 <!-- end A --> 

<div class="td_block_wrap td_block_7 td_uid_21_5df75b6088956_rand td-pb-border-top td_block_template_1 td-column-2 td_block_padding"  data-td-block-uid="td_uid_21_5df75b6088956" >
<style>

/* inline tdc_css att */

.td_uid_21_5df75b6088956_rand{
margin-bottom:0px !important;
}

</style><script>var block_td_uid_21_5df75b6088956 = new tdBlock();
block_td_uid_21_5df75b6088956.id = "td_uid_21_5df75b6088956";
block_td_uid_21_5df75b6088956.atts = '{"custom_title":"State","limit":"10","category_id":"15","tdc_css":"eyJhbGwiOnsibWFyZ2luLWJvdHRvbSI6IjAiLCJkaXNwbGF5IjoiIn19","separator":"","custom_url":"","block_template_id":"","m6_tl":"","post_ids":"","category_ids":"","tag_slug":"","autors_id":"","installed_post_types":"","sort":"","offset":"","el_class":"","td_ajax_filter_type":"","td_ajax_filter_ids":"","td_filter_default_txt":"All","td_ajax_preloading":"","f_header_font_header":"","f_header_font_title":"Block header","f_header_font_reset":"","f_header_font_family":"","f_header_font_size":"","f_header_font_line_height":"","f_header_font_style":"","f_header_font_weight":"","f_header_font_transform":"","f_header_font_spacing":"","f_header_":"","f_ajax_font_title":"Ajax categories","f_ajax_font_reset":"","f_ajax_font_family":"","f_ajax_font_size":"","f_ajax_font_line_height":"","f_ajax_font_style":"","f_ajax_font_weight":"","f_ajax_font_transform":"","f_ajax_font_spacing":"","f_ajax_":"","f_more_font_title":"Load more button","f_more_font_reset":"","f_more_font_family":"","f_more_font_size":"","f_more_font_line_height":"","f_more_font_style":"","f_more_font_weight":"","f_more_font_transform":"","f_more_font_spacing":"","f_more_":"","m6f_title_font_header":"","m6f_title_font_title":"Article title","m6f_title_font_reset":"","m6f_title_font_family":"","m6f_title_font_size":"","m6f_title_font_line_height":"","m6f_title_font_style":"","m6f_title_font_weight":"","m6f_title_font_transform":"","m6f_title_font_spacing":"","m6f_title_":"","m6f_cat_font_title":"Article category tag","m6f_cat_font_reset":"","m6f_cat_font_family":"","m6f_cat_font_size":"","m6f_cat_font_line_height":"","m6f_cat_font_style":"","m6f_cat_font_weight":"","m6f_cat_font_transform":"","m6f_cat_font_spacing":"","m6f_cat_":"","m6f_meta_font_title":"Article meta info","m6f_meta_font_reset":"","m6f_meta_font_family":"","m6f_meta_font_size":"","m6f_meta_font_line_height":"","m6f_meta_font_style":"","m6f_meta_font_weight":"","m6f_meta_font_transform":"","m6f_meta_font_spacing":"","m6f_meta_":"","ajax_pagination":"","ajax_pagination_infinite_stop":"","css":"","td_column_number":2,"header_color":"","color_preset":"","border_top":"","class":"td_uid_21_5df75b6088956_rand","tdc_css_class":"td_uid_21_5df75b6088956_rand","tdc_css_class_style":"td_uid_21_5df75b6088956_rand_style"}';
block_td_uid_21_5df75b6088956.td_column_number = "2";
block_td_uid_21_5df75b6088956.block_type = "td_block_7";
block_td_uid_21_5df75b6088956.post_count = "10";
block_td_uid_21_5df75b6088956.found_posts = "64802";
block_td_uid_21_5df75b6088956.header_color = "";
block_td_uid_21_5df75b6088956.ajax_pagination_infinite_stop = "";
block_td_uid_21_5df75b6088956.max_num_pages = "6481";
tdBlocksArray.push(block_td_uid_21_5df75b6088956);
</script><div class="td-block-title-wrap"><h4 class="block-title td-block-title"><span class="td-pulldown-size">State</span></h4></div><div id=td_uid_21_5df75b6088956 class="td_block_inner">

	<div class="td-block-row">

	<div class="td-block-span6">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://www.dailyexcelsior.com/nc-urges-pm-to-reach-out-to-jk-people-initiate-dialogue/" rel="bookmark" class="td-image-wrap" title="NC urges PM to reach out to J&#038;K people, initiate dialogue"><img width="100" height="70" class="entry-thumb" src="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/page3-17-100x70.jpg" srcset="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/page3-17-100x70.jpg 100w, https://www.dailyexcelsior.com/wp-content/uploads/2019/12/page3-17-218x150.jpg 218w" sizes="(max-width: 100px) 100vw, 100px" alt="NC Provincial President Devender Singh Rana addressing a press conference in Jammu. -Excelsior/Rakesh" title="NC urges PM to reach out to J&#038;K people, initiate dialogue"/></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/nc-urges-pm-to-reach-out-to-jk-people-initiate-dialogue/" rel="bookmark" title="NC urges PM to reach out to J&#038;K people, initiate dialogue">NC urges PM to reach out to J&#038;K people, initiate dialogue</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-16T03:10:59+05:30" >16/12/2019</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span6 -->

	<div class="td-block-span6">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://www.dailyexcelsior.com/villagers-raise-funds-to-construct-foot-bridge/" rel="bookmark" class="td-image-wrap" title="Villagers raise funds to construct foot-bridge"><img width="100" height="70" class="entry-thumb" src="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/page3-2-10-100x70.jpg" srcset="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/page3-2-10-100x70.jpg 100w, https://www.dailyexcelsior.com/wp-content/uploads/2019/12/page3-2-10-218x150.jpg 218w" sizes="(max-width: 100px) 100vw, 100px" alt="Villagers constructing foot bridge over a nallah in Thannamandi area of Rajouri. -Excelsior/Bhat" title="Villagers raise funds to construct foot-bridge"/></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/villagers-raise-funds-to-construct-foot-bridge/" rel="bookmark" title="Villagers raise funds to construct foot-bridge">Villagers raise funds to construct foot-bridge</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-16T03:10:59+05:30" >16/12/2019</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span6 --></div><!--./row-fluid-->

	<div class="td-block-row">

	<div class="td-block-span6">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://www.dailyexcelsior.com/gurpurab-on-jan-2-nagar-kirtan-on-dec-30-dgpc/" rel="bookmark" class="td-image-wrap" title="Gurpurab on  Jan 2,  ‘Nagar-Kirtan’ on Dec 30: DGPC"><img width="100" height="70" class="entry-thumb" src="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/page3-4-6-100x70.jpg" srcset="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/page3-4-6-100x70.jpg 100w, https://www.dailyexcelsior.com/wp-content/uploads/2019/12/page3-4-6-218x150.jpg 218w" sizes="(max-width: 100px) 100vw, 100px" alt="DGPC members addressing press conference in Jammu on Sunday. -Excelsior/Rakesh" title="Gurpurab on  Jan 2,  ‘Nagar-Kirtan’ on Dec 30: DGPC"/></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/gurpurab-on-jan-2-nagar-kirtan-on-dec-30-dgpc/" rel="bookmark" title="Gurpurab on  Jan 2,  ‘Nagar-Kirtan’ on Dec 30: DGPC">Gurpurab on  Jan 2,  ‘Nagar-Kirtan’ on Dec 30: DGPC</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-16T03:10:56+05:30" >16/12/2019</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span6 -->

	<div class="td-block-span6">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://www.dailyexcelsior.com/mp-cec-fail-to-persuade-agitating-students/" rel="bookmark" class="td-image-wrap" title="MP, CEC fail to persuade agitating students"><img width="100" height="70" class="entry-thumb" src="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/page3-3-7-100x70.jpg" srcset="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/page3-3-7-100x70.jpg 100w, https://www.dailyexcelsior.com/wp-content/uploads/2019/12/page3-3-7-218x150.jpg 218w" sizes="(max-width: 100px) 100vw, 100px" alt="MP Ladakh, Jamyang Tsering Namgyal offering juice to a student leader sitting on hunger strike. -Excelsior/Morup Stanzin" title="MP, CEC fail to persuade agitating students"/></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/mp-cec-fail-to-persuade-agitating-students/" rel="bookmark" title="MP, CEC fail to persuade agitating students">MP, CEC fail to persuade agitating students</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-16T03:10:46+05:30" >16/12/2019</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span6 --></div><!--./row-fluid-->

	<div class="td-block-row">

	<div class="td-block-span6">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://www.dailyexcelsior.com/pk-terms-cab-a-decisive-step-to-respond-to-genocides-on-hindus/" rel="bookmark" class="td-image-wrap" title="PK terms CAB a decisive step to respond to genocides on Hindus"><img width="100" height="70" class="entry-thumb" src="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/page5-7-8-100x70.jpg" srcset="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/page5-7-8-100x70.jpg 100w, https://www.dailyexcelsior.com/wp-content/uploads/2019/12/page5-7-8-218x150.jpg 218w" sizes="(max-width: 100px) 100vw, 100px" alt="Leaders of Panun Kashmir addressing media persons in Jammu on Sunday. –Excelsior/Rakesh" title="PK terms CAB a decisive step to respond to genocides on Hindus"/></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/pk-terms-cab-a-decisive-step-to-respond-to-genocides-on-hindus/" rel="bookmark" title="PK terms CAB a decisive step to respond to genocides on Hindus">PK terms CAB a decisive step to respond to genocides on...</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-16T03:09:55+05:30" >16/12/2019</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span6 -->

	<div class="td-block-span6">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://www.dailyexcelsior.com/focus-on-revival-expansion-of-pashmina-yield-lg-mathur/" rel="bookmark" class="td-image-wrap" title="Focus on revival, expansion of Pashmina yield: LG Mathur"><img width="100" height="70" class="entry-thumb" src="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/page5-1-13-100x70.jpg" srcset="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/page5-1-13-100x70.jpg 100w, https://www.dailyexcelsior.com/wp-content/uploads/2019/12/page5-1-13-218x150.jpg 218w" sizes="(max-width: 100px) 100vw, 100px" alt="Lieutenant Governor Ladakh R K Mathur during visit to Pashmina Goat Farm in Leh on Sunday." title="Focus on revival, expansion of Pashmina yield: LG Mathur"/></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/focus-on-revival-expansion-of-pashmina-yield-lg-mathur/" rel="bookmark" title="Focus on revival, expansion of Pashmina yield: LG Mathur">Focus on revival, expansion of Pashmina yield: LG Mathur</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-16T03:09:55+05:30" >16/12/2019</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span6 --></div><!--./row-fluid-->

	<div class="td-block-row">

	<div class="td-block-span6">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://www.dailyexcelsior.com/dr-pranay-gets-sap-healthcare-summit-business-award/" rel="bookmark" class="td-image-wrap" title="Dr Pranay gets SAP Healthcare  Summit &#038; Business Award"><img width="100" height="70" class="entry-thumb" src="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/page5-2-12-100x70.jpg" srcset="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/page5-2-12-100x70.jpg 100w, https://www.dailyexcelsior.com/wp-content/uploads/2019/12/page5-2-12-218x150.jpg 218w" sizes="(max-width: 100px) 100vw, 100px" alt="Dr Pranay Mahajan receiving award from renowned Justice (Retd) Mahavir S Chauhan at New Delhi." title="Dr Pranay gets SAP Healthcare  Summit &#038; Business Award"/></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/dr-pranay-gets-sap-healthcare-summit-business-award/" rel="bookmark" title="Dr Pranay gets SAP Healthcare  Summit &#038; Business Award">Dr Pranay gets SAP Healthcare  Summit &#038; Business Award</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-16T03:09:29+05:30" >16/12/2019</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span6 -->

	<div class="td-block-span6">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://www.dailyexcelsior.com/central-laws-automatically-applicable-to-uts-of-jk-ladakh-dr-jitendra/" rel="bookmark" class="td-image-wrap" title="Central laws automatically applicable to UTs of J&#038;K, Ladakh: Dr Jitendra"><img width="100" height="70" class="entry-thumb" src="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/Dr-Jitendra-100x70.jpg" srcset="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/Dr-Jitendra-100x70.jpg 100w, https://www.dailyexcelsior.com/wp-content/uploads/2019/12/Dr-Jitendra-218x150.jpg 218w" sizes="(max-width: 100px) 100vw, 100px" alt="Union Minister speaking at an exclusive J&amp;K event at Indian School of Business (ISB), Hyderabad." title="Central laws automatically applicable to UTs of J&#038;K, Ladakh: Dr Jitendra"/></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/central-laws-automatically-applicable-to-uts-of-jk-ladakh-dr-jitendra/" rel="bookmark" title="Central laws automatically applicable to UTs of J&#038;K, Ladakh: Dr Jitendra">Central laws automatically applicable to UTs of J&#038;K, Ladakh: Dr Jitendra</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-16T03:09:28+05:30" >16/12/2019</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span6 --></div><!--./row-fluid-->

	<div class="td-block-row">

	<div class="td-block-span6">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://www.dailyexcelsior.com/natl-conf-on-recent-trends-in-math-sciences-concludes-at-smvdu/" rel="bookmark" class="td-image-wrap" title="Natl Conf on Recent Trends in Math  Sciences concludes at SMVDU"><img width="100" height="70" class="entry-thumb" src="https://www.dailyexcelsior.com/wp-content/themes/Newspaper/images/no-thumb/td_100x70.png" alt=""/></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/natl-conf-on-recent-trends-in-math-sciences-concludes-at-smvdu/" rel="bookmark" title="Natl Conf on Recent Trends in Math  Sciences concludes at SMVDU">Natl Conf on Recent Trends in Math  Sciences concludes at...</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-16T03:09:18+05:30" >16/12/2019</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span6 -->

	<div class="td-block-span6">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://www.dailyexcelsior.com/kabir-nirwan-divas-to-be-celebrated-on-feb-16/" rel="bookmark" class="td-image-wrap" title="Kabir Nirwan Divas to be celebrated on Feb 16"><img width="100" height="70" class="entry-thumb" src="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/page5-6-9-100x70.jpg" srcset="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/page5-6-9-100x70.jpg 100w, https://www.dailyexcelsior.com/wp-content/uploads/2019/12/page5-6-9-218x150.jpg 218w" sizes="(max-width: 100px) 100vw, 100px" alt="Members of All J&amp;K Shri Sadguru Kabir Sabha posing for group photograph after meeting." title="Kabir Nirwan Divas to be celebrated on Feb 16"/></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/kabir-nirwan-divas-to-be-celebrated-on-feb-16/" rel="bookmark" title="Kabir Nirwan Divas to be celebrated on Feb 16">Kabir Nirwan Divas to be celebrated on Feb 16</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-16T03:09:15+05:30" >16/12/2019</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span6 --></div><!--./row-fluid--></div></div> <!-- ./block --><div class="tdm_block td_block_wrap tdm_block_button td_uid_22_5df75b61bb23a_rand tdm-content-horiz-right td-pb-border-top td_block_template_1"  data-td-block-uid="td_uid_22_5df75b61bb23a"     >
<style>

/* inline tdc_css att */

.td_uid_22_5df75b61bb23a_rand{
margin-bottom:50px !important;
}

</style>
<style>

</style><div class="tds-button td-fix-index"><a href="/state/" class="tds-button1 tdm-btn tdm-btn-sm td_uid_23_5df75b62af328" ><span class="tdm-btn-text">MORE</span></a></div></div>
 <!-- A generated by theme --> 

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><div class="td-g-rec td-g-rec-id-custom_ad_2 td_uid_24_5df75b62b0980_rand td_block_template_1 ">

<style>

/* inline tdc_css att */

.td_uid_24_5df75b62b0980_rand{
margin-bottom:50px !important;
}

</style><script type="text/javascript">
var td_screen_width = window.innerWidth;

                    if ( td_screen_width >= 1140 ) {
                        /* large monitors */
                        document.write('<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-9133447367964563" data-ad-slot="9264089776"></ins>');
                        (adsbygoogle = window.adsbygoogle || []).push({});
                    }
            
	                    if ( td_screen_width >= 1019  && td_screen_width < 1140 ) {
	                        /* landscape tablets */
                        document.write('<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-9133447367964563" data-ad-slot="9264089776"></ins>');
	                        (adsbygoogle = window.adsbygoogle || []).push({});
	                    }
	                
                    if ( td_screen_width >= 768  && td_screen_width < 1019 ) {
                        /* portrait tablets */
                        document.write('<ins class="adsbygoogle" style="display:inline-block;width:200px;height:200px" data-ad-client="ca-pub-9133447367964563" data-ad-slot="9264089776"></ins>');
                        (adsbygoogle = window.adsbygoogle || []).push({});
                    }
                
                    if ( td_screen_width < 768 ) {
                        /* Phones */
                        document.write('<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-9133447367964563" data-ad-slot="9264089776"></ins>');
                        (adsbygoogle = window.adsbygoogle || []).push({});
                    }
                </script>
</div>

 <!-- end A --> 

<div class="vc_row_inner td_uid_25_5df75b62b1698_rand  vc_row vc_inner wpb_row td-pb-row" ><div class="vc_column_inner td_uid_26_5df75b62b1e78_rand  wpb_column vc_column_container tdc-inner-column td-pb-span6"><div class="vc_column-inner"><div class="wpb_wrapper"><div class="td_block_wrap td_block_7 td_uid_27_5df75b62b23a3_rand td-pb-border-top reb-btn-n td_block_template_1 td-column-1 td_block_padding"  data-td-block-uid="td_uid_27_5df75b62b23a3" >
<style>

/* inline tdc_css att */

.td_uid_27_5df75b62b23a3_rand{
margin-bottom:0px !important;
}

</style><script>var block_td_uid_27_5df75b62b23a3 = new tdBlock();
block_td_uid_27_5df75b62b23a3.id = "td_uid_27_5df75b62b23a3";
block_td_uid_27_5df75b62b23a3.atts = '{"custom_title":"National","category_id":"18","tdc_css":"eyJhbGwiOnsibWFyZ2luLWJvdHRvbSI6IjAiLCJkaXNwbGF5IjoiIn19","el_class":"reb-btn-n","separator":"","custom_url":"","block_template_id":"","m6_tl":"","post_ids":"","category_ids":"","tag_slug":"","autors_id":"","installed_post_types":"","sort":"","limit":"5","offset":"","td_ajax_filter_type":"","td_ajax_filter_ids":"","td_filter_default_txt":"All","td_ajax_preloading":"","f_header_font_header":"","f_header_font_title":"Block header","f_header_font_reset":"","f_header_font_family":"","f_header_font_size":"","f_header_font_line_height":"","f_header_font_style":"","f_header_font_weight":"","f_header_font_transform":"","f_header_font_spacing":"","f_header_":"","f_ajax_font_title":"Ajax categories","f_ajax_font_reset":"","f_ajax_font_family":"","f_ajax_font_size":"","f_ajax_font_line_height":"","f_ajax_font_style":"","f_ajax_font_weight":"","f_ajax_font_transform":"","f_ajax_font_spacing":"","f_ajax_":"","f_more_font_title":"Load more button","f_more_font_reset":"","f_more_font_family":"","f_more_font_size":"","f_more_font_line_height":"","f_more_font_style":"","f_more_font_weight":"","f_more_font_transform":"","f_more_font_spacing":"","f_more_":"","m6f_title_font_header":"","m6f_title_font_title":"Article title","m6f_title_font_reset":"","m6f_title_font_family":"","m6f_title_font_size":"","m6f_title_font_line_height":"","m6f_title_font_style":"","m6f_title_font_weight":"","m6f_title_font_transform":"","m6f_title_font_spacing":"","m6f_title_":"","m6f_cat_font_title":"Article category tag","m6f_cat_font_reset":"","m6f_cat_font_family":"","m6f_cat_font_size":"","m6f_cat_font_line_height":"","m6f_cat_font_style":"","m6f_cat_font_weight":"","m6f_cat_font_transform":"","m6f_cat_font_spacing":"","m6f_cat_":"","m6f_meta_font_title":"Article meta info","m6f_meta_font_reset":"","m6f_meta_font_family":"","m6f_meta_font_size":"","m6f_meta_font_line_height":"","m6f_meta_font_style":"","m6f_meta_font_weight":"","m6f_meta_font_transform":"","m6f_meta_font_spacing":"","m6f_meta_":"","ajax_pagination":"","ajax_pagination_infinite_stop":"","css":"","td_column_number":1,"header_color":"","color_preset":"","border_top":"","class":"td_uid_27_5df75b62b23a3_rand","tdc_css_class":"td_uid_27_5df75b62b23a3_rand","tdc_css_class_style":"td_uid_27_5df75b62b23a3_rand_style"}';
block_td_uid_27_5df75b62b23a3.td_column_number = "1";
block_td_uid_27_5df75b62b23a3.block_type = "td_block_7";
block_td_uid_27_5df75b62b23a3.post_count = "5";
block_td_uid_27_5df75b62b23a3.found_posts = "33566";
block_td_uid_27_5df75b62b23a3.header_color = "";
block_td_uid_27_5df75b62b23a3.ajax_pagination_infinite_stop = "";
block_td_uid_27_5df75b62b23a3.max_num_pages = "6714";
tdBlocksArray.push(block_td_uid_27_5df75b62b23a3);
</script><div class="td-block-title-wrap"><h4 class="block-title td-block-title"><span class="td-pulldown-size">National</span></h4></div><div id=td_uid_27_5df75b62b23a3 class="td_block_inner">

	<div class="td-block-span12">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://www.dailyexcelsior.com/you-cant-be-honest-about-someones-work-in-industry-kareena/" rel="bookmark" class="td-image-wrap" title="You can&#8217;t be honest about someone&#8217;s work in industry : Kareena"><img width="100" height="70" class="entry-thumb" src="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/kareena-100x70.jpg" srcset="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/kareena-100x70.jpg 100w, https://www.dailyexcelsior.com/wp-content/uploads/2019/12/kareena-218x150.jpg 218w" sizes="(max-width: 100px) 100vw, 100px" alt="" title="You can&#8217;t be honest about someone&#8217;s work in industry : Kareena"/></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/you-cant-be-honest-about-someones-work-in-industry-kareena/" rel="bookmark" title="You can&#8217;t be honest about someone&#8217;s work in industry : Kareena">You can&#8217;t be honest about someone&#8217;s work in industry : Kareena</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-16T01:11:51+05:30" >16/12/2019</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span12 -->

	<div class="td-block-span12">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://www.dailyexcelsior.com/pm-pays-tributes-to-sardar-patel-on-death-anniversary-3/" rel="bookmark" class="td-image-wrap" title="PM pays tributes to Sardar Patel on death anniversary"><img width="100" height="70" class="entry-thumb" src="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/modi-100x70.png" srcset="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/modi-100x70.png 100w, https://www.dailyexcelsior.com/wp-content/uploads/2019/12/modi-218x150.png 218w" sizes="(max-width: 100px) 100vw, 100px" alt="" title="PM pays tributes to Sardar Patel on death anniversary"/></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/pm-pays-tributes-to-sardar-patel-on-death-anniversary-3/" rel="bookmark" title="PM pays tributes to Sardar Patel on death anniversary">PM pays tributes to Sardar Patel on death anniversary</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-16T01:11:32+05:30" >16/12/2019</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span12 -->

	<div class="td-block-span12">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://www.dailyexcelsior.com/rajasthan-police-detain-payal-rohatgi-for-offensive-content-against-gandhi-nehru-family/" rel="bookmark" class="td-image-wrap" title="Rajasthan Police detain Payal Rohatgi for  offensive content against Gandhi-Nehru family"><img width="100" height="70" class="entry-thumb" src="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/Payal-Rohtagi-100x70.jpg" srcset="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/Payal-Rohtagi-100x70.jpg 100w, https://www.dailyexcelsior.com/wp-content/uploads/2019/12/Payal-Rohtagi-218x150.jpg 218w" sizes="(max-width: 100px) 100vw, 100px" alt="" title="Rajasthan Police detain Payal Rohatgi for  offensive content against Gandhi-Nehru family"/></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/rajasthan-police-detain-payal-rohatgi-for-offensive-content-against-gandhi-nehru-family/" rel="bookmark" title="Rajasthan Police detain Payal Rohatgi for  offensive content against Gandhi-Nehru family">Rajasthan Police detain Payal Rohatgi for  offensive content against Gandhi-Nehru...</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-16T01:10:48+05:30" >16/12/2019</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span12 -->

	<div class="td-block-span12">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://www.dailyexcelsior.com/mayawati-accuses-cong-of-duplicity-for-continuing-alliance-with-sena-2/" rel="bookmark" class="td-image-wrap" title="Mayawati accuses Cong of duplicity for continuing alliance with Sena"><img width="100" height="70" class="entry-thumb" src="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/mayawati-100x70.jpg" srcset="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/mayawati-100x70.jpg 100w, https://www.dailyexcelsior.com/wp-content/uploads/2019/12/mayawati-218x150.jpg 218w" sizes="(max-width: 100px) 100vw, 100px" alt="" title="Mayawati accuses Cong of duplicity for continuing alliance with Sena"/></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/mayawati-accuses-cong-of-duplicity-for-continuing-alliance-with-sena-2/" rel="bookmark" title="Mayawati accuses Cong of duplicity for continuing alliance with Sena">Mayawati accuses Cong of duplicity for continuing alliance with Sena</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-16T01:10:31+05:30" >16/12/2019</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span12 -->

	<div class="td-block-span12">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://www.dailyexcelsior.com/delhi-court-to-pronounce-verdict-in-unnao-rape-case/" rel="bookmark" class="td-image-wrap" title="Delhi Court to pronounce verdict in Unnao rape case"><img width="100" height="70" class="entry-thumb" src="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/court-100x70.jpg" srcset="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/court-100x70.jpg 100w, https://www.dailyexcelsior.com/wp-content/uploads/2019/12/court-218x150.jpg 218w" sizes="(max-width: 100px) 100vw, 100px" alt="" title="Delhi Court to pronounce verdict in Unnao rape case"/></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/delhi-court-to-pronounce-verdict-in-unnao-rape-case/" rel="bookmark" title="Delhi Court to pronounce verdict in Unnao rape case">Delhi Court to pronounce verdict in Unnao rape case</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-16T01:10:07+05:30" >16/12/2019</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span12 --></div></div> <!-- ./block --><div class="tdm_block td_block_wrap tdm_block_button td_uid_28_5df75b633171b_rand tdm-content-horiz-right td-pb-border-top test_style td_block_template_1"  data-td-block-uid="td_uid_28_5df75b633171b"     >
<style>

/* inline tdc_css att */

.td_uid_28_5df75b633171b_rand{
margin-bottom:50px !important;
}

</style>
<style>

</style><div class="tds-button td-fix-index"><a href="/national-news/" class="tds-button1 tdm-btn tdm-btn-sm td_uid_29_5df75b640a079" ><span class="tdm-btn-text">MORE</span></a></div></div></div></div></div><div class="vc_column_inner td_uid_30_5df75b640adbe_rand  wpb_column vc_column_container tdc-inner-column td-pb-span6"><div class="vc_column-inner"><div class="wpb_wrapper"><div class="td_block_wrap td_block_7 td_uid_31_5df75b640b2a9_rand td-pb-border-top reb-btn-n td_block_template_1 td-column-1 td_block_padding"  data-td-block-uid="td_uid_31_5df75b640b2a9" >
<style>

/* inline tdc_css att */

.td_uid_31_5df75b640b2a9_rand{
margin-bottom:0px !important;
}

</style><script>var block_td_uid_31_5df75b640b2a9 = new tdBlock();
block_td_uid_31_5df75b640b2a9.id = "td_uid_31_5df75b640b2a9";
block_td_uid_31_5df75b640b2a9.atts = '{"custom_title":"Sports","category_id":"70","tdc_css":"eyJhbGwiOnsibWFyZ2luLWJvdHRvbSI6IjAiLCJkaXNwbGF5IjoiIn19","el_class":"reb-btn-n","separator":"","custom_url":"","block_template_id":"","m6_tl":"","post_ids":"","category_ids":"","tag_slug":"","autors_id":"","installed_post_types":"","sort":"","limit":"5","offset":"","td_ajax_filter_type":"","td_ajax_filter_ids":"","td_filter_default_txt":"All","td_ajax_preloading":"","f_header_font_header":"","f_header_font_title":"Block header","f_header_font_reset":"","f_header_font_family":"","f_header_font_size":"","f_header_font_line_height":"","f_header_font_style":"","f_header_font_weight":"","f_header_font_transform":"","f_header_font_spacing":"","f_header_":"","f_ajax_font_title":"Ajax categories","f_ajax_font_reset":"","f_ajax_font_family":"","f_ajax_font_size":"","f_ajax_font_line_height":"","f_ajax_font_style":"","f_ajax_font_weight":"","f_ajax_font_transform":"","f_ajax_font_spacing":"","f_ajax_":"","f_more_font_title":"Load more button","f_more_font_reset":"","f_more_font_family":"","f_more_font_size":"","f_more_font_line_height":"","f_more_font_style":"","f_more_font_weight":"","f_more_font_transform":"","f_more_font_spacing":"","f_more_":"","m6f_title_font_header":"","m6f_title_font_title":"Article title","m6f_title_font_reset":"","m6f_title_font_family":"","m6f_title_font_size":"","m6f_title_font_line_height":"","m6f_title_font_style":"","m6f_title_font_weight":"","m6f_title_font_transform":"","m6f_title_font_spacing":"","m6f_title_":"","m6f_cat_font_title":"Article category tag","m6f_cat_font_reset":"","m6f_cat_font_family":"","m6f_cat_font_size":"","m6f_cat_font_line_height":"","m6f_cat_font_style":"","m6f_cat_font_weight":"","m6f_cat_font_transform":"","m6f_cat_font_spacing":"","m6f_cat_":"","m6f_meta_font_title":"Article meta info","m6f_meta_font_reset":"","m6f_meta_font_family":"","m6f_meta_font_size":"","m6f_meta_font_line_height":"","m6f_meta_font_style":"","m6f_meta_font_weight":"","m6f_meta_font_transform":"","m6f_meta_font_spacing":"","m6f_meta_":"","ajax_pagination":"","ajax_pagination_infinite_stop":"","css":"","td_column_number":1,"header_color":"","color_preset":"","border_top":"","class":"td_uid_31_5df75b640b2a9_rand","tdc_css_class":"td_uid_31_5df75b640b2a9_rand","tdc_css_class_style":"td_uid_31_5df75b640b2a9_rand_style"}';
block_td_uid_31_5df75b640b2a9.td_column_number = "1";
block_td_uid_31_5df75b640b2a9.block_type = "td_block_7";
block_td_uid_31_5df75b640b2a9.post_count = "5";
block_td_uid_31_5df75b640b2a9.found_posts = "33520";
block_td_uid_31_5df75b640b2a9.header_color = "";
block_td_uid_31_5df75b640b2a9.ajax_pagination_infinite_stop = "";
block_td_uid_31_5df75b640b2a9.max_num_pages = "6704";
tdBlocksArray.push(block_td_uid_31_5df75b640b2a9);
</script><div class="td-block-title-wrap"><h4 class="block-title td-block-title"><span class="td-pulldown-size">Sports</span></h4></div><div id=td_uid_31_5df75b640b2a9 class="td_block_inner">

	<div class="td-block-span12">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://www.dailyexcelsior.com/army-organises-ice-hockey-tournament-in-ladakh/" rel="bookmark" class="td-image-wrap" title="Army organises Ice Hockey Tournament in Ladakh"><img width="100" height="70" class="entry-thumb" src="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/k-2-2-100x70.jpg" srcset="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/k-2-2-100x70.jpg 100w, https://www.dailyexcelsior.com/wp-content/uploads/2019/12/k-2-2-218x150.jpg 218w" sizes="(max-width: 100px) 100vw, 100px" alt="Players being felicitated by Army during the closing ceremony of Ice Hockey Tournament in Ladakh." title="Army organises Ice Hockey Tournament in Ladakh"/></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/army-organises-ice-hockey-tournament-in-ladakh/" rel="bookmark" title="Army organises Ice Hockey Tournament in Ladakh">Army organises Ice Hockey Tournament in Ladakh</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-16T01:10:53+05:30" >16/12/2019</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span12 -->

	<div class="td-block-span12">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://www.dailyexcelsior.com/sainik-school-nagrota-organises-alumni-meet-2/" rel="bookmark" class="td-image-wrap" title="Sainik School Nagrota organises Alumni Meet"><img width="100" height="70" class="entry-thumb" src="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/k-1-2-100x70.jpg" srcset="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/k-1-2-100x70.jpg 100w, https://www.dailyexcelsior.com/wp-content/uploads/2019/12/k-1-2-218x150.jpg 218w" sizes="(max-width: 100px) 100vw, 100px" alt="Students being honoured during Alumni Meet at Sainik School Nagrota in Jammu." title="Sainik School Nagrota organises Alumni Meet"/></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/sainik-school-nagrota-organises-alumni-meet-2/" rel="bookmark" title="Sainik School Nagrota organises Alumni Meet">Sainik School Nagrota organises Alumni Meet</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-16T01:10:37+05:30" >16/12/2019</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span12 -->

	<div class="td-block-span12">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://www.dailyexcelsior.com/shivangi-bhavya-of-sos-excel/" rel="bookmark" class="td-image-wrap" title="Shivangi, Bhavya of SoS excel"><img width="100" height="70" class="entry-thumb" src="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/k-4-2-100x70.jpg" srcset="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/k-4-2-100x70.jpg 100w, https://www.dailyexcelsior.com/wp-content/uploads/2019/12/k-4-2-768x544.jpg 768w, https://www.dailyexcelsior.com/wp-content/uploads/2019/12/k-4-2-218x150.jpg 218w, https://www.dailyexcelsior.com/wp-content/uploads/2019/12/k-4-2.jpg 1200w" sizes="(max-width: 100px) 100vw, 100px" alt="Bhavya and Shivangi posing along with SOS School Management in Jammu." title="Shivangi, Bhavya of SoS excel"/></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/shivangi-bhavya-of-sos-excel/" rel="bookmark" title="Shivangi, Bhavya of SoS excel">Shivangi, Bhavya of SoS excel</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-16T01:09:37+05:30" >16/12/2019</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span12 -->

	<div class="td-block-span12">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://www.dailyexcelsior.com/model-academy-ranked-no-1-by-education-today/" rel="bookmark" class="td-image-wrap" title="Model Academy ranked No-1 by Education Today"><img width="100" height="70" class="entry-thumb" src="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/k-6-1-100x70.jpg" srcset="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/k-6-1-100x70.jpg 100w, https://www.dailyexcelsior.com/wp-content/uploads/2019/12/k-6-1-218x150.jpg 218w" sizes="(max-width: 100px) 100vw, 100px" alt="Principal Model Academy, Pramod Kumar Srivastava receiving prestigious award in Bengaluru." title="Model Academy ranked No-1 by Education Today"/></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/model-academy-ranked-no-1-by-education-today/" rel="bookmark" title="Model Academy ranked No-1 by Education Today">Model Academy ranked No-1 by Education Today</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-16T01:08:51+05:30" >16/12/2019</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span12 -->

	<div class="td-block-span12">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://www.dailyexcelsior.com/scientia-international-school-celebrates-annual-day-4/" rel="bookmark" class="td-image-wrap" title="Scientia International School celebrates Annual Day"><img width="100" height="70" class="entry-thumb" src="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/k-5-1-100x70.jpg" srcset="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/k-5-1-100x70.jpg 100w, https://www.dailyexcelsior.com/wp-content/uploads/2019/12/k-5-1-218x150.jpg 218w" sizes="(max-width: 100px) 100vw, 100px" alt="Chief guest and other dignitaries lighting ceremonial lamp during Annual Day celebration at Scientia International School." title="Scientia International School celebrates Annual Day"/></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/scientia-international-school-celebrates-annual-day-4/" rel="bookmark" title="Scientia International School celebrates Annual Day">Scientia International School celebrates Annual Day</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-16T01:08:48+05:30" >16/12/2019</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span12 --></div></div> <!-- ./block --><div class="tdm_block td_block_wrap tdm_block_button td_uid_32_5df75b647bf0b_rand tdm-content-horiz-right td-pb-border-top td_block_template_1"  data-td-block-uid="td_uid_32_5df75b647bf0b"     >
<style>

/* inline tdc_css att */

.td_uid_32_5df75b647bf0b_rand{
margin-bottom:50px !important;
}

</style>
<style>

</style><div class="tds-button td-fix-index"><a href="/sports/" class="tds-button1 tdm-btn tdm-btn-sm td_uid_33_5df75b655227f" ><span class="tdm-btn-text">More</span></a></div></div></div></div></div></div>
 <!-- A generated by theme --> 

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><div class="td-g-rec td-g-rec-id-custom_ad_1 td_uid_34_5df75b65531c9_rand td_block_template_1 ">

<style>

/* inline tdc_css att */

.td_uid_34_5df75b65531c9_rand{
margin-bottom:50px !important;
}

</style><script type="text/javascript">
var td_screen_width = window.innerWidth;

                    if ( td_screen_width >= 1140 ) {
                        /* large monitors */
                        document.write('<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-9133447367964563" data-ad-slot="9264089776"></ins>');
                        (adsbygoogle = window.adsbygoogle || []).push({});
                    }
            
	                    if ( td_screen_width >= 1019  && td_screen_width < 1140 ) {
	                        /* landscape tablets */
                        document.write('<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-9133447367964563" data-ad-slot="9264089776"></ins>');
	                        (adsbygoogle = window.adsbygoogle || []).push({});
	                    }
	                
                    if ( td_screen_width >= 768  && td_screen_width < 1019 ) {
                        /* portrait tablets */
                        document.write('<ins class="adsbygoogle" style="display:inline-block;width:200px;height:200px" data-ad-client="ca-pub-9133447367964563" data-ad-slot="9264089776"></ins>');
                        (adsbygoogle = window.adsbygoogle || []).push({});
                    }
                
                    if ( td_screen_width < 768 ) {
                        /* Phones */
                        document.write('<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-9133447367964563" data-ad-slot="9264089776"></ins>');
                        (adsbygoogle = window.adsbygoogle || []).push({});
                    }
                </script>
</div>

 <!-- end A --> 

<div class="vc_row_inner td_uid_35_5df75b6553a26_rand  vc_row vc_inner wpb_row td-pb-row" ><div class="vc_column_inner td_uid_36_5df75b65540f3_rand  wpb_column vc_column_container tdc-inner-column td-pb-span6"><div class="vc_column-inner"><div class="wpb_wrapper"><div class="td_block_wrap td_block_7 td_uid_37_5df75b6554920_rand td-pb-border-top td_block_template_1 td-column-1 td_block_padding"  data-td-block-uid="td_uid_37_5df75b6554920" >
<style>

/* inline tdc_css att */

.td_uid_37_5df75b6554920_rand{
margin-bottom:0px !important;
}

</style><script>var block_td_uid_37_5df75b6554920 = new tdBlock();
block_td_uid_37_5df75b6554920.id = "td_uid_37_5df75b6554920";
block_td_uid_37_5df75b6554920.atts = '{"custom_title":"Business","category_id":"42","tdc_css":"eyJhbGwiOnsibWFyZ2luLWJvdHRvbSI6IjAiLCJkaXNwbGF5IjoiIn19","separator":"","custom_url":"","block_template_id":"","m6_tl":"","post_ids":"","category_ids":"","tag_slug":"","autors_id":"","installed_post_types":"","sort":"","limit":"5","offset":"","el_class":"","td_ajax_filter_type":"","td_ajax_filter_ids":"","td_filter_default_txt":"All","td_ajax_preloading":"","f_header_font_header":"","f_header_font_title":"Block header","f_header_font_reset":"","f_header_font_family":"","f_header_font_size":"","f_header_font_line_height":"","f_header_font_style":"","f_header_font_weight":"","f_header_font_transform":"","f_header_font_spacing":"","f_header_":"","f_ajax_font_title":"Ajax categories","f_ajax_font_reset":"","f_ajax_font_family":"","f_ajax_font_size":"","f_ajax_font_line_height":"","f_ajax_font_style":"","f_ajax_font_weight":"","f_ajax_font_transform":"","f_ajax_font_spacing":"","f_ajax_":"","f_more_font_title":"Load more button","f_more_font_reset":"","f_more_font_family":"","f_more_font_size":"","f_more_font_line_height":"","f_more_font_style":"","f_more_font_weight":"","f_more_font_transform":"","f_more_font_spacing":"","f_more_":"","m6f_title_font_header":"","m6f_title_font_title":"Article title","m6f_title_font_reset":"","m6f_title_font_family":"","m6f_title_font_size":"","m6f_title_font_line_height":"","m6f_title_font_style":"","m6f_title_font_weight":"","m6f_title_font_transform":"","m6f_title_font_spacing":"","m6f_title_":"","m6f_cat_font_title":"Article category tag","m6f_cat_font_reset":"","m6f_cat_font_family":"","m6f_cat_font_size":"","m6f_cat_font_line_height":"","m6f_cat_font_style":"","m6f_cat_font_weight":"","m6f_cat_font_transform":"","m6f_cat_font_spacing":"","m6f_cat_":"","m6f_meta_font_title":"Article meta info","m6f_meta_font_reset":"","m6f_meta_font_family":"","m6f_meta_font_size":"","m6f_meta_font_line_height":"","m6f_meta_font_style":"","m6f_meta_font_weight":"","m6f_meta_font_transform":"","m6f_meta_font_spacing":"","m6f_meta_":"","ajax_pagination":"","ajax_pagination_infinite_stop":"","css":"","td_column_number":1,"header_color":"","color_preset":"","border_top":"","class":"td_uid_37_5df75b6554920_rand","tdc_css_class":"td_uid_37_5df75b6554920_rand","tdc_css_class_style":"td_uid_37_5df75b6554920_rand_style"}';
block_td_uid_37_5df75b6554920.td_column_number = "1";
block_td_uid_37_5df75b6554920.block_type = "td_block_7";
block_td_uid_37_5df75b6554920.post_count = "5";
block_td_uid_37_5df75b6554920.found_posts = "32635";
block_td_uid_37_5df75b6554920.header_color = "";
block_td_uid_37_5df75b6554920.ajax_pagination_infinite_stop = "";
block_td_uid_37_5df75b6554920.max_num_pages = "6527";
tdBlocksArray.push(block_td_uid_37_5df75b6554920);
</script><div class="td-block-title-wrap"><h4 class="block-title td-block-title"><span class="td-pulldown-size">Business</span></h4></div><div id=td_uid_37_5df75b6554920 class="td_block_inner">

	<div class="td-block-span12">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://www.dailyexcelsior.com/bhalla-inaugurates-ratna-hotel-restaurant/" rel="bookmark" class="td-image-wrap" title="Bhalla inaugurates Ratna Hotel &#038; Restaurant"><img width="100" height="70" class="entry-thumb" src="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/page5-8-6-100x70.jpg" srcset="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/page5-8-6-100x70.jpg 100w, https://www.dailyexcelsior.com/wp-content/uploads/2019/12/page5-8-6-218x150.jpg 218w" sizes="(max-width: 100px) 100vw, 100px" alt="Former Minister and Vice President PCC Raman Bhalla inaugurating Ratna Hotel and Restaurant at Ward Number 12, Bari Brahmana." title="Bhalla inaugurates Ratna Hotel &#038; Restaurant"/></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/bhalla-inaugurates-ratna-hotel-restaurant/" rel="bookmark" title="Bhalla inaugurates Ratna Hotel &#038; Restaurant">Bhalla inaugurates Ratna Hotel &#038; Restaurant</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-16T03:03:18+05:30" >16/12/2019</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span12 -->

	<div class="td-block-span12">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://www.dailyexcelsior.com/ticket-cancellation-charges-reduced-from-rs-300-to-rs-150/" rel="bookmark" class="td-image-wrap" title="Ticket cancellation charges reduced from Rs 300 to Rs 150"><img width="100" height="70" class="entry-thumb" src="https://www.dailyexcelsior.com/wp-content/themes/Newspaper/images/no-thumb/td_100x70.png" alt=""/></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/ticket-cancellation-charges-reduced-from-rs-300-to-rs-150/" rel="bookmark" title="Ticket cancellation charges reduced from Rs 300 to Rs 150">Ticket cancellation charges reduced from Rs 300 to Rs 150</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-16T03:00:20+05:30" >16/12/2019</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span12 -->

	<div class="td-block-span12">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://www.dailyexcelsior.com/karnataka-marine-fisheries-sector-facing-a-decline-in-catch-experts/" rel="bookmark" class="td-image-wrap" title="Karnataka marine fisheries sector facing a decline in catch: Experts"><img width="100" height="70" class="entry-thumb" src="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/23-2-100x70.jpg" srcset="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/23-2-100x70.jpg 100w, https://www.dailyexcelsior.com/wp-content/uploads/2019/12/23-2-218x150.jpg 218w" sizes="(max-width: 100px) 100vw, 100px" alt="" title="Karnataka marine fisheries sector facing a decline in catch: Experts"/></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/karnataka-marine-fisheries-sector-facing-a-decline-in-catch-experts/" rel="bookmark" title="Karnataka marine fisheries sector facing a decline in catch: Experts">Karnataka marine fisheries sector facing a decline in catch: Experts</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-16T00:54:51+05:30" >16/12/2019</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span12 -->

	<div class="td-block-span12">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://www.dailyexcelsior.com/china-suspends-planned-tariffs-on-us-goods-2/" rel="bookmark" class="td-image-wrap" title="China suspends planned tariffs on US goods"><img width="100" height="70" class="entry-thumb" src="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/22-7-100x70.jpg" srcset="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/22-7-100x70.jpg 100w, https://www.dailyexcelsior.com/wp-content/uploads/2019/12/22-7-218x150.jpg 218w, https://www.dailyexcelsior.com/wp-content/uploads/2019/12/22-7-1068x745.jpg 1068w" sizes="(max-width: 100px) 100vw, 100px" alt="" title="China suspends planned tariffs on US goods"/></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/china-suspends-planned-tariffs-on-us-goods-2/" rel="bookmark" title="China suspends planned tariffs on US goods">China suspends planned tariffs on US goods</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-16T00:54:29+05:30" >16/12/2019</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span12 -->

	<div class="td-block-span12">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://www.dailyexcelsior.com/regulation-for-vintage-vehicles-soon-number-plates-to-display-va-2/" rel="bookmark" class="td-image-wrap" title="Regulation for vintage vehicles soon; number plates to display ‘VA’"><img width="100" height="70" class="entry-thumb" src="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/21-7-100x70.jpg" srcset="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/21-7-100x70.jpg 100w, https://www.dailyexcelsior.com/wp-content/uploads/2019/12/21-7-218x150.jpg 218w" sizes="(max-width: 100px) 100vw, 100px" alt="" title="Regulation for vintage vehicles soon; number plates to display ‘VA’"/></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/regulation-for-vintage-vehicles-soon-number-plates-to-display-va-2/" rel="bookmark" title="Regulation for vintage vehicles soon; number plates to display ‘VA’">Regulation for vintage vehicles soon; number plates to display ‘VA’</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-16T00:51:21+05:30" >16/12/2019</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span12 --></div></div> <!-- ./block --><div class="tdm_block td_block_wrap tdm_block_button td_uid_38_5df75b65c6133_rand tdm-content-horiz-right td-pb-border-top td_block_template_1"  data-td-block-uid="td_uid_38_5df75b65c6133"     >
<style>

/* inline tdc_css att */

.td_uid_38_5df75b65c6133_rand{
margin-bottom:50px !important;
}

</style>
<style>

</style><div class="tds-button td-fix-index"><a href="/business-news/" class="tds-button1 tdm-btn tdm-btn-sm td_uid_39_5df75b66ae0bb" ><span class="tdm-btn-text">More</span></a></div></div></div></div></div><div class="vc_column_inner td_uid_40_5df75b66af54d_rand  wpb_column vc_column_container tdc-inner-column td-pb-span6"><div class="vc_column-inner"><div class="wpb_wrapper"><div class="td_block_wrap td_block_7 td_uid_41_5df75b66afb2f_rand td-pb-border-top td_block_template_1 td-column-1 td_block_padding"  data-td-block-uid="td_uid_41_5df75b66afb2f" >
<style>

/* inline tdc_css att */

.td_uid_41_5df75b66afb2f_rand{
margin-bottom:0px !important;
}

</style><script>var block_td_uid_41_5df75b66afb2f = new tdBlock();
block_td_uid_41_5df75b66afb2f.id = "td_uid_41_5df75b66afb2f";
block_td_uid_41_5df75b66afb2f.atts = '{"custom_title":"International","category_id":"17","tdc_css":"eyJhbGwiOnsibWFyZ2luLWJvdHRvbSI6IjAiLCJkaXNwbGF5IjoiIn19","separator":"","custom_url":"","block_template_id":"","m6_tl":"","post_ids":"","category_ids":"","tag_slug":"","autors_id":"","installed_post_types":"","sort":"","limit":"5","offset":"","el_class":"","td_ajax_filter_type":"","td_ajax_filter_ids":"","td_filter_default_txt":"All","td_ajax_preloading":"","f_header_font_header":"","f_header_font_title":"Block header","f_header_font_reset":"","f_header_font_family":"","f_header_font_size":"","f_header_font_line_height":"","f_header_font_style":"","f_header_font_weight":"","f_header_font_transform":"","f_header_font_spacing":"","f_header_":"","f_ajax_font_title":"Ajax categories","f_ajax_font_reset":"","f_ajax_font_family":"","f_ajax_font_size":"","f_ajax_font_line_height":"","f_ajax_font_style":"","f_ajax_font_weight":"","f_ajax_font_transform":"","f_ajax_font_spacing":"","f_ajax_":"","f_more_font_title":"Load more button","f_more_font_reset":"","f_more_font_family":"","f_more_font_size":"","f_more_font_line_height":"","f_more_font_style":"","f_more_font_weight":"","f_more_font_transform":"","f_more_font_spacing":"","f_more_":"","m6f_title_font_header":"","m6f_title_font_title":"Article title","m6f_title_font_reset":"","m6f_title_font_family":"","m6f_title_font_size":"","m6f_title_font_line_height":"","m6f_title_font_style":"","m6f_title_font_weight":"","m6f_title_font_transform":"","m6f_title_font_spacing":"","m6f_title_":"","m6f_cat_font_title":"Article category tag","m6f_cat_font_reset":"","m6f_cat_font_family":"","m6f_cat_font_size":"","m6f_cat_font_line_height":"","m6f_cat_font_style":"","m6f_cat_font_weight":"","m6f_cat_font_transform":"","m6f_cat_font_spacing":"","m6f_cat_":"","m6f_meta_font_title":"Article meta info","m6f_meta_font_reset":"","m6f_meta_font_family":"","m6f_meta_font_size":"","m6f_meta_font_line_height":"","m6f_meta_font_style":"","m6f_meta_font_weight":"","m6f_meta_font_transform":"","m6f_meta_font_spacing":"","m6f_meta_":"","ajax_pagination":"","ajax_pagination_infinite_stop":"","css":"","td_column_number":1,"header_color":"","color_preset":"","border_top":"","class":"td_uid_41_5df75b66afb2f_rand","tdc_css_class":"td_uid_41_5df75b66afb2f_rand","tdc_css_class_style":"td_uid_41_5df75b66afb2f_rand_style"}';
block_td_uid_41_5df75b66afb2f.td_column_number = "1";
block_td_uid_41_5df75b66afb2f.block_type = "td_block_7";
block_td_uid_41_5df75b66afb2f.post_count = "5";
block_td_uid_41_5df75b66afb2f.found_posts = "30992";
block_td_uid_41_5df75b66afb2f.header_color = "";
block_td_uid_41_5df75b66afb2f.ajax_pagination_infinite_stop = "";
block_td_uid_41_5df75b66afb2f.max_num_pages = "6199";
tdBlocksArray.push(block_td_uid_41_5df75b66afb2f);
</script><div class="td-block-title-wrap"><h4 class="block-title td-block-title"><span class="td-pulldown-size">International</span></h4></div><div id=td_uid_41_5df75b66afb2f class="td_block_inner">

	<div class="td-block-span12">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://www.dailyexcelsior.com/iran-unveils-humanoid-robot-report/" rel="bookmark" class="td-image-wrap" title="Iran unveils humanoid robot: report"><img width="100" height="70" class="entry-thumb" src="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/11-13-100x70.jpg" srcset="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/11-13-100x70.jpg 100w, https://www.dailyexcelsior.com/wp-content/uploads/2019/12/11-13-218x150.jpg 218w" sizes="(max-width: 100px) 100vw, 100px" alt="" title="Iran unveils humanoid robot: report"/></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/iran-unveils-humanoid-robot-report/" rel="bookmark" title="Iran unveils humanoid robot: report">Iran unveils humanoid robot: report</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-16T00:21:26+05:30" >16/12/2019</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span12 -->

	<div class="td-block-span12">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://www.dailyexcelsior.com/singapore-targets-opposition-party-with-misinformation-law/" rel="bookmark" class="td-image-wrap" title="Singapore targets opposition party with misinformation law"><img width="100" height="70" class="entry-thumb" src="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/10-14-100x70.jpg" srcset="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/10-14-100x70.jpg 100w, https://www.dailyexcelsior.com/wp-content/uploads/2019/12/10-14-218x150.jpg 218w" sizes="(max-width: 100px) 100vw, 100px" alt="" title="Singapore targets opposition party with misinformation law"/></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/singapore-targets-opposition-party-with-misinformation-law/" rel="bookmark" title="Singapore targets opposition party with misinformation law">Singapore targets opposition party with misinformation law</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-16T00:19:05+05:30" >16/12/2019</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span12 -->

	<div class="td-block-span12">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://www.dailyexcelsior.com/female-mongooses-may-abort-spontaneously-to-save-energy-for-breeding-study/" rel="bookmark" class="td-image-wrap" title="Female mongooses may abort spontaneously to save energy for breeding: Study"><img width="100" height="70" class="entry-thumb" src="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/9-15-100x70.jpg" srcset="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/9-15-100x70.jpg 100w, https://www.dailyexcelsior.com/wp-content/uploads/2019/12/9-15-218x150.jpg 218w" sizes="(max-width: 100px) 100vw, 100px" alt="" title="Female mongooses may abort spontaneously to save energy for breeding: Study"/></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/female-mongooses-may-abort-spontaneously-to-save-energy-for-breeding-study/" rel="bookmark" title="Female mongooses may abort spontaneously to save energy for breeding: Study">Female mongooses may abort spontaneously to save energy for breeding: Study</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-16T00:16:54+05:30" >16/12/2019</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span12 -->

	<div class="td-block-span12">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://www.dailyexcelsior.com/novel-bandage-may-help-fracture-recovery-by-trapping-bodys-healing-molecules-study-2/" rel="bookmark" class="td-image-wrap" title="Novel bandage may help fracture recovery by trapping body’s healing molecules: Study"><img width="100" height="70" class="entry-thumb" src="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/8-12-100x70.jpg" srcset="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/8-12-100x70.jpg 100w, https://www.dailyexcelsior.com/wp-content/uploads/2019/12/8-12-218x150.jpg 218w" sizes="(max-width: 100px) 100vw, 100px" alt="" title="Novel bandage may help fracture recovery by trapping body’s healing molecules: Study"/></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/novel-bandage-may-help-fracture-recovery-by-trapping-bodys-healing-molecules-study-2/" rel="bookmark" title="Novel bandage may help fracture recovery by trapping body’s healing molecules: Study">Novel bandage may help fracture recovery by trapping body’s healing molecules:...</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-16T00:15:41+05:30" >16/12/2019</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span12 -->

	<div class="td-block-span12">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://www.dailyexcelsior.com/as-displacement-soars-global-meet-to-seek-new-paths-to-help-refugees/" rel="bookmark" class="td-image-wrap" title="As displacement soars, global meet to seek new paths to help refugees"><img width="100" height="70" class="entry-thumb" src="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/7-13-100x70.jpg" srcset="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/7-13-100x70.jpg 100w, https://www.dailyexcelsior.com/wp-content/uploads/2019/12/7-13-218x150.jpg 218w" sizes="(max-width: 100px) 100vw, 100px" alt="" title="As displacement soars, global meet to seek new paths to help refugees"/></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/as-displacement-soars-global-meet-to-seek-new-paths-to-help-refugees/" rel="bookmark" title="As displacement soars, global meet to seek new paths to help refugees">As displacement soars, global meet to seek new paths to help...</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-16T00:14:23+05:30" >16/12/2019</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span12 --></div></div> <!-- ./block --><div class="tdm_block td_block_wrap tdm_block_button td_uid_42_5df75b677004d_rand tdm-content-horiz-right td-pb-border-top td_block_template_1"  data-td-block-uid="td_uid_42_5df75b677004d"     >
<style>

/* inline tdc_css att */

.td_uid_42_5df75b677004d_rand{
margin-bottom:50px !important;
}

</style>
<style>

</style><div class="tds-button td-fix-index"><a href="/international/" class="tds-button1 tdm-btn tdm-btn-sm td_uid_43_5df75b68867c3" ><span class="tdm-btn-text">More</span></a></div></div></div></div></div></div>
 <!-- A generated by theme --> 

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><div class="td-g-rec td-g-rec-id-custom_ad_1 td_uid_44_5df75b68875f0_rand td_block_template_1 ">

<style>

/* inline tdc_css att */

.td_uid_44_5df75b68875f0_rand{
margin-bottom:50px !important;
}

</style><script type="text/javascript">
var td_screen_width = window.innerWidth;

                    if ( td_screen_width >= 1140 ) {
                        /* large monitors */
                        document.write('<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-9133447367964563" data-ad-slot="9264089776"></ins>');
                        (adsbygoogle = window.adsbygoogle || []).push({});
                    }
            
	                    if ( td_screen_width >= 1019  && td_screen_width < 1140 ) {
	                        /* landscape tablets */
                        document.write('<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-9133447367964563" data-ad-slot="9264089776"></ins>');
	                        (adsbygoogle = window.adsbygoogle || []).push({});
	                    }
	                
                    if ( td_screen_width >= 768  && td_screen_width < 1019 ) {
                        /* portrait tablets */
                        document.write('<ins class="adsbygoogle" style="display:inline-block;width:200px;height:200px" data-ad-client="ca-pub-9133447367964563" data-ad-slot="9264089776"></ins>');
                        (adsbygoogle = window.adsbygoogle || []).push({});
                    }
                
                    if ( td_screen_width < 768 ) {
                        /* Phones */
                        document.write('<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-9133447367964563" data-ad-slot="9264089776"></ins>');
                        (adsbygoogle = window.adsbygoogle || []).push({});
                    }
                </script>
</div>

 <!-- end A --> 

<div class="vc_row_inner td_uid_45_5df75b6887e11_rand  vc_row vc_inner wpb_row td-pb-row" ><div class="vc_column_inner td_uid_46_5df75b688806d_rand  wpb_column vc_column_container tdc-inner-column td-pb-span6"><div class="vc_column-inner"><div class="wpb_wrapper"></div></div></div><div class="vc_column_inner td_uid_47_5df75b68881d3_rand  wpb_column vc_column_container tdc-inner-column td-pb-span6"><div class="vc_column-inner"><div class="wpb_wrapper"></div></div></div></div><div class="vc_row_inner td_uid_48_5df75b688834d_rand  vc_row vc_inner wpb_row td-pb-row" ><div class="vc_column_inner td_uid_49_5df75b6888572_rand  wpb_column vc_column_container tdc-inner-column td-pb-span6"><div class="vc_column-inner"><div class="wpb_wrapper"></div></div></div><div class="vc_column_inner td_uid_50_5df75b68886ca_rand  wpb_column vc_column_container tdc-inner-column td-pb-span6"><div class="vc_column-inner"><div class="wpb_wrapper"></div></div></div></div><div class="vc_row_inner td_uid_51_5df75b688884c_rand  vc_row vc_inner wpb_row td-pb-row" ><div class="vc_column_inner td_uid_52_5df75b6888a7d_rand  wpb_column vc_column_container tdc-inner-column td-pb-span6"><div class="vc_column-inner"><div class="wpb_wrapper"></div></div></div><div class="vc_column_inner td_uid_53_5df75b6888bd6_rand  wpb_column vc_column_container tdc-inner-column td-pb-span6"><div class="vc_column-inner"><div class="wpb_wrapper"></div></div></div></div><div class="vc_row_inner td_uid_54_5df75b6888d4c_rand  vc_row vc_inner wpb_row td-pb-row" ><div class="vc_column_inner td_uid_55_5df75b6888f5e_rand  wpb_column vc_column_container tdc-inner-column td-pb-span6"><div class="vc_column-inner"><div class="wpb_wrapper"></div></div></div><div class="vc_column_inner td_uid_56_5df75b68890b7_rand  wpb_column vc_column_container tdc-inner-column td-pb-span6"><div class="vc_column-inner"><div class="wpb_wrapper"></div></div></div></div></div></div><div class="vc_column td_uid_57_5df75b68894ae_rand  wpb_column vc_column_container tdc-column td-pb-span4"><div class="wpb_wrapper"><div class="td_block_wrap td_block_9 td_uid_58_5df75b6889a7c_rand td-pb-border-top latest_news_update full-btn desk td_block_template_1 td-column-1 td_block_padding td_block_bot_line"  data-td-block-uid="td_uid_58_5df75b6889a7c" >
<style>

/* inline tdc_css att */

.td_uid_58_5df75b6889a7c_rand{
margin-bottom:0px !important;
}

</style><script>var block_td_uid_58_5df75b6889a7c = new tdBlock();
block_td_uid_58_5df75b6889a7c.id = "td_uid_58_5df75b6889a7c";
block_td_uid_58_5df75b6889a7c.atts = '{"category_id":"116","td_filter_default_txt":"All","ajax_pagination":"","sort":"","limit":"6","custom_title":"Latest News Update","mc1_tl":"25","mc1_el":"0","show_btn":"none","el_class":"latest_news_update full-btn desk","all_modules_space":"20","modules_gap":"10","tdc_css":"eyJhbGwiOnsibWFyZ2luLWJvdHRvbSI6IjAiLCJkaXNwbGF5IjoiIn19","meta_info_border_size":"0px 0px 1px 0","meta_info_border_color":"#d8d8d8","separator":"","custom_url":"","block_template_id":"","m8_tl":"","post_ids":"","category_ids":"","tag_slug":"","autors_id":"","installed_post_types":"","offset":"","td_ajax_filter_type":"","td_ajax_filter_ids":"","td_ajax_preloading":"","f_header_font_header":"","f_header_font_title":"Block header","f_header_font_reset":"","f_header_font_family":"","f_header_font_size":"","f_header_font_line_height":"","f_header_font_style":"","f_header_font_weight":"","f_header_font_transform":"","f_header_font_spacing":"","f_header_":"","f_ajax_font_title":"Ajax categories","f_ajax_font_reset":"","f_ajax_font_family":"","f_ajax_font_size":"","f_ajax_font_line_height":"","f_ajax_font_style":"","f_ajax_font_weight":"","f_ajax_font_transform":"","f_ajax_font_spacing":"","f_ajax_":"","f_more_font_title":"Load more button","f_more_font_reset":"","f_more_font_family":"","f_more_font_size":"","f_more_font_line_height":"","f_more_font_style":"","f_more_font_weight":"","f_more_font_transform":"","f_more_font_spacing":"","f_more_":"","m8f_title_font_header":"","m8f_title_font_title":"Article title","m8f_title_font_reset":"","m8f_title_font_family":"","m8f_title_font_size":"","m8f_title_font_line_height":"","m8f_title_font_style":"","m8f_title_font_weight":"","m8f_title_font_transform":"","m8f_title_font_spacing":"","m8f_title_":"","m8f_cat_font_title":"Article category tag","m8f_cat_font_reset":"","m8f_cat_font_family":"","m8f_cat_font_size":"","m8f_cat_font_line_height":"","m8f_cat_font_style":"","m8f_cat_font_weight":"","m8f_cat_font_transform":"","m8f_cat_font_spacing":"","m8f_cat_":"","m8f_meta_font_title":"Article meta info","m8f_meta_font_reset":"","m8f_meta_font_family":"","m8f_meta_font_size":"","m8f_meta_font_line_height":"","m8f_meta_font_style":"","m8f_meta_font_weight":"","m8f_meta_font_transform":"","m8f_meta_font_spacing":"","m8f_meta_":"","ajax_pagination_infinite_stop":"","css":"","td_column_number":1,"header_color":"","color_preset":"","border_top":"","class":"td_uid_58_5df75b6889a7c_rand","tdc_css_class":"td_uid_58_5df75b6889a7c_rand","tdc_css_class_style":"td_uid_58_5df75b6889a7c_rand_style"}';
block_td_uid_58_5df75b6889a7c.td_column_number = "1";
block_td_uid_58_5df75b6889a7c.block_type = "td_block_9";
block_td_uid_58_5df75b6889a7c.post_count = "6";
block_td_uid_58_5df75b6889a7c.found_posts = "66050";
block_td_uid_58_5df75b6889a7c.header_color = "";
block_td_uid_58_5df75b6889a7c.ajax_pagination_infinite_stop = "";
block_td_uid_58_5df75b6889a7c.max_num_pages = "11009";
tdBlocksArray.push(block_td_uid_58_5df75b6889a7c);
</script><div class="td-block-title-wrap"><h4 class="block-title td-block-title"><span class="td-pulldown-size">Latest News Update</span></h4></div><div id=td_uid_58_5df75b6889a7c class="td_block_inner">

	<div class="td-block-span12">

        <div class="td_module_8 td_module_wrap">

            <div class="item-details">
                <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/advance-tax-payment-deadline-for-ne-states-extended-to-dec-31-cbdt/" rel="bookmark" title="Advance tax payment deadline for NE states extended to Dec 31: CBDT">Advance tax payment deadline for NE states extended to Dec 31: CBDT</a></h3>
                <div class="td-module-meta-info">
                                        <span class="td-post-author-name"><a href="https://www.dailyexcelsior.com/author/admin/">Daily Excelsior</a> <span>-</span> </span>                    <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-16T16:11:14+05:30" >16/12/2019</time></span>                                    </div>
            </div>

            
        </div>

        
	</div> <!-- ./td-block-span12 -->

	<div class="td-block-span12">

        <div class="td_module_8 td_module_wrap">

            <div class="item-details">
                <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/bangladesh-marks-49th-victory-day-with-grand-parade-indian-army-band-contingent-participates/" rel="bookmark" title="Bangladesh marks 49th ‘Victory Day’ with grand  parade; Indian Army band contingent participates">Bangladesh marks 49th ‘Victory Day’ with grand  parade; Indian Army band contingent participates</a></h3>
                <div class="td-module-meta-info">
                                        <span class="td-post-author-name"><a href="https://www.dailyexcelsior.com/author/admin/">Daily Excelsior</a> <span>-</span> </span>                    <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-16T16:11:12+05:30" >16/12/2019</time></span>                                    </div>
            </div>

            
        </div>

        
	</div> <!-- ./td-block-span12 -->

	<div class="td-block-span12">

        <div class="td_module_8 td_module_wrap">

            <div class="item-details">
                <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/cbi-seeks-more-time-to-complete-probe-in-rakesh-asthana-bribery-case/" rel="bookmark" title="CBI seeks more time to complete probe in Rakesh Asthana bribery case">CBI seeks more time to complete probe in Rakesh Asthana bribery case</a></h3>
                <div class="td-module-meta-info">
                                        <span class="td-post-author-name"><a href="https://www.dailyexcelsior.com/author/admin/">Daily Excelsior</a> <span>-</span> </span>                    <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-16T16:10:41+05:30" >16/12/2019</time></span>                                    </div>
            </div>

            
        </div>

        
	</div> <!-- ./td-block-span12 -->

	<div class="td-block-span12">

        <div class="td_module_8 td_module_wrap">

            <div class="item-details">
                <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/modi-calls-citizenship-protests-deeply-distressing-asks-people-not-to-allow-vested-interests-to-divide-society/" rel="bookmark" title="Modi calls citizenship protests ‘deeply distressing’, asks people not to allow ‘vested interests’ to divide society">Modi calls citizenship protests ‘deeply distressing’, asks people not to allow ‘vested interests’ to...</a></h3>
                <div class="td-module-meta-info">
                                        <span class="td-post-author-name"><a href="https://www.dailyexcelsior.com/author/admin/">Daily Excelsior</a> <span>-</span> </span>                    <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-16T15:54:01+05:30" >16/12/2019</time></span>                                    </div>
            </div>

            
        </div>

        
	</div> <!-- ./td-block-span12 -->

	<div class="td-block-span12">

        <div class="td_module_8 td_module_wrap">

            <div class="item-details">
                <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/tributes-paid-to-crpf-dig-killed-in-landslide-on-jammu-srinagar-highway/" rel="bookmark" title="Tributes paid to CRPF DIG killed in landslide on Jammu-Srinagar highway">Tributes paid to CRPF DIG killed in landslide on Jammu-Srinagar highway</a></h3>
                <div class="td-module-meta-info">
                                        <span class="td-post-author-name"><a href="https://www.dailyexcelsior.com/author/admin/">Daily Excelsior</a> <span>-</span> </span>                    <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-16T15:51:41+05:30" >16/12/2019</time></span>                                    </div>
            </div>

            
        </div>

        
	</div> <!-- ./td-block-span12 -->

	<div class="td-block-span12">

        <div class="td_module_8 td_module_wrap">

            <div class="item-details">
                <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/lahore-high-court-issues-notice-to-govt-on-musharrafs-plea-to-halt-high-treason-trial/" rel="bookmark" title="Lahore High court issues notice to Govt on Musharraf’s plea to halt high treason trial">Lahore High court issues notice to Govt on Musharraf’s plea to halt high treason...</a></h3>
                <div class="td-module-meta-info">
                                        <span class="td-post-author-name"><a href="https://www.dailyexcelsior.com/author/admin/">Daily Excelsior</a> <span>-</span> </span>                    <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-16T15:44:34+05:30" >16/12/2019</time></span>                                    </div>
            </div>

            
        </div>

        
	</div> <!-- ./td-block-span12 --></div></div> <!-- ./block --><div class="tdm_block td_block_wrap tdm_block_button td_uid_59_5df75b68e7aa2_rand tdm-content-horiz-right td-pb-border-top desk td_block_template_1"  data-td-block-uid="td_uid_59_5df75b68e7aa2"     >
<style>

/* inline tdc_css att */

.td_uid_59_5df75b68e7aa2_rand{
margin-bottom:20px !important;
}

</style>
<style>

</style><div class="tds-button td-fix-index"><a href="/latest-news/" class="tds-button1 tdm-btn tdm-btn-sm td_uid_60_5df75b69be1f2" ><span class="tdm-btn-text">More</span></a></div></div>
 <!-- A generated by theme --> 

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><div class="td-g-rec td-g-rec-id-custom_ad_4 td_uid_61_5df75b69bef41_rand td_block_template_1 ">
<script type="text/javascript">
var td_screen_width = window.innerWidth;

                    if ( td_screen_width >= 1140 ) {
                        /* large monitors */
                        document.write('<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-9133447367964563" data-ad-slot="3450215779"></ins>');
                        (adsbygoogle = window.adsbygoogle || []).push({});
                    }
            
	                    if ( td_screen_width >= 1019  && td_screen_width < 1140 ) {
	                        /* landscape tablets */
                        document.write('<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-9133447367964563" data-ad-slot="3450215779"></ins>');
	                        (adsbygoogle = window.adsbygoogle || []).push({});
	                    }
	                
                    if ( td_screen_width >= 768  && td_screen_width < 1019 ) {
                        /* portrait tablets */
                        document.write('<ins class="adsbygoogle" style="display:inline-block;width:200px;height:200px" data-ad-client="ca-pub-9133447367964563" data-ad-slot="3450215779"></ins>');
                        (adsbygoogle = window.adsbygoogle || []).push({});
                    }
                
                    if ( td_screen_width < 768 ) {
                        /* Phones */
                        document.write('<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-9133447367964563" data-ad-slot="3450215779"></ins>');
                        (adsbygoogle = window.adsbygoogle || []).push({});
                    }
                </script>
</div>

 <!-- end A --> 

<div class="td-a-rec td-a-rec-id-sidebar  td_uid_62_5df75b69bf7b0_rand td_block_template_1">
<style>

/* inline tdc_css att */

.td_uid_62_5df75b69bf7b0_rand{
margin-top:10px !important;
margin-bottom:10px !important;
}

</style><div id="appbox" style="width:300px;height:250px;background:#fff;border-style: solid; border-width: 8px;border-color:#ff0000;text-align:center;">
   <p style="font-size: 24px; color: #012174;text-align:center;padding:10px;"><strong>Download Daily Excelsior Apps Now:</strong></p>
  <div style="padding-top:30px;"><a href="https://play.google.com/store/apps/details?id=com.dailyexcelsior" target="_blank">
<img class="center_rd" src="https://www.dailyexcelsior.com/wp-content/uploads/2016/06/google-play-store-badge.jpg" alt="google-play-store-badge" width="150" height="42" style="width: 50%;text-align: center;">
</a>


  <a href="https://itunes.apple.com/in/app/daily-excelsior/id1073026978" target="_blank"><img class="center_rd" src="https://www.dailyexcelsior.com/wp-content/uploads/2016/06/appstore_button.jpg" style="
	padding:5px 5px 5px 0;width: 50%;text-align: center;" alt="appstore_button" width="150" height="42" ></a> </div>
</div>
<a href="https://www.dailyexcelsior.com/social-trends/"><img src="https://www.dailyexcelsior.com/wp-content/uploads/2016/10/trending-social-media.jpg" width="100%" ;text-align: center;"></a></div><div class="td_block_wrap td_block_7 td_uid_63_5df75b69c0202_rand td-pb-border-top td_block_template_1 td-column-1 td_block_padding"  data-td-block-uid="td_uid_63_5df75b69c0202" >
<style>

/* inline tdc_css att */

.td_uid_63_5df75b69c0202_rand{
margin-top:50px !important;
margin-bottom:0px !important;
}

</style><script>var block_td_uid_63_5df75b69c0202 = new tdBlock();
block_td_uid_63_5df75b69c0202.id = "td_uid_63_5df75b69c0202";
block_td_uid_63_5df75b69c0202.atts = '{"custom_title":"Editorials","td_filter_default_txt":"All","category_id":"94","ajax_pagination":"","offset":"","sort":"","limit":"6","tdc_css":"eyJhbGwiOnsibWFyZ2luLXRvcCI6IjUwIiwibWFyZ2luLWJvdHRvbSI6IjAiLCJkaXNwbGF5IjoiIn19","separator":"","custom_url":"","block_template_id":"","m6_tl":"","post_ids":"","category_ids":"","tag_slug":"","autors_id":"","installed_post_types":"","el_class":"","td_ajax_filter_type":"","td_ajax_filter_ids":"","td_ajax_preloading":"","f_header_font_header":"","f_header_font_title":"Block header","f_header_font_reset":"","f_header_font_family":"","f_header_font_size":"","f_header_font_line_height":"","f_header_font_style":"","f_header_font_weight":"","f_header_font_transform":"","f_header_font_spacing":"","f_header_":"","f_ajax_font_title":"Ajax categories","f_ajax_font_reset":"","f_ajax_font_family":"","f_ajax_font_size":"","f_ajax_font_line_height":"","f_ajax_font_style":"","f_ajax_font_weight":"","f_ajax_font_transform":"","f_ajax_font_spacing":"","f_ajax_":"","f_more_font_title":"Load more button","f_more_font_reset":"","f_more_font_family":"","f_more_font_size":"","f_more_font_line_height":"","f_more_font_style":"","f_more_font_weight":"","f_more_font_transform":"","f_more_font_spacing":"","f_more_":"","m6f_title_font_header":"","m6f_title_font_title":"Article title","m6f_title_font_reset":"","m6f_title_font_family":"","m6f_title_font_size":"","m6f_title_font_line_height":"","m6f_title_font_style":"","m6f_title_font_weight":"","m6f_title_font_transform":"","m6f_title_font_spacing":"","m6f_title_":"","m6f_cat_font_title":"Article category tag","m6f_cat_font_reset":"","m6f_cat_font_family":"","m6f_cat_font_size":"","m6f_cat_font_line_height":"","m6f_cat_font_style":"","m6f_cat_font_weight":"","m6f_cat_font_transform":"","m6f_cat_font_spacing":"","m6f_cat_":"","m6f_meta_font_title":"Article meta info","m6f_meta_font_reset":"","m6f_meta_font_family":"","m6f_meta_font_size":"","m6f_meta_font_line_height":"","m6f_meta_font_style":"","m6f_meta_font_weight":"","m6f_meta_font_transform":"","m6f_meta_font_spacing":"","m6f_meta_":"","ajax_pagination_infinite_stop":"","css":"","td_column_number":1,"header_color":"","color_preset":"","border_top":"","class":"td_uid_63_5df75b69c0202_rand","tdc_css_class":"td_uid_63_5df75b69c0202_rand","tdc_css_class_style":"td_uid_63_5df75b69c0202_rand_style"}';
block_td_uid_63_5df75b69c0202.td_column_number = "1";
block_td_uid_63_5df75b69c0202.block_type = "td_block_7";
block_td_uid_63_5df75b69c0202.post_count = "6";
block_td_uid_63_5df75b69c0202.found_posts = "4758";
block_td_uid_63_5df75b69c0202.header_color = "";
block_td_uid_63_5df75b69c0202.ajax_pagination_infinite_stop = "";
block_td_uid_63_5df75b69c0202.max_num_pages = "793";
tdBlocksArray.push(block_td_uid_63_5df75b69c0202);
</script><div class="td-block-title-wrap"><h4 class="block-title td-block-title"><span class="td-pulldown-size">Editorials</span></h4></div><div id=td_uid_63_5df75b69c0202 class="td_block_inner">

	<div class="td-block-span12">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://www.dailyexcelsior.com/inclement-weather-conditions/" rel="bookmark" class="td-image-wrap" title="Inclement weather conditions"><img width="100" height="70" class="entry-thumb" src="https://www.dailyexcelsior.com/wp-content/themes/Newspaper/images/no-thumb/td_100x70.png" alt=""/></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/inclement-weather-conditions/" rel="bookmark" title="Inclement weather conditions">Inclement weather conditions</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-16T10:40:19+05:30" >16/12/2019</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span12 -->

	<div class="td-block-span12">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://www.dailyexcelsior.com/veterinary-sciences-university/" rel="bookmark" class="td-image-wrap" title="Veterinary Sciences University"><img width="100" height="70" class="entry-thumb" src="https://www.dailyexcelsior.com/wp-content/themes/Newspaper/images/no-thumb/td_100x70.png" alt=""/></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/veterinary-sciences-university/" rel="bookmark" title="Veterinary Sciences University">Veterinary Sciences University</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-16T10:39:55+05:30" >16/12/2019</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span12 -->

	<div class="td-block-span12">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://www.dailyexcelsior.com/sansad-adarsh-gram-yojana/" rel="bookmark" class="td-image-wrap" title="Sansad Adarsh Gram Yojana"><img width="100" height="70" class="entry-thumb" src="https://www.dailyexcelsior.com/wp-content/themes/Newspaper/images/no-thumb/td_100x70.png" alt=""/></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/sansad-adarsh-gram-yojana/" rel="bookmark" title="Sansad Adarsh Gram Yojana">Sansad Adarsh Gram Yojana</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-15T00:42:22+05:30" >15/12/2019</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span12 -->

	<div class="td-block-span12">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://www.dailyexcelsior.com/dialysis-units-in-rajouri-and-poonch/" rel="bookmark" class="td-image-wrap" title="Dialysis units in Rajouri and Poonch"><img width="100" height="70" class="entry-thumb" src="https://www.dailyexcelsior.com/wp-content/themes/Newspaper/images/no-thumb/td_100x70.png" alt=""/></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/dialysis-units-in-rajouri-and-poonch/" rel="bookmark" title="Dialysis units in Rajouri and Poonch">Dialysis units in Rajouri and Poonch</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-15T00:42:07+05:30" >15/12/2019</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span12 -->

	<div class="td-block-span12">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://www.dailyexcelsior.com/new-assembly-complex-in-hiccups/" rel="bookmark" class="td-image-wrap" title="New Assembly complex in hiccups"><img width="100" height="70" class="entry-thumb" src="https://www.dailyexcelsior.com/wp-content/themes/Newspaper/images/no-thumb/td_100x70.png" alt=""/></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/new-assembly-complex-in-hiccups/" rel="bookmark" title="New Assembly complex in hiccups">New Assembly complex in hiccups</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-14T11:02:11+05:30" >14/12/2019</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span12 -->

	<div class="td-block-span12">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://www.dailyexcelsior.com/fix-responsibility-for-delays/" rel="bookmark" class="td-image-wrap" title="Fix responsibility for delays"><img width="100" height="70" class="entry-thumb" src="https://www.dailyexcelsior.com/wp-content/themes/Newspaper/images/no-thumb/td_100x70.png" alt=""/></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://www.dailyexcelsior.com/fix-responsibility-for-delays/" rel="bookmark" title="Fix responsibility for delays">Fix responsibility for delays</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-14T11:01:04+05:30" >14/12/2019</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span12 --></div></div> <!-- ./block --><div class="tdm_block td_block_wrap tdm_block_button td_uid_64_5df75b69e597f_rand tdm-content-horiz-right td-pb-border-top td_block_template_1"  data-td-block-uid="td_uid_64_5df75b69e597f"     >
<style>

/* inline tdc_css att */

.td_uid_64_5df75b69e597f_rand{
margin-bottom:50px !important;
}

</style>
<style>

</style><div class="tds-button td-fix-index"><a href="/edit/" class="tds-button1 tdm-btn tdm-btn-sm td_uid_65_5df75b6a9933c" ><span class="tdm-btn-text">More</span></a></div></div><div class="td_block_wrap td_block_title td_uid_66_5df75b6a9a291_rand td-pb-border-top  reb-btn-n td_block_template_1"  data-td-block-uid="td_uid_66_5df75b6a9a291" >
<style>

/* inline tdc_css att */

.td_uid_66_5df75b6a9a291_rand{
margin-bottom:0px !important;
}

</style><h4 class="block-title td-block-title"><span class="td-pulldown-size">Weekly Special</span></h4><div class="td_mod_wrap"></div></div><div class="tdm_block td_block_wrap tdm_block_list td_uid_67_5df75b6a9ad71_rand tdm-content-horiz-left td-pb-border-top td_block_template_1 tdm-list-with-icons"  data-td-block-uid="td_uid_67_5df75b6a9ad71" >
<style>

/* custom css */
.td_uid_67_5df75b6a9ad71_rand .tdm-list-item i {
				    margin-right: 8px;
				}
/* inline tdc_css att */

.td_uid_67_5df75b6a9ad71_rand{
margin-bottom:50px !important;
}

</style><div class="tdm-col td-fix-index"><ul class="tdm-list-items"><li class="tdm-list-item"><span class="tdm-list-text"><ul class="ul-links"></span></li><li class="tdm-list-item"><span class="tdm-list-text">		  </span></li><li class="tdm-list-item"><span class="tdm-list-text">			 <li><a href="/art-world/">Art World</a></li></span></li><li class="tdm-list-item"><span class="tdm-list-text">	         <li><a href="/heritage/">Heritage</a></li></span></li><li class="tdm-list-item"><span class="tdm-list-text">		     <li><a href="/nature/">Nature</a></li></span></li><li class="tdm-list-item"><span class="tdm-list-text">		     <li><a href="/food/">Food Shelf</a></li></span></li><li class="tdm-list-item"><span class="tdm-list-text">		     <li><a href="/life-style/">Life Style</a></li></span></li><li class="tdm-list-item"><span class="tdm-list-text">		     <li><a href="/travelogue/">Travelogue</a></li></span></li><li class="tdm-list-item"><span class="tdm-list-text">		     <li><a href="/health/">Healthline</a></li></span></li><li class="tdm-list-item"><span class="tdm-list-text">			  <li><a href="/fashion/">Fashion</a></li></span></li><li class="tdm-list-item"><span class="tdm-list-text">			  <li><a href="/science/">Science & Technology</a></li></span></li><li class="tdm-list-item"><span class="tdm-list-text">			<li><a href="/career-education/">Career & Education</a></li></span></li><li class="tdm-list-item"><span class="tdm-list-text">			<li><a href="/bollywood/">Bollywood Buzz</a></li></span></li><li class="tdm-list-item"><span class="tdm-list-text">			<li><a href="/bookreview/">Bookreview</a></li></span></li><li class="tdm-list-item"><span class="tdm-list-text"><li><a href="/tourism/">Tourism</a></li></span></li><li class="tdm-list-item"><span class="tdm-list-text">			<li><a href="/weekly-sports/">Sports</a></li></span></li><li class="tdm-list-item"><span class="tdm-list-text"><li><a href="/sacred-space/">Sacred Space</a></li></span></li><li class="tdm-list-item"><span class="tdm-list-text">          </ul></span></li></ul></div></div><div class="tdm_block td_block_wrap tdm_block_button td_uid_68_5df75b6b48554_rand tdm-block-button-full tdm-content-horiz-center td-pb-border-top td_block_template_1"  data-td-block-uid="td_uid_68_5df75b6b48554"     >
<style>
.td_uid_69_5df75b6be3214 .tdm-btn,
				.td_uid_69_5df75b6be3214 {
					background-color: #012174;
				}
				
				.td_uid_69_5df75b6be3214 i:first-child {
					margin-right: 14px;
				}
</style><div class="tds-button td-fix-index"><div class="tds-button4 tdm-btn-lg-wrap td_uid_69_5df75b6be3214"><a href="http://www.dailyexcelsior.com/municipal-corporators/" class="tdm-btn tdm-button-a tdm-btn-lg" ><i class="tdc-font-fa tdc-font-fa-vcard"></i><span class="tdm-btn-text">Know Your Corporators</span></a><a href="http://www.dailyexcelsior.com/municipal-corporators/" class="tdm-btn tdm-button-b tdm-btn-lg" ><i class="tdc-font-fa tdc-font-fa-vcard"></i><span class="tdm-btn-text">Know Your Corporators</span></a></div></div></div>
 <!-- A generated by theme --> 

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><div class="td-g-rec td-g-rec-id-custom_ad_4 td_uid_70_5df75b6be4061_rand td_block_template_1 ">
<script type="text/javascript">
var td_screen_width = window.innerWidth;

                    if ( td_screen_width >= 1140 ) {
                        /* large monitors */
                        document.write('<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-9133447367964563" data-ad-slot="3450215779"></ins>');
                        (adsbygoogle = window.adsbygoogle || []).push({});
                    }
            
	                    if ( td_screen_width >= 1019  && td_screen_width < 1140 ) {
	                        /* landscape tablets */
                        document.write('<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-9133447367964563" data-ad-slot="3450215779"></ins>');
	                        (adsbygoogle = window.adsbygoogle || []).push({});
	                    }
	                
                    if ( td_screen_width >= 768  && td_screen_width < 1019 ) {
                        /* portrait tablets */
                        document.write('<ins class="adsbygoogle" style="display:inline-block;width:200px;height:200px" data-ad-client="ca-pub-9133447367964563" data-ad-slot="3450215779"></ins>');
                        (adsbygoogle = window.adsbygoogle || []).push({});
                    }
                
                    if ( td_screen_width < 768 ) {
                        /* Phones */
                        document.write('<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-9133447367964563" data-ad-slot="3450215779"></ins>');
                        (adsbygoogle = window.adsbygoogle || []).push({});
                    }
                </script>
</div>

 <!-- end A --> 

<div class="td_block_wrap td_block_title td_uid_71_5df75b6be48d7_rand td-pb-border-top import-h2 td_block_template_1"  data-td-block-uid="td_uid_71_5df75b6be48d7" ><h4 class="block-title td-block-title"><span class="td-pulldown-size">Other Important Links</span></h4><div class="td_mod_wrap"></div></div><div class="tdm_block td_block_wrap tdm_block_list td_uid_72_5df75b6be5114_rand tdm-content-horiz-left td-pb-border-top td_block_template_1 tdm-list-with-icons"  data-td-block-uid="td_uid_72_5df75b6be5114" >
<style>

/* custom css */
.td_uid_72_5df75b6be5114_rand .tdm-list-item i {
				    margin-right: 8px;
				}
/* inline tdc_css att */

.td_uid_72_5df75b6be5114_rand{
margin-bottom:50px !important;
}

</style><div class="tdm-col td-fix-index"><ul class="tdm-list-items"><li class="tdm-list-item"><span class="tdm-list-text"><ul class="ul-links"></span></li><li class="tdm-list-item"><span class="tdm-list-text">		  </span></li><li class="tdm-list-item"><span class="tdm-list-text">			 <li><a href="/results-lists/">Results &amp; Lists</a></li></span></li><li class="tdm-list-item"><span class="tdm-list-text">	         <li><a href="/real-states/">Real Estate</a></li></span></li><li class="tdm-list-item"><span class="tdm-list-text">		     <li><a href="/brides/">Brides</a></li></span></li><li class="tdm-list-item"><span class="tdm-list-text">		     <li><a href="/grooms/">Grooms</a></li></span></li><li class="tdm-list-item"><span class="tdm-list-text">		     <li><a href="/obituaries/">Obituaries</a></li></span></li><li class="tdm-list-item"><span class="tdm-list-text">		     <li><a href="/employment/">Employment</a></li></span></li><li class="tdm-list-item"><span class="tdm-list-text">		     <li><a href="/tender/">Tender</a></li></span></li><li class="tdm-list-item"><span class="tdm-list-text">			  <li><a href="/apps/">Download App</a></li></span></li><li class="tdm-list-item"><span class="tdm-list-text">			  <li><a href="/social-trends/">Social Trends</a></li></span></li><li class="tdm-list-item"><span class="tdm-list-text">			<li><a href="/miscellaneous/">Miscellaneous</a></li></span></li><li class="tdm-list-item"><span class="tdm-list-text">			<li><a href="/education/">Education</a></li></span></li><li class="tdm-list-item"><span class="tdm-list-text">			<li><a href="http://excelsiornews.com/">Excelsior Videos</a></li></span></li><li class="tdm-list-item"><span class="tdm-list-text"></span></li><li class="tdm-list-item"><span class="tdm-list-text">          </ul></span></li></ul></div></div><div class="td_block_wrap td_block_title td_uid_73_5df75b6cbdbcb_rand td-pb-border-top import-h2 td_block_template_1"  data-td-block-uid="td_uid_73_5df75b6cbdbcb" ><h4 class="block-title td-block-title"><span class="td-pulldown-size">Advertise Tariff Plan</span></h4><div class="td_mod_wrap"></div></div><div class="tdm_block td_block_wrap tdm_block_list td_uid_74_5df75b6cbe3d3_rand tdm-content-horiz-left td-pb-border-top td_block_template_1 tdm-list-with-icons"  data-td-block-uid="td_uid_74_5df75b6cbe3d3" >
<style>

/* custom css */
.td_uid_74_5df75b6cbe3d3_rand .tdm-list-item i {
				    margin-right: 11px;
				}
/* inline tdc_css att */

.td_uid_74_5df75b6cbe3d3_rand{
margin-bottom:50px !important;
}

</style><div class="tdm-col td-fix-index"><ul class="tdm-list-items"><li class="tdm-list-item"><span class="tdm-list-text"><ul class="ul-links"></span></li><li class="tdm-list-item"><span class="tdm-list-text">			 <li><a href="/tarif-plan/">Internet Edition</a></li></span></li><li class="tdm-list-item"><span class="tdm-list-text">	         <li><a href="/advertisement_tariff.pdf">Print Edition</a></li></span></li><li class="tdm-list-item"><span class="tdm-list-text">			  <li><a href="/payonline/">Pay Online</a></li></span></li><li class="tdm-list-item"><span class="tdm-list-text">			 </ul></span></li></ul></div></div><div class="wpb_wrapper td_block_wrap vc_widget_sidebar td_uid_75_5df75b6d68680_rand " ><aside class="td_block_template_1 widget widget_calendar"><h4 class="block-title"><span>Archive Section</span></h4><div id="calendar_wrap" class="calendar_wrap"><table id="wp-calendar">
	<caption>December 2019</caption>
	<thead>
	<tr>
		<th scope="col" title="Monday">M</th>
		<th scope="col" title="Tuesday">T</th>
		<th scope="col" title="Wednesday">W</th>
		<th scope="col" title="Thursday">T</th>
		<th scope="col" title="Friday">F</th>
		<th scope="col" title="Saturday">S</th>
		<th scope="col" title="Sunday">S</th>
	</tr>
	</thead>

	<tfoot>
	<tr>
		<td colspan="3" id="prev"><a href="https://www.dailyexcelsior.com/2019/11/">&laquo; Nov</a></td>
		<td class="pad">&nbsp;</td>
		<td colspan="3" id="next" class="pad">&nbsp;</td>
	</tr>
	</tfoot>

	<tbody>
	<tr>
		<td colspan="6" class="pad">&nbsp;</td><td><a href="https://www.dailyexcelsior.com/2019/12/01/" aria-label="Posts published on December 1, 2019">1</a></td>
	</tr>
	<tr>
		<td><a href="https://www.dailyexcelsior.com/2019/12/02/" aria-label="Posts published on December 2, 2019">2</a></td><td><a href="https://www.dailyexcelsior.com/2019/12/03/" aria-label="Posts published on December 3, 2019">3</a></td><td><a href="https://www.dailyexcelsior.com/2019/12/04/" aria-label="Posts published on December 4, 2019">4</a></td><td><a href="https://www.dailyexcelsior.com/2019/12/05/" aria-label="Posts published on December 5, 2019">5</a></td><td><a href="https://www.dailyexcelsior.com/2019/12/06/" aria-label="Posts published on December 6, 2019">6</a></td><td><a href="https://www.dailyexcelsior.com/2019/12/07/" aria-label="Posts published on December 7, 2019">7</a></td><td><a href="https://www.dailyexcelsior.com/2019/12/08/" aria-label="Posts published on December 8, 2019">8</a></td>
	</tr>
	<tr>
		<td><a href="https://www.dailyexcelsior.com/2019/12/09/" aria-label="Posts published on December 9, 2019">9</a></td><td><a href="https://www.dailyexcelsior.com/2019/12/10/" aria-label="Posts published on December 10, 2019">10</a></td><td><a href="https://www.dailyexcelsior.com/2019/12/11/" aria-label="Posts published on December 11, 2019">11</a></td><td><a href="https://www.dailyexcelsior.com/2019/12/12/" aria-label="Posts published on December 12, 2019">12</a></td><td><a href="https://www.dailyexcelsior.com/2019/12/13/" aria-label="Posts published on December 13, 2019">13</a></td><td><a href="https://www.dailyexcelsior.com/2019/12/14/" aria-label="Posts published on December 14, 2019">14</a></td><td><a href="https://www.dailyexcelsior.com/2019/12/15/" aria-label="Posts published on December 15, 2019">15</a></td>
	</tr>
	<tr>
		<td id="today"><a href="https://www.dailyexcelsior.com/2019/12/16/" aria-label="Posts published on December 16, 2019">16</a></td><td>17</td><td>18</td><td>19</td><td>20</td><td>21</td><td>22</td>
	</tr>
	<tr>
		<td>23</td><td>24</td><td>25</td><td>26</td><td>27</td><td>28</td><td>29</td>
	</tr>
	<tr>
		<td>30</td><td>31</td>
		<td class="pad" colspan="5">&nbsp;</td>
	</tr>
	</tbody>
	</table></div></aside><aside class="widget_text td_block_template_1 widget widget_custom_html"><div class="textwidget custom-html-widget"><a class="calender_more" href="/archive-section/">MORE</a></div></aside></div><div class="tdm_block td_block_wrap tdm_block_button td_uid_76_5df75b6d73363_rand tdm-block-button-full tdm-content-horiz-center td-pb-border-top td_block_template_1"  data-td-block-uid="td_uid_76_5df75b6d73363"     >
<style>

/* inline tdc_css att */

.td_uid_76_5df75b6d73363_rand{
margin-bottom:10px !important;
}

</style>
<style>
.td_uid_77_5df75b6e4248f .tdm-btn,
				.td_uid_77_5df75b6e4248f {
					background-color: #c90203;
				}
				
				.td_uid_77_5df75b6e4248f i:first-child {
					margin-right: 14px;
				}
</style><div class="tds-button td-fix-index"><div class="tds-button4 tdm-btn-lg-wrap td_uid_77_5df75b6e4248f"><a href="http://www.dailyexcelsior.com/ex-mlas-report-card/" class="tdm-btn tdm-button-a tdm-btn-lg" ><i class="tdc-font-fa tdc-font-fa-book"></i><span class="tdm-btn-text">Ex MLAs Report Card</span></a><a href="http://www.dailyexcelsior.com/ex-mlas-report-card/" class="tdm-btn tdm-button-b tdm-btn-lg" ><i class="tdc-font-fa tdc-font-fa-book"></i><span class="tdm-btn-text">Ex MLAs Report Card</span></a></div></div></div></div></div></div></div>
		<script>

			jQuery(window).load(function () {
				jQuery('body').find('#td_uid_5_5df75b5dc4817 .td-element-style').each(function (index, element) {
					jQuery(element).css('opacity', 1);
					return;
				});
			});

		</script>

		
			<script>

				jQuery(window).ready(function () {

					// We need timeout because the content must be rendered and interpreted on client
					setTimeout(function () {

						var $content = jQuery('body').find('#tdc-live-iframe'),
							refWindow = undefined;

						if ($content.length) {
							$content = $content.contents();
							refWindow = document.getElementById('tdc-live-iframe').contentWindow || document.getElementById('tdc-live-iframe').contentDocument;

						} else {
							$content = jQuery('body');
							refWindow = window;
						}

						$content.find('#td_uid_5_5df75b5dc4817 .td-element-style').each(function (index, element) {
							jQuery(element).css('opacity', 1);
							return;
						});
					});

				}, 200);
			</script>

			                </div>
                            </div> <!-- /.td-main-content-wrap -->


            <!-- Instagram -->




	<!-- Footer -->
	<div class="td-footer-wrapper td-container-wrap td-footer-template-13 ">
    <div class="td-container">
        <div class="td-pb-row">
            <div class="td-pb-span12">
                <aside class="widget_text td_block_template_1 widget widget_custom_html"><div class="textwidget custom-html-widget"><ul>
	<li><a href="/">Home</a></li>
	<li><a href="/about-us/">About Us </a></li>
	<li><a href="/edit/">Opinion </a></li>
	<li><a href="/archive-section/">Archive Section </a></li>
	<li><a href="/suggestion/">Suggestions</a></li>
</ul>  
<ul>
	<li><a href="mailto:editor@dailyexcelsior.com">Send Mail </a></li>
	<li><a href="/letters/">Mailbag</a></li>
	<li><a href="/air-rail-timing/">Air Rail Timing</a></li>
	<li><a href="/weather/">Weather </a></li>
</ul>

<ul>
		<li><a href="/disclaimer/">Disclaimer</a></li>
	<li><a href="/terms-of-use/">Terms of Use</a></li>	<li><a href="/privacy-policy/">Privacy Policy</a></li>
	<li><a href="/payonline/">Pay Online</a></li>
	<li><a href="/letters/">Letters</a></li>	<!--<li><a href="#"><span>Click here</span> to Bookmark</a>-->
</ul>

<ul><li class="heading">Weekly Sunday Magazine</li>
<!--<li><a href="/all-your-answers/">All Your Answers</a>
	<li><a href="/cipher-decipher/">Cipher - Decipher</a> </li>--> 
	<li><a href="/inner-voice/">Inner Voice</a></li>
<!--<li><a href="/sports-quiz/">Sports Quiz</a>-->
</ul>
<ul>
	<h4 style="color: white;margin-top: 0px;">Subscribe</h4>
	
	
	
	
	<!-- Begin MailChimp Signup Form -->
<link href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css" rel="stylesheet" type="text/css"/>
<style type="text/css">
	#mc_embed_signup{background:#012174; clear:left; font:14px Helvetica,Arial,sans-serif;  width:225px;}
	/* Add your own MailChimp form style overrides in your site stylesheet or in this style block.
	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
  .subscribebtn {
  -webkit-border-radius: 6;
  -moz-border-radius: 6;
  border-radius: 6px;
  font-family: Georgia;
  color: #ffffff;
  font-size: 18px;
  background: linear-gradient(#cd0102, #990304) !important;
  padding: 5px 10px 5px 10px;
  text-decoration: none;
}

.subscribebtn:hover {
  background: linear-gradient(#cd0102, #990304) !important;
  text-decoration: none;
}

</style>
<div id="mc_embed_signup">
<form action="//dailyexcelsior.us10.list-manage.com/subscribe/post?u=66e65be6eec1294fbd6fb0f78&amp;id=4360780c5c" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate="">
    <div id="mc_embed_signup_scroll">
      <p style="color:#fff;">As a subscriber, you will have full access to all of our Newsletters and News Bulletins.</p>
	<input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" style="width:90%" required=""/>
    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_66e65be6eec1294fbd6fb0f78_4360780c5c" tabindex="-1" value=""/></div>
    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="subscribebtn "/></div>
    </div>
</form>
</div>

<!--End mc_embed_signup-->

	
	
	
	
	
	
	
</ul>

<div style="color: #fff;font-family: arial;float: left;width: 100%;padding-top: 40px;">


<span><strong>Edited, Printed, Published by Kamal Rohmetra and owned by Excelsior. Executive Editor Neeraj Rohmetra.</strong> Printed at Excelsior Printer Pvt Ltd, Janipura, Jammu and published from EXCELSIOR HOUSE, Janipura, Jammu 180007 (J&amp;K).<br /> Phones: +91-191 2537055, +91-1912537901, +91-191 2539178. Fax: +91-191-2537831<br />
Daily Excelsior Srinagar office: 2 Partap Park Srinagar Phones:+91-194 2450213</span></div>
</div></aside>
                <div class="footer-social-wrap td-social-style-2">
                    
            <span class="td-social-icon-wrap">
                <a target="_blank" href="https://www.facebook.com/dailyexcelsior" title="Facebook">
                    <i class="td-icon-font td-icon-facebook"></i>
                    <span class="td-social-name">Facebook</span>
                </a>
            </span>
            <span class="td-social-icon-wrap">
                <a target="_blank" href="https://www.instagram.com/dailyexcelsior/" title="Instagram">
                    <i class="td-icon-font td-icon-instagram"></i>
                    <span class="td-social-name">Instagram</span>
                </a>
            </span>
            <span class="td-social-icon-wrap">
                <a target="_blank" href="http://thedailyexcelsior.tumblr.com/" title="Tumblr">
                    <i class="td-icon-font td-icon-tumblr"></i>
                    <span class="td-social-name">Tumblr</span>
                </a>
            </span>
            <span class="td-social-icon-wrap">
                <a target="_blank" href="https://twitter.com/dailyexcelsior1" title="Twitter">
                    <i class="td-icon-font td-icon-twitter"></i>
                    <span class="td-social-name">Twitter</span>
                </a>
            </span>
            <span class="td-social-icon-wrap">
                <a target="_blank" href="https://www.youtube.com/channel/UCT4ZAqOV3-2s5pKnBEhh4fw" title="Youtube">
                    <i class="td-icon-font td-icon-youtube"></i>
                    <span class="td-social-name">Youtube</span>
                </a>
            </span>                </div>
            </div>
        </div>
    </div>
</div>
	<!-- Sub Footer -->
	    <div class="td-sub-footer-container td-container-wrap ">
        <div class="td-container">
            <div class="td-pb-row">
                <div class="td-pb-span td-sub-footer-menu">
                                    </div>

                <div class="td-pb-span td-sub-footer-copy">
                    Copyright © 2019 DailyExcelsior All Rights Reserved.

<p style="float:right;" >Designed Developed & Hosted by Pugmarks.</p>                </div>
            </div>
        </div>
    </div>


</div><!--close td-outer-wrap-->



    <!--

        Theme: Newspaper by tagDiv.com 2017
        Version: 8.7 (rara)
        Deploy mode: deploy
        
        uid: 5df75b6e4b084
    -->

    
<!-- Custom css form theme panel -->
<style type="text/css" media="screen">
/* custom css theme panel */
.latest_news_update .td_module_8 .td-module-meta-info{display:none;}
.center_rd {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
}

.entry-crumbs a {
color: #C3C3C3;
pointer-events: none !important;
}


/* custom responsive css from theme panel (Advanced CSS) */
@media (min-width: 1141px) {
.td-footer-wrapper .custom-html-widget ul{
    width:20%;
    float:left;
}

.td-sub-footer-copy{
    width:100%;
}
}
</style>

<script type='text/javascript'>
/* <![CDATA[ */
var wpcf7 = {"apiSettings":{"root":"https:\/\/www.dailyexcelsior.com\/wp-json\/contact-form-7\/v1","namespace":"contact-form-7\/v1"},"recaptcha":{"messages":{"empty":"Please verify that you are not a robot."}},"cached":"1"};
/* ]]> */
</script>
<script type='text/javascript' src='https://www.dailyexcelsior.com/wp-content/plugins/contact-form-7/includes/js/scripts.js?ver=5.0.5'></script>
<script type='text/javascript'>
/* <![CDATA[ */
var countVars = {"disqusShortname":"dailyexcelsiornews"};
/* ]]> */
</script>
<script type='text/javascript' src='https://www.dailyexcelsior.com/wp-content/plugins/disqus-comment-system/public/js/comment_count.js?ver=3.0.16'></script>
<script type='text/javascript' src='https://www.dailyexcelsior.com/wp-content/themes/Newspaper/js/tagdiv_theme.min.js?ver=8.7'></script>
<script type='text/javascript' src='https://www.dailyexcelsior.com/wp-includes/js/comment-reply.min.js?ver=4.9.7'></script>
<script type='text/javascript' src='https://www.dailyexcelsior.com/wp-includes/js/wp-embed.min.js?ver=4.9.7'></script>

<!-- JS generated by theme -->

<script>
    

jQuery(document).ready(function() {
    jQuery("#td_uid_10_5df75b5df3fc0").iosSlider({
        snapToChildren: true,
        desktopClickDrag: true,
        keyboardControls: false,
        responsiveSlideContainer: true,
        responsiveSlides: true,
        
            autoSlide: true,
            autoSlideTimer: 5000,
            

        infiniteSlider: true,
        navPrevSelector: jQuery("#td_uid_10_5df75b5df3fc0 .prevButton"),
        navNextSelector: jQuery("#td_uid_10_5df75b5df3fc0 .nextButton")
        ,
                //onSliderLoaded : td_resize_normal_slide,
                //onSliderResize : td_resize_normal_slide_and_update
    });
});
    

	

		(function(){
			var html_jquery_obj = jQuery('html');

			if (html_jquery_obj.length && (html_jquery_obj.is('.ie8') || html_jquery_obj.is('.ie9'))) {

				var path = 'https://www.dailyexcelsior.com/wp-content/themes/Newspaper-child/style.css';

				jQuery.get(path, function(data) {

					var str_split_separator = '#td_css_split_separator';
					var arr_splits = data.split(str_split_separator);
					var arr_length = arr_splits.length;

					if (arr_length > 1) {

						var dir_path = 'https://www.dailyexcelsior.com/wp-content/themes/Newspaper';
						var splited_css = '';

						for (var i = 0; i < arr_length; i++) {
							if (i > 0) {
								arr_splits[i] = str_split_separator + ' ' + arr_splits[i];
							}
							//jQuery('head').append('<style>' + arr_splits[i] + '</style>');

							var formated_str = arr_splits[i].replace(/\surl\(\'(?!data\:)/gi, function regex_function(str) {
								return ' url(\'' + dir_path + '/' + str.replace(/url\(\'/gi, '').replace(/^\s+|\s+$/gm,'');
							});

							splited_css += "<style>" + formated_str + "</style>";
						}

						var td_theme_css = jQuery('link#td-theme-css');

						if (td_theme_css.length) {
							td_theme_css.after(splited_css);
						}
					}
				});
			}
		})();

	
	
</script>



			<div id="tdw-css-writer" style="display: none" class="tdw-drag-dialog tdc-window-sidebar">
				<header>

				
					<a title="Editor" class="tdw-tab tdc-tab-active" href="#" data-tab-content="tdw-tab-editor">Edit with Live CSS</a>
					<div class="tdw-less-info" title="This will be red when errors are detected in your CSS and LESS"></div>
				
				</header>
				<div class="tdw-content">

					
					<div class="tdw-tabs-content tdw-tab-editor tdc-tab-content-active">


						<script>

							(function(jQuery, undefined) {

								jQuery(window).ready(function() {

									if ( 'undefined' !== typeof tdcAdminIFrameUI ) {
										var $liveIframe  = tdcAdminIFrameUI.getLiveIframe();

										if ( $liveIframe.length ) {
											$liveIframe.load(function() {
												$liveIframe.contents().find( 'body').append( '<textarea class="tdw-css-writer-editor" style="display: none"></textarea>' );
											});
										}
									}

								});

							})(jQuery);

						</script>


						<textarea class="tdw-css-writer-editor td_live_css_uid_1_5df75b6e4b61c">.page-id-6724 .td_module_10 .td-module-thumb{
    display:none;
}

.page-id-6724  .td_module_10 .item-details{
    margin-left:0px
}

.page-id-6724 .td_module_10  .td-module-comments{
    display:none;
}

.page-id-12385 .td_module_10 .td-module-thumb{
    display:none;
}

.page-id-12385  .td_module_10 .item-details{
    margin-left:0px
}

.page-id-12385 .td_module_10  .td-module-comments{
    display:none;
}


.page-id-6728 .td_module_10 .td-module-thumb{
    display:none;
}

.page-id-6728  .td_module_10 .item-details{
    margin-left:0px
}

.page-id-6728 .td_module_10  .td-module-comments{
    display:none;
}


.page-id-6730 .td_module_10 .td-module-thumb{
    display:none;
}

.page-id-6730  .td_module_10 .item-details{
    margin-left:0px
}

.page-id-6730 .td_module_10  .td-module-comments{
    display:none;
}



.page-id-99 .td_module_16 .td-module-thumb{
    display:none;
}

.page-id-99 .td_module_16 .item-details{
    margin-left:0px
}

.page-id-99 .td_module_16  .td-module-comments{
    display:none;
}




.page-id-1619 .td_module_16 .td-module-thumb{
    display:none;
}

.page-id-1619 .td_module_16 .item-details{
    margin-left:0px
}

.page-id-1619 .td_module_16  .td-module-comments{
    display:none;
}




.page-id-603 .td_module_16 .td-module-thumb{
    display:none;
}

.page-id-603 .td_module_16 .item-details{
    margin-left:0px
}

.page-id-603 .td_module_16  .td-module-comments{
    display:none;
}



.page-id-107 .td_module_16 .td-module-thumb{
    display:none;
}

.page-id-107 .td_module_16 .item-details{
    margin-left:0px
}

.page-id-107 .td_module_16  .td-module-comments{
    display:none;
}


.page-id-109 .td_module_16 .td-module-thumb{
    display:none;
}

.page-id-109 .td_module_16 .item-details{
    margin-left:0px
}

.page-id-109 .td_module_16  .td-module-comments{
    display:none;
}

.page-id-112 .td_module_8  .td-module-comments{
    display:none;
}

.page-id-114 .td_module_8  .td-module-comments{
    display:none;
}



.page-id-21427 .td_module_16 .td-module-thumb{
    display:none;
}

.page-id-21427 .td_module_16 .item-details{
    margin-left:0px
}

.page-id-21427 .td_module_16  .td-module-comments{
    display:none;
}


.page-id-2178 .td_module_8  .td-module-comments{
    display:none;
}


.page-id-6722 .td_module_8  .td-module-comments{
    display:none;
}



.page-id-2192 .td_module_8  .td-module-comments{
    display:none;
}


.page-id-2188 .td_module_8  .td-module-comments{
    display:none;
}


.page-id-2180 .td_module_8  .td-module-comments{
    display:none;
}

.page-id-2185 .td_module_8  .td-module-comments{
    display:none;
}


.page-id-219524 .td_module_8  .td-module-comments{
    display:none;
}

.desk { display:block !important; }  
.mobi { display:none !important; } 

@media only screen and (max-width: 672px) {
    
.desk { display:none !important; }  
.mobi { display:block !important; } 


}</textarea>
						<div id="td_live_css_uid_1_5df75b6e4b61c" class="td-code-editor"></div>


						<script>
							jQuery(window).load(function (){

								if ( 'undefined' !== typeof tdLiveCssInject ) {

									tdLiveCssInject.init();


									var editor_textarea = jQuery('.td_live_css_uid_1_5df75b6e4b61c');
									var languageTools = ace.require("ace/ext/language_tools");
									var tdcCompleter = {
										getCompletions: function (editor, session, pos, prefix, callback) {
											if (prefix.length === 0) {
												callback(null, []);
												return
											}

											if ('undefined' !== typeof tdcAdminIFrameUI) {

												var data = {
													error: undefined,
													getShortcode: ''
												};

												tdcIFrameData.getShortcodeFromData(data);

												if (!_.isUndefined(data.error)) {
													tdcDebug.log(data.error);
												}

												if (!_.isUndefined(data.getShortcode)) {

													var regex = /el_class=\"([A-Za-z0-9_-]*\s*)+\"/g,
														results = data.getShortcode.match(regex);

													var elClasses = {};

													for (var i = 0; i < results.length; i++) {
														var currentClasses = results[i]
															.replace('el_class="', '')
															.replace('"', '')
															.split(' ');

														for (var j = 0; j < currentClasses.length; j++) {
															if (_.isUndefined(elClasses[currentClasses[j]])) {
																elClasses[currentClasses[j]] = '';
															}
														}
													}

													var arrElClasses = [];

													for (var prop in elClasses) {
														arrElClasses.push(prop);
													}

													callback(null, arrElClasses.map(function (item) {
														return {
															name: item,
															value: item,
															meta: 'in_page'
														}
													}));
												}
											}
										}
									};
									languageTools.addCompleter(tdcCompleter);

									window.editor = ace.edit("td_live_css_uid_1_5df75b6e4b61c");

									// 'change' handler is written as function because it's called by tdc_on_add_css_live_components (of wp_footer hook)
									// We did it to reattach the existing compiled css to the new content received from server.
									window.editorChangeHandler = function () {
										//tdwState.lessWasEdited = true;

										window.onbeforeunload = function () {
											if (tdwState.lessWasEdited) {
												return "You have attempted to leave this page. Are you sure?";
											}
											return false;
										};

										var editorValue = editor.getSession().getValue();

										editor_textarea.val(editorValue);

										if ('undefined' !== typeof tdcAdminIFrameUI) {
											tdcAdminIFrameUI.getLiveIframe().contents().find('.tdw-css-writer-editor:first').val(editorValue);

											// Mark the content as modified
											// This is important for showing info when composer closes
                                            tdcMain.setContentModified();
										}

										tdLiveCssInject.less();
									};

									editor.getSession().setValue(editor_textarea.val());
									editor.getSession().on('change', editorChangeHandler);

									editor.setTheme("ace/theme/textmate");
									editor.setShowPrintMargin(false);
									editor.getSession().setMode("ace/mode/less");
									editor.setOptions({
										enableBasicAutocompletion: true,
										enableSnippets: true,
										enableLiveAutocompletion: false
									});

								}

							});
						</script>

					</div>
				</div>

				<footer>

					
						<a href="#" class="tdw-save-css">Save</a>
						<div class="tdw-more-info-text">Write CSS OR LESS and hit save. CTRL + SPACE for auto-complete.</div>

					
					<div class="tdw-resize"></div>
				</footer>
			</div>
			
</body>
</html>
<!-- Dynamic page generated in 19.815 seconds. -->
<!-- File not cached! Super Cache Couldn't write to: wp-content/cache/supercache/www.dailyexcelsior.com/20612324855df75b6e4be521.82514360.tmp -->
`)
 

var news=[];
//console.log( $('div.wpb_wrapper').find('h3.entry-title > a').length);

 $('div.wpb_wrapper').find('h3 > a').each(function(i,element)  {
        let newsItem={};
        newsItem.title=$(this).text();
        newsItem.link=$(this).attr('href');
        news.push(newsItem);
});
$('div.td-block-span6').find('a').each(function(i,element)  {
   
    let newsItem={};
    let title = $(this).attr('title');
    if (title){
    newsItem.title= title;
    newsItem.link=$(this).attr('href');
    newsItem.imgsrc=$(this).find('img').attr('src') || '';
    news.push(newsItem);
    }
});
console.log(news);
//td_block_inner 

//#td_uid_8_5df75c2b937ae > div:nth-child(1) > div:nth-child(1)

//     // this === el
//   // console.log($(this).text());
//     console.log($(this).text().trim());

//   });
  //.get().join('\n');
  //console.log(text);
//})