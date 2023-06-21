$(document).ready(function(){
    $('#form').on('submit', function(event) {
        event.preventDefault(); // prevent reload
        
        var formData = new FormData(this);
        formData.append('service_id', 'service_y9yfz29');
        formData.append('template_id', 'template_6yp9hpp');
        formData.append('user_id', 'n_nuNvLuEstexpPbQ');
     
        $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
            type: 'POST',
            data: formData,
            contentType: false, // auto-detection
            processData: false // no need to parse formData to string
        }).done(function() {
            alert('Informacion Enviada');
            location.reload();
        }).fail(function(error) {
            alert('Oops... ' + JSON.stringify(error));
        });
    });
 });