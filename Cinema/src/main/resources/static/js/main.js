$(function() {

    $('.btn-link[aria-expanded="true"]').closest('.accordion-item').addClass('active');
  $('.collapse').on('show.bs.collapse', function () {
	  $(this).closest('.accordion-item').addClass('active');
	});

  $('.collapse').on('hidden.bs.collapse', function () {
	  $(this).closest('.accordion-item').removeClass('active');
	});

    

});

$('#registeracc').click(function (e) {
    e.preventDefault();

    var data = {};
    var formData = $('#formsubmitregister').serializeArray();
    $.each(formData, function (i, v) {
        data[""+v.name+""] = v.value;
    });
    console.log(data);
    addNew__(data);
});

function addNew__(data) {
	$.ajax({
        url: '/api/auth/signup',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        dataType: 'json',
        success: function (result) {
                console.log(result);

                if(result.massage == "Exits Phone Number!"){
                    alert("Error! check SDT");
                    return;
                }else {
                     alert("Create Acc Success!");
                     window.location.href = "/login";
                }

        },
        error: function (error) {
                alert("Error !!!");
                console.log(error);
        }
    });
}


$('#loginbutton').click(function (e) {
    e.preventDefault();

    var data = {};
    var formData = $('#formlogin').serializeArray();
    $.each(formData, function (i, v) {
        data[""+v.name+""] = v.value;
    });
    console.log(data);
    addNew___(data);
});

function addNew___(data) {
	$.ajax({
        url: '/api/auth/signin_',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        dataType: 'json',
        success: function (result) {
            console.log(result);
            window.location.href = "/home";
        },
        error: function (error) {
        console.log(error);
            //alert("eror");
        }
    });
}

