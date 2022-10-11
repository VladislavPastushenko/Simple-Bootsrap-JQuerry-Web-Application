$("#create-meeting-button").click(() => {

    // Create new action and append it to Document
    $("#meetings-container-col:last").prepend(`
        <div class="box mb-3">
            <h4 class="d-inline-block me-2">6 Oct 2022</h4>
            <span class='align-text-bottom' style="color: gray">
                <img class="img-fluid " alt="calendar" src="media/Calendar.png">
                13:45
            </span>
            <span class="float-end">
                <button class="btn btn-sm btn-outline-gray" id='delete-date-button' type="button"> <img src="media/Delete.png" class="img-fluid" alt="delete"> </button>
            </span>

            <form id="date-form">
                <fieldset>
                    <div class="form-group">
                    <textarea name="text1" class="form-control mt-3" id="date-form-textarea1" rows="5" placeholder="Enter"></textarea>
                    </div>
                    <div class="form-group">
                    <textarea name="text2" class="form-control mt-3 disablable" id="date-form-textarea2" rows="3" placeholder="Enter"></textarea>
                    </div>
                </fieldset>
            </form>
        </div>
    `)


})