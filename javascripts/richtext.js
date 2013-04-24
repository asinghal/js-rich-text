function formatText(command, value) {
    value = value || null;
    document.execCommand(command,false,value);
}

$(document).ready(function() {

    $(document).bind('keydown', 'ctrl+b', function(e) {
      formatText('bold');
    });
});