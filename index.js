$(document).ready(function()
{
    $(".nav-tabs a").click(function()
    {
	   $(this).tab('show');
	   var pagename = $('.nav-tabs .active > a').attr('href').substr(1);
	   $("#content").load(pagename+"/"+pagename+".html");
    });
});
