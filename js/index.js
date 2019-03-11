$(document).ready(function()
{
        function n(e, i)
        {
                for (const n of i)
                        for (var o in n)
                        {
                                const i = new RegExp("@" + o + "@", "g");
                                e = e.replace(i, n[o])
                        }
                return e
        }
        function fetchTemplate(path,callback)
        {
        	$.ajax(
        	{
        		type: "GET",
        		url: "templates"+"/"+path,
        		dataType: "xml",
        		success: callback
        	});
        }
        $.get("config/home.json", s =>
        {
                ! function(e)
                {
                       fetchTemplate("home/base.xml", base =>
                        {
                                const i = n(base, [e]);
                                fetchTemplate("home/social-item.xml", ss =>
                                {
                                        $("[home]").prepend(i), e.social.forEach(e =>
                                        {
                                                const i = n(ss, [e]);
                                                $("[social]").append(i)
                                        })
                                })
                        })
                }(s), $.get("config/tabs.json", o =>
                {
                        ! function(o)
                        {
                                fetchTemplate("repo.xml", rr =>
                                {
                                        fetchTemplate("portfolio-item.xml", yy =>
                                        {
                                                o.forEach(o =>
                                                {
                                                        const s = n(rr, [o]);
                                                        $("[portfolio-items]").append(s), o.repos.forEach(e =>
                                                        {
                                                                const s = n(yy, [o, e]);
                                                                $(".slides").append(s)
                                                        })
                                                })
                                        })
                                })
                        }(o), $.get("config/config.json", e =>
                        {
                                const i = e.configure,
                                        o = e.initialize;
                                Reveal.configure(i), Reveal.initialize(o)
                        })
                })
        })
});