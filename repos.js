$(document).ready(function()
{
	$(".nav-default a").click(function()
	{
		BootstrapDialog.show({
		  title: '',
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
