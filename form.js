$(function(){
	$('#form').validate({
		rules: {
			shipperCompany: {
				required: true,
			},
			email: {
				required: true,
			},
			tel: {
				required: true,
			},
		},
	})
})