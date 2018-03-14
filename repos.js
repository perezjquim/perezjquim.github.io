$(document).ready(function()
{
	$(".nav-default a").click(function()
	{
        BootstrapDialog.show(
        {
            title: 'Default Title',
            message: function(dialog) 
            {
                var $message = $('<div></div>');
                var repo = dialog.getData('repo');
                $message.load(repo);
        
                return $message;
            },
            data: 
            {
                'repo': "https://perezjquim.github.io/"+$(this).attr('href').substr(1)
            }
        });
	});
});
