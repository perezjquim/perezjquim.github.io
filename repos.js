$(document).ready(function()
{
	$(".nav-default a").click(function()
	{

		$.post("https://perezjquim.github.io/"+$(this).attr('href').substr(1), function(data){

		    $("#repo").html(data).fadeIn();

		});
	});
});
