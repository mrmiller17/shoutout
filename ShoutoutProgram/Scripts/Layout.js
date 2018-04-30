// Set timeout variable.
var timout = 600000; // logout time set to 10 min
var logoutUrl = 'logout.php'; // URL to logout page.
var logged = false;


//starts the timer on page load
window.onload = function ()
{
	timeoutTimer = setTimeout("IdleTimeout()", timout);
}


var timeoutTimer;

// Start timers.
function StartTimers()
{
	timeoutTimer = setTimeout("IdleTimeout()", timout);
}

// Reset timers.
document.addEventListener('click', reset)
document.addEventListener('mousemove', reset)
document.addEventListener('keypress', reset)
function reset()
{
	clearTimeout(timeoutTimer);
	StartTimers();
}

// Logout the user.
function IdleTimeout()
{
	try {
		document.getElementById('logoutForm').submit();
	}
	catch
	{

	}
}



var my_data = [];



$.ajax({
	type: "GET",
	url: "/home/GetEvents",
	success: function (data)
	{
		$('.marquee3k').hide();
		$.each(data, function (i, v)
		{
			my_data.push({
				eventID: v.EventId,
				title: v.Subject,
				description: v.Description,
				start: moment(v.Start),
				end: v.End != null ? moment(v.End) : null,
				color: v.ThemeColor,
				allDay: v.IsFullDay,
				isTicker: v.IsTicker
			});
		})
		my_data.forEach(function (datahold)
		{
			if (datahold.isTicker === true) {
				$('.appMe').append( '| | | |' + datahold.title + ' : ' + datahold.description + '| | | |')
				}
		});
		if (my_data[0] !== undefined) {
			$('.marquee3k').show();
			try {
				Marquee3k.init();
			}
			catch{

			}
		}
	},
	error: function (error)
	{
		alert('failed');
	}	
})






//var users = []
//$.ajax({
//	type: "GET",
//	url: "Account/GetUsers",
//	success: function (data)
//	{
//		$.each(data, function (i, v)
//		{
//			users.push({
//				userFName: v.FirstName,
//				userLName: v.LastName
//			});
//		}) 
//		console.log(users)
//	},
//})




















//$(document).ready(function ()
//{

//	$('.tickaway').SimpleMarquee({

//		// controls the speed at which the marquee moves
//		duration: 30000,

//		// right margin between consecutive marquees
//		padding: -1,

//		// class of the actual div or span that will be used to create the marquee - 
//		// multiple marquee items may be created using this item's content. 
//		// This item will be removed from the dom
//		marquee_class: '.marquee',

//		// the container div in which the marquee content will animate. 
//		container_class: '.tickaway',

//		// a sibling item to the marqueed item  that affects - 
//		// the end point position and available space inside the container. 
//		sibling_class: '.marquee-sibling',

//		// Boolean to indicate whether pause on hover should is required. 
//		hover: true

//	});

//});



