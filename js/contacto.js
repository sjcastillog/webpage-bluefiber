$(document).ready(function(){
    $('#form').on('submit', function(event) {
        event.preventDefault(); // prevent reload
        
        var formData = new FormData(this);
        formData.append('service_id', 'service_g30frxw');
        formData.append('template_id', 'template_zx3o91m');
        formData.append('user_id', 'Y19N8z0zigi25no3M'); // TODO: PUBLIC KEY
     
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