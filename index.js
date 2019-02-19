$(document).ready(function()
{
        tabs.forEach((tab) =>
        {
                tab.repos.forEach((repo) =>
                {
                        $(".slides").append("<section>" + "<div>" + "<div>" + "<h3><strong>" + tab.name + "</strong></h3>" + "<p class='text-intro'>" + repo.name + "</p>" + "</div>" + "<div>" + "<pre><iframe src='https://perezjquim.github.io/" + repo.reponame + "/'></iframe></pre>" + "</div>" + "</section>");
                });
        });
        Reveal.configure(
        {
                autoSlide: 5000
        });
        Reveal.initialize(
        {
                controls: true,
                progress: true,
                history: true,
                center: true,
                transition: 'slide'
        });
});