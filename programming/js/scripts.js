function hideResults() {
    document.getElementById("neither").setAttribute("class", "hidden");
    document.getElementById("cSharp").setAttribute("class", "hidden");
    document.getElementById("python").setAttribute("class", "hidden");
    document.getElementById("javaScript").setAttribute("class", "hidden");
}

    window.onload = function() {
    document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    hideResults();
        // Get user responses
        const why = document.getSelectedValue("nad");
        const skills = document.getSelectedValue('nothing');
        const interestGames = document.getSelectedValue("answer1");
        const interestBack = document.getSelectedValue("answer3");
        const interestDevelopment = document.getSelectedValue("answer5");

        // Determine the recommendation
        

        if (why && skills && interestBack && interestGames) {
            if (interestGames === "yes1" && interestBack === "no2" && interestDevelopment === "no3") {
                document.getElementById("cSharp").removeAttribute("class");
            } else if (interestGames === "no1" && interestBack === "yes2" && interestDevelopment === "no3") {
                document.getElementById("javaScript").removeAttribute("class");
            } else if (interestGames === "no1" && interestBack === "no2" && interestDevelopment === "yes3") {
                document.getElementById("python").removeAttribute("class");
            } else {
                document.getElementById("neither").removeAttribute("class");
            }
        }

        
    }

   
        }
    



    