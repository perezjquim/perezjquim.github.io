$(document).ready(function()
{
    choose($(".nav-tabs a:first"));
    $(".nav-tabs a").click(function()
    {
	   $(this).tab('show');
	   choose($(".nav-tabs .active > a"));
    });
    function choose(p)
    {
        var pagename = p.attr('href').substr(1);
	   $("#content").load(pagename+".html");
    }
});
