// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {
//     scrollFunction()
// };

// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//       document.getElementById("back-to-top").style.display = "block";
//     } else {
//       document.getElementById("back-to-top").style.display = "none";
//     }
// }
  
// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }

// Modal Toggle
$(document).ready(function(){
  $("#modal-form").modal('show');
});


//
// Tooltip
//

'use strict';

var Tooltip = (function() {

	// Variables

	var $tooltip = $('[data-toggle="tooltip"]');


	// Methods

	function init() {
		$tooltip.tooltip();
	}


	// Events

	if ($tooltip.length) {
		init();
	}

})();


//
// Navbar collapse
//


var NavbarCollapse = (function() {

	// Variables

	var $nav = $('.navbar-nav'),
		$collapse = $('.navbar .navbar-custom-collapse');


	// Methods

	function hideNavbarCollapse($this) {
		$this.addClass('collapsing-out');
	}

	function hiddenNavbarCollapse($this) {
		$this.removeClass('collapsing-out');
	}


	// Events

	if ($collapse.length) {
		$collapse.on({
			'hide.bs.collapse': function() {
				hideNavbarCollapse($collapse);
			}
		})

		$collapse.on({
			'hidden.bs.collapse': function() {
				hiddenNavbarCollapse($collapse);
			}
		})
	}

	var navbar_menu_visible = 0;

	$( ".sidenav-toggler" ).click(function() {
		if(navbar_menu_visible == 1){
		  $('body').removeClass('nav-open');
			navbar_menu_visible = 0;
			$('.bodyClick').remove();

		} else {

		var div = '<div class="bodyClick"></div>';
		$(div).appendTo('body').click(function() {
				 $('body').removeClass('nav-open');
					navbar_menu_visible = 0;
					$('.bodyClick').remove();
					
			 });

		 $('body').addClass('nav-open');
			navbar_menu_visible = 1;

		}

	});

})();

// Filter LeaderBoard Tables
function searchNames(){
	let nameInput, filterName, leaderboardTable, tr, td, i, txtValue, searchresultName;
	nameInput = document.getElementById("nameInput");
	filterName = nameInput.value.toUpperCase();
	leaderboardTable = document.getElementById("leaderboardTable");
	tr = leaderboardTable.getElementsByTagName("tr");

	for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("th")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filterName) > -1) {
				tr[i].style.display = "";
      } else {
				tr[i].style.display = "none";
      }
    }       
	}
	
	if(filterName.length == 0){
		searchresultName = document.getElementById("searchresultName").innerHTML ="";
	}else if(filterName.length > 0){
		searchresultName = document.getElementById("searchresultName").innerHTML = "Result against " +'"'+filterName.toLowerCase() +'"'+ " Keyword";
	}
	// Tip: Remove toUpperCase() if you want to perform a case-sensitive search.
	// Tip: Change tr[i].getElementsByTagName('th')[0] to ('td')[0] if you want to search for "Earnings" (index 1) instead of "Name" (index 0).
}