$(document).ready(function()
{
        const template_li = '<li>' + '<div>' + '<svg class="@icon@">' + '<use xlink:href="#@icon@">' + '</use>' + '</svg>' + '@name@'
        '</div>' + '</li>';
        const template_section = "<section>" + "<div>" + "<div>" + "<h3><strong>@name@</strong></h3>" + "<p class='text-intro'>@label@</p>" + "</div>" + "<div>" + "<pre><iframe src='/@reponame@'></iframe></pre>" + "</div>" + "</section>";
        $.get("config/tabs.json", (tabs) =>
        {
                tabs.forEach((tab) =>
                {
                        $("[portfolio-items]").append(template_li.replace("@icon@",tab.icon).replace("@name@",tab.name));
                        tab.repos.forEach((repo) =>
                        {
                                $(".slides").append(template_section.replace("@name@",tab.name).replace("@label@", repo.label).replace("@reponame@",repo.reponame));
                        });
                });
                $.get("config/config.json", (config) =>
                {
                        const oConfigure = config.configure;
                        const oInitialize = config.initialize;
                        Reveal.configure(oConfigure);
                        Reveal.initialize(oInitialize);
                });
        });
});