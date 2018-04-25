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