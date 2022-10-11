$("#login-button").click(() => {
    let dataLogin = {};
    $('#login-form').find ('input, select').each(
        function() {
            if (this.name === 'rememberMe')
                dataLogin[this.name] = this.checked;
            else
                dataLogin[this.name] = $(this).val();
        }
    );

    // Values of form are in data
    console.log(dataLogin)


    changeNavbarToLoggedIn()
})