var date = new Date().toLocaleDateString()
let display_date= "Date:" + date

//ready() -> to initialise the document
$(document).ready(function () {
    $("#display_date").html(display_date)
})

let predicted_emotion;
$(function () {
    $("#predict_button").click(function () {

        let input_data = {
            "text": $("#text").val()
        }

        $.ajax({
            type: 'POST',
            url: "/predict-emotion",
            data: JSON.stringify(input_data),
            dataType: "json",
            contentType: 'application/json',
            success: function (result) {
                
                // Result Received From Flask ----->JavaScript
                predicted_emotion = result.data.predicted_emotion
                emo_url = result.data.predicted_emotion_img_url

                
                // Display Result Using JavaScript----->HTML
                $("#prediction").html(predicted_emotion)
                $('#prediction').css("display", "block");

                $("#emo_img_url").attr('src', emo_url);
                $('#emo_img_url').css("display", "block");
            },
            error: function (result) {
                alert(result.responseJSON.message)
            }
        });
    });
})


 // we’ll create the AJAX function. This
        // method requires parameters in the form of
        // key-value pairs

            // i . url: URL of the page where we want to send the request.
            // ii. type: type of the request, GET or POST.
            // iii. data: actual data that needs to be sent to the server.
            // iv. dataType: datatype of the response.
            // v. contentType: type of content used while sending a request to the server.
            // vi. success: a function after the request is successful.
            // vii. error: a function after the request fails.
            
// const weekDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
// const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']


// display_date = `${weekDay[date.getDay() - 1]}, ${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`