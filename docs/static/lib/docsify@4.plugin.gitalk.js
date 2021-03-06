$docsify.plugins = [].concat(function (i) {
    var e = Docsify.dom;
    i.mounted(function (i) {
        var n = e.create("div");
        n.id = "gitalk-container";
        var t = e.getNode("#main");
        n.style = "width: " + t.clientWidth + "px; margin: 0 auto 20px;", e.appendTo(e.find(".content"), n)
    }), i.doneEach(function (i) {
        for (var n = document.getElementById("gitalk-container"); n.hasChildNodes();) n.removeChild(n.firstChild);
        gitalk.render("gitalk-container")
    })
}, $docsify.plugins);
