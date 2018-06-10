function chooseTab(page)
{
	var name = page.attr('href').substr(1);

	var content = $("#content");
	content.empty();

	if(name === "external" || name === "home")
	{
		content.load(name+".html");
	}
  else
  {
  	content.append("<ul class='nav nav-default'>");

  	var repos = tabs
  		.filter((t) => t.name === name)[0]
  		.repos;
  	repos.forEach((repo) =>
  	{
  		$('.nav-default').append('<li><a href="#'+repo.reponame+'">'+repo.name+'</a></li>'); 
  	});

  	content.append("</ul>");

    $(".nav-default a").off("click").click(function()
    {
    	showRepo($(this));
    });      	
  }
}

function showRepo(repo)
{
  BootstrapDialog.show(
  {
      title: 'Repository',
      message: function(dialog) 
      {
          var body = $('<div></div>');
          var html = dialog.getData('repo');
          body.load(html);
          return body;
      },
      data: 
      {
          'repo': "https://perezjquim.github.io/"+repo.attr('href').substr(1)
      }
  });
}

$(document).ready(function()
{	
		tabs.forEach((tab)=>
		{
			$("#tabs").append("<li><a href='#"+tab.name+"'>"+tab.name+"</a></li>");
		});

    $("#tabs a").off("click").click(function()
    {
    	$(this).tab('show');
			chooseTab($(this));
    });

   	chooseTab($(".nav-tabs a:first"));
});
