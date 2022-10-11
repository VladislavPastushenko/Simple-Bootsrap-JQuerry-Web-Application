$("#password-recover-button").click(() => {
    let dataPasswordRecover = {};
    $('#password-recover-form').find ('input').each(
        function() {
            dataPasswordRecover[this.name] = $(this).val();
        }
    );

    // Values of form are in data
    console.log(dataPasswordRecover)
})