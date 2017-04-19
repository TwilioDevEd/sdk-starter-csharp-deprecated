$(function() {

    $('#sendNotificationButton').on('click', function() {
        var identity = $('#identityInput').val();
        $.post('twilio/send-notification/' + identity, function(response) {
            $('#identityInput').val('');
            $('#message').html(response.message);
            console.log(response);
        });
    });
});