! function () {
    var i = location.href.replace("/-/", "/#/");
    i !== location.href && (location.href = i), $docsify.plugins = [].concat(function (i, o) {
        var n = Docsify.dom,
            e = o.config.disqus;
        if (!e) throw Error("$docsify.disqus is required");
        i.init(function (i) {
            var t = n.create("script");
            t.async = !0, t.src = "https://" + e + ".disqus.com/embed.js", t.setAttribute("data-timestamp", Number(new Date)), n.appendTo(n.body, t)
        }), i.mounted(function (i) {
            var t = n.create("div");
            t.id = "disqus_thread";
            var e = n.getNode("#main");
            t.style = "width: " + e.clientWidth + "px; margin: 0 auto 20px;", n.appendTo(n.find(".content"), t), window.disqus_config = function () {
                this.page.url = location.origin + "/-" + o.route.path, this.page.identifier = o.route.path, this.page.title = document.title
            }
        }), i.doneEach(function (i) {
            void 0 !== window.DISQUS && window.DISQUS.reset({
                reload: !0,
                config: function () {
                    this.page.url = location.origin + "/-" + o.route.path, this.page.identifier = o.route.path, this.page.title = document.title
                }
            })
        })
    }, $docsify.plugins)
}();