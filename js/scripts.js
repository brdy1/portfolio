$(document).ready(function() {
    let detailsContainer = $('#detailsContainer');

    detailsContainer.dialog({
        autoOpen: false,
        modal: true,
        resizable: false,
        closeOnEscape: true
    });

    $detailsContainer.bind('clickoutside',function(){
        detailsContainer.dialog('close');
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