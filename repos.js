$(document).ready(function()
{
	$(".nav-default a").click(function()
	{
		//var url = "https://perezjquim.github.io/"+$(this).attr('href').substr(1);
		//$(".modal-body").html('<iframe width="100%" height="100%" frameborder="0" scrolling="no" allowtransparency="true" src="'+url+'"></iframe>');
		
		BootstrapDialog.show({
            message: function(dialog) {
                var $message = $('<div></div>');
                var pageToLoad = dialog.getData('pageToLoad');
                $message.load(pageToLoad);
        
                return $message;
            },
            data: {
                'pageToLoad': "https://perezjquim.github.io/"+$(this).attr('href').substr(1)
            }
        });
	});
});
