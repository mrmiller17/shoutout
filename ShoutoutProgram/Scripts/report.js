//for use on manageent summary page
var shoutouts = [];
$.ajax({
	type: "GET",
	url: "Shoutouts/GetShoutouts",
	success: function (data)
	{
		$.each(data, function (i, v)
		{
			shoutouts.push({
				recipient: v.RecipientId,
				level: v.LevelId
			});
		})

		var res = alasql('SELECT recipient, SUM(level) AS points FROM ? GROUP BY recipient', [shoutouts]);

		var users = [];
		$.ajax({
			type: "GET",
			url: "Account/GetUsers",
			success: function (data)
			{
				var final = []
				console.log(data)
				$(data).each(function (e, v)
				{
					console.log(e)
					console.log(v)
					var id = v.Id
					var sfirstname = v.FirstName;
					var slastname = v.LastName;
					$(res).each(function (e)
					{
						console.log(this.recipient)
						if (this.recipient === id) {
							console.log("here")
							final.push({
								firstName: sfirstname,
								lastName: slastname,
								points: this.points
							})
						}
					})
				})
				console.log(final);
				$(final).each(function ()
				{
					$('#tb').append('<tr>')
					$('#tb').append('<td>'+this.firstName+'</td>');
					$('#tb').append('<td>' + this.lastName + '</td>');
					$('#tb').append('<td>' + this.points + '</td>');
					$('#tb').append('</tr>')
				})
				
			},

		})
	}
})


