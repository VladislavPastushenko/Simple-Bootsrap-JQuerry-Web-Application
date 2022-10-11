$("#create-action-button").click(() => {
    let dataAddAction = {assignTo: []};
    $('#add-action-form').find ('input').each(
        function() {
            if (this.name === 'assignTo') {
                if (this.checked)
                    dataAddAction.assignTo.push($(this).val());
            }
            else {
                dataAddAction[this.name] = $(this).val();
            }
        }
    );

    // Values of form are in data
    console.log(dataAddAction)

    $("#no-actions-placeholder").hide()

    // Create new action and append it to Document
    $("#action-points-container").append(`
        <div class="container">
            <div class="row justify-content-center mt-2 action-card gx-1">
                <div class="col-3 col-sm-1 col-md-3 col-lg-2 align-self-center">
                    <input class="form-check-input" type="checkbox" name="checked" value="${dataAddAction.assignTo[0]}">
                </div>
                <div class="col-6 col-sm-9 col-md-5 col-lg-8">
                    ${dataAddAction.action}
                </div>
                <div class="col-3 col-sm-1 col-md-4 col-lg-2 align-self-center" style='white-space: nowrap;'>
                    ${dataAddAction.assignTo.length > 1 ?
                        `<img src="media/avatar-man.png" class='d-inline-block' alt="avatar" width="24" height="24">
                        <img src="media/avatar-woman.png" class='d-inline-block' style='margin-left: -.8em;' alt="avatar" width="24" height="24">
                        `
                        :
                        '<img src="media/avatar-man.png" alt="avatar" width="24" height="24">'
                    }
                </div>
            </div>
        </div>
    `)


})