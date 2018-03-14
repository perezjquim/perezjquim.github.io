$(document).ready(function()
{
	$(".nav-default a").click(function()
	{
		$("#repo").load("https://perezjquim.github.io/"+$(this).attr('href').substr(1));
	});
});
