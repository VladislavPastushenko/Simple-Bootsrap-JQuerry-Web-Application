$("#sign-up-button").click(() => {
    let dataSingUp = {};
    $('#sign-up-form').find ('input').each(
        function() {
            if (this.name === 'termsAndConditions')
                dataSingUp[this.name] = this.checked;
            else
                dataSingUp[this.name] = $(this).val();
        }
    );

    // Values of form are in data
    console.log(dataSingUp)
})