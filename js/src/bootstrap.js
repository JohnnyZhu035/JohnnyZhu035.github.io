/* global NexT: true */
$(document).ready((function(){$(document).trigger("bootstrap:before"),
/**
   * Register JS handlers by condition option.
   * Need to add config option in Front-End at 'layout/_partials/head.swig' file.
   */
CONFIG.fastclick&&NexT.utils.isMobile()&&window.FastClick.attach(document.body),CONFIG.lazyload&&NexT.utils.lazyLoadPostsImages(),NexT.utils.registerESCKeyEvent(),NexT.utils.registerBackToTop(),
// Mobile top menu bar.
$(".site-nav-toggle button").on("click",(function(){var e=$(".site-nav"),t="site-nav-on",o=e.hasClass(t),a=o?"slideUp":"slideDown",i=o?"removeClass":"addClass";e.stop()[a]("fast",(function(){e[i](t)}))})),
/**
   * Register JS handlers by condition option.
   * Need to add config option in Front-End at 'layout/_partials/head.swig' file.
   */
CONFIG.fancybox&&NexT.utils.wrapImageWithFancyBox(),CONFIG.tabs&&NexT.utils.registerTabsTag(),NexT.utils.embeddedVideoTransformer(),NexT.utils.addActiveClassToMenuItem(),
// Define Motion Sequence.
NexT.motion.integrator.add(NexT.motion.middleWares.logo).add(NexT.motion.middleWares.menu).add(NexT.motion.middleWares.postList).add(NexT.motion.middleWares.sidebar),$(document).trigger("motion:before"),
// Bootstrap Motion.
CONFIG.motion.enable&&NexT.motion.integrator.bootstrap(),$(document).trigger("bootstrap:after")}));