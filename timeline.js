	$(() => {
	  // $().timeline({ orientation: 'vertical', issuesSpeed: 300, datesSpeed: 100, arrowKeys: 'true', startAt: 3 });

	  function onClick(date) {
	    $('#dates a').removeClass('selected');
	    $('#issues li').removeClass('selected');

	    $(`a[href="#${date}"]`).addClass('selected');
	    $(`#issues li#${date}`).addClass('selected');
	  }
	  $('a[href="#2019jan28"]').click(() => onClick('2019jan28'));
	  $('a[href="#2019mar15"]').click(() => onClick('2019mar15'));
	  $('a[href="#2019may02"]').click(() => onClick('2019may02'));
	  $('a[href="#2019may29"]').click(() => onClick('2019may29'));
	  $('a[href="#2019aug05"]').click(() => onClick('2019aug05'));
	});
