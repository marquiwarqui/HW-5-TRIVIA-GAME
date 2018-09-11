var questions = [{
            ques: "What is the most popular care in the US?",
            ans: ["Hyundai Elantra", "Toyota Camry", "Honda Accord", "Chevrolet Impala"],
            name: "popularCar",
            correct: "Hyundai Elantra",
            divClass: ".popularCar"
        },
        {
            ques: "What is the most important part of a car?",
            ans: ["Tires", "Steering Wheel", "Brakes", "Engine"],
            name: "importantPart",
            correct: "Tires",
            divClass: ".importantPart"
        },
        {
            ques: "Where should your hands be placed on the Steering Wheel?",
            ans: ["5-7", "12-6", "10-2", "9-3"],
            name: "position",
            correct: "9-3",
            divClass: ".position"
        },
        {
            ques: "What color car is most likely to be pulled over by the police?",
            ans: ["Blue", "Red", "Black", "White"],
            name: "color",
            correct: "Red",
            divClass: "color"
        },
        {
            ques: "What country has the highest speed limit?",
            ans: ["Japan", "France", "Germany", "USA"],
            name: "Speed",
            correct: "Germany",
            divClass: ".Speed"
        },
    ]

var labels = ["first", "second", "third", "forth"];

var startGame = $("#start-btn").on('click', function() {
    $(this).parent().hide();
    $('.container').show();
    countdown(120);
    questionDisplay();
});


var questionDisplay = function() {
    $(".questions :not('#sub-but')").empty();
    
    for (var j = 0; j < 10; j++) {
        $('.questions').prepend('<div class="' + questions[j].name + '"></div>');
        $(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');
        
        for (var i = 0; i <= 3; i++) {
            $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
        }
        $('.questions').prepend('<hr />');
    }
}


var countdown = function(seconds) {

    var timer = setInterval(function() {
        seconds = seconds - 1;
        $("#time-remain").html(seconds);

        if (seconds <= 0) {
            $('.container').fadeOut(500);
            var correctAnswers = 0;
            var wrongAnswers = 0;
            var unAnswered = 0;

            for (var i = 0; i < 10; i++) {

                if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

                    correctAnswers++;
                    console.log("this is correct! number:" + i)
                } else {
                    wrongAnswers++;
                    console.log("this is wrong! number:" + i)
                };
            }
            $('#correctTimesUp').append(correctAnswers);
            $('#wrongTimesUp').append(wrongAnswers);
            $('#timesUp').fadeIn(1000).show();

    
            clearInterval(timer);
            return;
        }
    }, 1000);

    $('#sub-but').on('click', function() {
        clearInterval(timer);
    })
};


var gradeQuiz = $('#sub-but').on('click', function() {

    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;

    for (var i = 0; i < 10; i++) {

        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

            correctAnswers++;
        } else {
            wrongAnswers++;
        };
    };

 
    countdown();
    $('.container').fadeOut(500);
    $('#answerScreen').show();
    $('#correctScreen').append(correctAnswers);
    $('#wrongScreen').append(wrongAnswers);

}); 