H.ready(["jquery"],function(){jQuery(function(e){var t=e("#c-editor-extend"),o=e("#c-editor-extend-tg"),n=e("#c-editor-extend-more");o.on("click",function(){o.text(t.hasClass("folder")?"折叠":"展开"),t.toggleClass("folder")}),n.on("click",function(){t.addClass("showall"),e(this).hide()})})});