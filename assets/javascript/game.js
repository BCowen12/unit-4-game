
    var score = 0;
    var wins = 0;
    var loses = 0;
    var goal = 0;
    var pics = ["assets/images/blue.jpg", "assets/images/green.png", "assets/images/red.jpg", "assets/images/yellow.jpeg"];

    start();
    

    function GoalRandom(){
        return Math.floor(Math.random() * 120) + 19;
    }


    function start(){
        goal = GoalRandom();
        score = 0;
        var points = [1,2,3,4];
        $("#wins").html(`<p>Wins: ${wins}</p>`);
        $("#loses").html(`<p>Loses: ${loses}</p>`);
        $("#crystals").html("");

        points = points.map(x => (Math.floor(Math.random() * 12) + 1));
        
        for (var i = 0; i < points.length; i++){
            var imageCrystal = $("<img>");
            imageCrystal.addClass("crystal-image");
            imageCrystal.attr("src", pics[i]);
            imageCrystal.attr("value", points[i]);
            $("#crystals").append(imageCrystal);
        }

        $("#goal").text(goal);
        $("#score").text(score);
        $('.crystal-image').on("click", crystal);
        
    }




    function crystal(c){
        var value = $(this).attr("value");
        console.log(value);

        score += parseInt(value);
        

        if(score >= goal){
            if(score === goal){
                wins ++;
                $("#result").text("You win!!!");
                start();
            }else{
                loses++;
                $("#result").text("You are a loser!");
                start();
            }

        }

        $("#score").text(score);

    }
