$(document).ready(function() {
    let detailsContainer = $('#detailsContainer');

    detailsContainer.dialog({
        autoOpen: false,
        modal: true,
        resizable: false,
        closeOnEscape: true,
        close: function(event, ui) { $('#wrap').show(); },
    open: function(event, ui) 
    { 
        $('.ui-widget-overlay').bind('click', function()
        { 
            $("#popup").dialog('close'); 
        }); 
    }
    });

    $('.annotation').click(function() {
        let annotationId = $(this).attr('id');

        detailsContainer.load('php/annotationFetch.php #' + annotationId);
        detailsContainer.dialog('option', 'position', {
            at: 'right top',
            of: this
        });

        detailsContainer.dialog('open');
    });
})

$field_hint.bind('clickoutside',function(){
    $field_hint.dialog('close');
});