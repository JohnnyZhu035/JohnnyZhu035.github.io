/* global instantsearch: true */
/*jshint camelcase: false */
$(document).ready((function(){var a=CONFIG.algolia;if(a.applicationID&&a.apiKey&&a.indexName){var i=instantsearch({appId:a.applicationID,apiKey:a.apiKey,indexName:a.indexName,searchFunction:function(a){$("#algolia-search-input").find("input").val()&&a.search()}});
// Registering Widgets
[instantsearch.widgets.searchBox({container:"#algolia-search-input",placeholder:a.labels.input_placeholder}),instantsearch.widgets.hits({container:"#algolia-hits",hitsPerPage:a.hits.per_page||10,templates:{item:function(a){return'<a href="'+(a.permalink?a.permalink:CONFIG.root+a.path)+'" class="algolia-hit-item-link">'+a._highlightResult.title.value+"</a>"},empty:function(i){return'<div id="algolia-hits-empty">'+a.labels.hits_empty.replace(/\$\{query}/,i.query)+"</div>"}},cssClasses:{item:"algolia-hit-item"}}),instantsearch.widgets.stats({container:"#algolia-stats",templates:{body:function(i){return a.labels.hits_stats.replace(/\$\{hits}/,i.nbHits).replace(/\$\{time}/,i.processingTimeMS)+'<span class="algolia-powered">  <img src="'+CONFIG.root+'images/algolia_logo.svg" alt="Algolia" /></span><hr />'}}}),instantsearch.widgets.pagination({container:"#algolia-pagination",scrollTo:!1,showFirstLast:!1,labels:{first:'<i class="fa fa-angle-double-left"></i>',last:'<i class="fa fa-angle-double-right"></i>',previous:'<i class="fa fa-angle-left"></i>',next:'<i class="fa fa-angle-right"></i>'},cssClasses:{root:"pagination",item:"pagination-item",link:"page-number",active:"current",disabled:"disabled-item"}})].forEach(i.addWidget,i),i.start(),$(".popup-trigger").on("click",(function(a){a.stopPropagation(),$("body").append('<div class="search-popup-overlay algolia-pop-overlay"></div>').css("overflow","hidden"),$(".popup").toggle(),$("#algolia-search-input").find("input").focus()})),$(".popup-btn-close").click((function(){$(".popup").hide(),$(".algolia-pop-overlay").remove(),$("body").css("overflow","")}))}else window.console.error("Algolia Settings are invalid.")}));