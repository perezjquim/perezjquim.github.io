$(document).ready(function()
{
        //
        // templates
        //
        const templates = {
                "portfolio-item": '<li>' + '<div>' + '<svg class="@icon@">' + '<use xlink:href="#@icon@">' + '</use>' + '</svg>' + '@name@' + '</div>' + '</li>',
                "repo-section": "<section>" + "<div>" + "<div>" + "<h3><strong>@name@</strong></h3>" + "<p class='text-intro'>@label@</p>" + "</div>" + "<div>" + "<pre><iframe src='/@reponame@'></iframe></pre>" + "</div>" + "</section>",
                "home":
                {
                        "base": '<section home>' + '<img height="25%" src="lib/images/avatar.jpeg"/>' + '<h2>' + '<strong>' + '@title@' + '</strong>' + '</h2>' + '<p>' + '@subtitle@' + '</p>' + '<div social>' + '</div>' + '</section>',
                        "social-item": '<a href="@link@" title="@title@" style="background-color:\"@color@\";">' + '<svg class="@icon@">' + '<use xlink:href="#@icon@">' + '</use>' + '</svg>' + '</a>'
                }
        };
        //
        //
        //
        function bindTabs(tabs)
        {
                tabs.forEach((tab) =>
                {
                        const oItem = templates["portfolio-item"].replace(/@icon@/g, tab.icon).replace(/@name@/g, tab.name);
                        $("[portfolio-items]").append(oItem);
                        tab.repos.forEach((repo) =>
                        {
                                const oSection = templates["repo-section"].replace(/@name@/g, tab.name).replace(/@label@/g, repo.label).replace(/@reponame@/g, repo.reponame)
                                $(".slides").append(oSection);
                        });
                });
        }

        function bindHome(home)
        {
                const oHome = templates["home"]["base"].replace(/@title@/g, home.title).replace(/@subtitle@/g, home.subtitle);
                $("[content]").append(oHome);
                home.social.forEach((s) =>
                {
                        const oSocial = templates["home"]["social-item"].replace(/@link@/g, s.link).replace(/@title@/g, s.title, /@icon@/g, s.icon).replace(/@color@/g,s.color);
                        $("[home]").append(oSocial);
                });
        }

        function start()
        {
                $.get("config/config.json", (config) =>
                {
                        const oConfigure = config.configure;
                        const oInitialize = config.initialize;
                        Reveal.configure(oConfigure);
                        Reveal.initialize(oInitialize);
                });
        }
        $.get("config/home.json", (home) =>
        {
                bindHome(home);
                $.get("config/tabs.json", (tabs) =>
                {
                        bindTabs(tabs);
                        start();
                });
        });
});