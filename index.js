$(document).ready(function()
{
	tabs.forEach((tab)=>
	{
		tab.repos.forEach((repo) => 
		{
			$("#webslides").append(
				"<section>"+
					"<div class='wrap'>"+
						"<div class='grid vertical-align'>"+
							"<div class='column'>"+
								"<h3><strong>"+tab.name+"</strong></h3>"+
								"<p class='text-intro'>"+repo.name+"</p>"+
							"</div>"+
							"<div class='column'>"+
								"<pre><iframe src='https://perezjquim.github.io/"+repo.reponame+"/'></iframe></pre>"+
							"</div>"+
						"</div>");
		});
	});

      window.ws = new WebSlides();	
});