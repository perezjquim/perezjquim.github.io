$(document).ready(function()
{
	$(".nav-default a").click(function()
	{
		$(".modal-content").load("https://perezjquim.github.io/"+$(this).attr('href').substr(1));
	});
});
