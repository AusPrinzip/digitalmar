// test
console.log(`Loading index script`)

$( document ).ready(function() {
	$(`#home`).addClass('active');
	$("#home").click(function(){
		$("#home").removeClass('active');
		$("#about").removeClass('active');		
		$("#services").removeClass('active');	
		$("#contact").removeClass('active');
		$("#team").removeClass('active');
		$(this).addClass('active');
	})
	$("#about").click(function(){
		$("#home").removeClass('active');
		$("#about").removeClass('active');		
		$("#services").removeClass('active');	
		$("#contact").removeClass('active');
		$("#team").removeClass('active');
		$(this).addClass('active');
	})
	$("#services").click(function(){
		$("#home").removeClass('active');
		$("#about").removeClass('active');		
		$("#services").removeClass('active');	
		$("#contact").removeClass('active');
		$("#team").removeClass('active');
		$(this).addClass('active');
	})
	$("#team").click(function(){
		$("#home").removeClass('active');
		$("#about").removeClass('active');		
		$("#services").removeClass('active');	
		$("#contact").removeClass('active');
		$("#team").removeClass('active');
		$(this).addClass('active');
	})
	$("#contact").click(function(){
		$("#home").removeClass('active');
		$("#about").removeClass('active');		
		$("#services").removeClass('active');	
		$("#contact").removeClass('active');
		$("#team").removeClass('active');
		$(this).addClass('active');
	})
})