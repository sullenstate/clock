$(document).on('ready', function() {

	var outerShell = $('<div class="outer-shell"></div>');
	var innerShell = $('<div class="inner-shell"></div>');
	var labels = $('<div class="labels"><ul><li>AM</li><li>PM</li><li>Auto</li></ul></div>');
	var clockScreen = $('<div class="screen"></div>');
	var indicator = $('<div class="indicator">◉</div>');
	var text = $('<div class="text">12:45</div>');
	var am = $('<div class="am-freq"><ul><li>AM</li><li>530</li><li>550</li><li>650</li><li>800</li><li>1000</li><li>1300</li><li>1600</li><li>KHz</li></ul></div>');
	var fm = $('<div class="fm-freq"><ul><li>FM</li><li>88</li><li>92</li><li>96</li><li>100</li><li>104</li><li>108</li><li>MHz</li></ul></div>');

	clockScreen.append(indicator, text);
	innerShell.append(labels);
	innerShell.append(clockScreen);
	innerShell.append(am, fm);
	outerShell.append(innerShell);
	$('.clock').append(outerShell);




});