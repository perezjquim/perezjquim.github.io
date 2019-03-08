$(document).ready(function()
{
        const e = {
                "portfolio-item": '<li><div><svg class="@icon@"><use xlink:href="#@icon@"></use></svg>@name@</div></li>',
                "repo-section": "<section><div><div><h3><strong>@name@</strong></h3><p class='text-intro'>@label@</p></div><div><pre><iframe src='/@reponame@/'></iframe></pre></div></section>",
                home:
                {
                        base: '<img src="lib/images/avatar.jpeg"/><h2><strong>@title@</strong></h2><p>@subtitle@</p>',
                        "social-item": '<a href="@link@" title="@title@" style="background-color:@color@;"><svg class="@icon@"><use xlink:href="#@icon@"></use></svg></a>'
                }
        };
        function bind(template,data)
        {
        	for(var key in data)
        	{
        		const regexp = new RegExp("@"+key+"@",'g');
        		template = template.replace(regexp,data[key]);
        	}
        	return template;
        }
        $.get("config/home.json", i =>
        {
                ! function(i)
                {
                	const template = e.home.base;
                        const o = bind(template,i);
                        $("[home]").prepend(o), i.social.forEach(i =>
                        {
                        	const template = e.home["social-item"];
                                const o = bind(template,i);
                                $("[social]").append(o);
                        })
                }(i), $.get("config/tabs.json", i =>
                {
                        ! function(i)
                        {
                                i.forEach(i =>
                                {
                                	const template = e["portfolio-item"];
                                        const o = bind(template,i);
                                        $("[portfolio-items]").append(o), i.repos.forEach(o =>
                                        {
                                                const template = e["repo-section"];
                                                const n = bind(template,i);
                                                $(".slides").append(n)
                                        })
                                })
                        }(i), $.get("config/config.json", e =>
                        {
                                const i = e.configure,
                                        o = e.initialize;
                                Reveal.configure(i), Reveal.initialize(o)
                        })
                })
        })
});