$(function() {
    $.get('/config', function(response) {
        configureField(response, 'TWILIO_ACCOUNT_SID', 'twilioAccountSID', false);
        configureField(response, 'TWILIO_API_KEY', 'twilioAPIKey', false);
        configureField(response, 'TWILIO_API_SECRET', 'twilioAPISecret', true);
        configureField(response, 'TWILIO_NOTIFICATION_SERVICE_SID', 'twilioNotificationServiceSID', false);
        configureField(response, 'TWILIO_CHAT_SERVICE_SID', 'twilioChatServiceSID', false);
        configureField(response, 'TWILIO_SYNC_SERVICE_SID', 'twilioSyncServiceSID', false);

        //configure individual product buttons
        if (configHasRequiredKeys(response, ['TWILIO_ACCOUNT_SID', 'TWILIO_API_KEY', 'TWILIO_API_SECRET'])) {

            $('#videoDemoButton').addClass('btn-success');
            if (configHasRequiredKeys(response, ['TWILIO_CHAT_SERVICE_SID'])) {
                $('#chatDemoButton').addClass('btn-success');
            } else {
                $('#chatDemoButton').addClass('btn-danger');
            }

            if (configHasRequiredKeys(response, ['TWILIO_SYNC_SERVICE_SID'])) {
                $('#syncDemoButton').addClass('btn-success');
            } else {
                $('#syncDemoButton').addClass('btn-danger');
            }

            if (configHasRequiredKeys(response, ['TWILIO_NOTIFICATION_SERVICE_SID'])) {
                $('#notifyDemoButton').addClass('btn-success');
            } else {
                $('#notifyDemoButton').addClass('btn-danger');
            }
        }
        else {
            $('#videoDemoButton').addClass('btn-danger');
            $('#chatDemoButton').addClass('btn-danger');
            $('#syncDemoButton').addClass('btn-danger');
            $('#notifyDemoButton').addClass('btn-danger');
        }
    });

    var configureField = function(response, keyName, elementId, masked) {
        if (masked) {
            if (isValidSid(response[keyName])) {
                $('#' + elementId).html('Configured properly');
                $('#' + elementId).addClass('set');
            } else {
                $('#' + elementId).html('Not configured in .env');
                $('#' + elementId).addClass('unset');
            }
        } else {
            if (isValidSid(response[keyName])) {
                $('#' + elementId).html(response[keyName]);
                $('#' + elementId).addClass('set');
            } else {
                $('#' + elementId).html(response[keyName] + ' Not configured in .env or invalid');
                $('#' + elementId).addClass('unset');
            }
        }
    };
});

function isValidSid(key) {
  if (key == null || key == '') {
    return false;
  } else {
    return key.match(/X{3,}/) == null;
  }
}

function configHasRequiredKeys(config, keys) {
  var hasRequiredKeys = true;

  keys.forEach(key => {
    if (!isValidSid(config[key])) {
      hasRequiredKeys = false;
    }
  });

  return hasRequiredKeys;
}
