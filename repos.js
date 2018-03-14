$(document).ready(function()
{
	$(".nav-default a").click(function()
	{
		var url = "https://perezjquim.github.io/"+$(this).attr('href').substr(1);
		$(".modal-body").load("<iframe width="100%" height="100%" frameborder="0" scrolling="no" allowtransparency="true" src="'+url+'"></iframe>'");
	});
});
