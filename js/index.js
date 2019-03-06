$(document).ready(function()
{
        //
        // templates
        //
        const template_li = '<li>' + '<div>' + '<svg class="@icon@">' + '<use xlink:href="#@icon@">' + '</use>' + '</svg>' + '@name@'
        '</div>' + '</li>';
        const template_section = "<section>" + "<div>" + "<div>" + "<h3><strong>@name@</strong></h3>" + "<p class='text-intro'>@label@</p>" + "</div>" + "<div>" + "<pre><iframe src='/@reponame@'></iframe></pre>" + "</div>" + "</section>";
        //
        //
        //
        function bindData(tabs)
        {
                tabs.forEach((tab) =>
                {
                        const oItem = template_li.replace(/@icon@/g, tab.icon).replace(/@name@/g, tab.name);
                        $("[portfolio-items]").append(oItem);
                        tab.repos.forEach((repo) =>
                        {
                                const oSection = template_section.replace(/@name@/g, tab.name).replace(/@label@/g, repo.label).replace(/@reponame@/g, repo.reponame)
                                $(".slides").append(oSection);
                        });
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
        $.get("config/tabs.json", (tabs) =>
        {
                bindData(tabs);
                start();
        });
});