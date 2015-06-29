$(document).on('ready', function() {

	var outerShell = $('<div class="outer-shell"></div>');
	var innerShell = $('<div class="inner-shell"></div>');
	var labels = $('<div class="labels"><ul><li>AM</li><li>PM</li><li>Auto</li></ul></div>');
	var clockScreen = $('<div class="screen"></div>');
	var indicator = $('<div class="indicator">◉</div>');
	var text = $('<div class="text">12:45</div>');
	var am = $('<div class="am-freq"></div>');
	var fm = $('<div class="fm-freq"></div>');

	clockScreen.append(indicator, text);
	innerShell.append(labels);
	innerShell.append(clockScreen);
	innerShell.append(am, fm);
	outerShell.append(innerShell);
	$('.clock').append(outerShell);




});