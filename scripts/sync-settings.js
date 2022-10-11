$("#sync-settings-button").click(() => {
    let dataSyncSettings = {};
    $('#sync-settings-form').find ('input, textarea').each(
        function() {dataSyncSettings[this.name] = $(this).val();}
    );

    // Values of form are in data
    console.log(dataSyncSettings)

    $('#sync-title').text(dataSyncSettings.title)
})