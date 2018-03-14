$(document).ready(function()
{
	$(".nav-default a").click(function()
	{
		$(".modal-container").load("https://perezjquim.github.io/"+$(this).attr('href').substr(1),function(result)
		{
			$("#modal").modal({show: true});
		});
	});
});
