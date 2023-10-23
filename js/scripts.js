function checkRadio() {
    const question1 = document.querySelector("input[name="question1"]:checked").value;
    const question2 = document.querySelector("input[name="question2"]:checked").value;
    const question3 = document.querySelector("input[name="question3"]:checked").value;
    const question4 = document.querySelector("input[name="question4"]:checked").value;
    const question5 = document.querySelector("input[name="question5"]:checked").value;

    
    let recommendation = "";

    if (question3 === "true" && question4 === "false" && question5 === "false") {
        recommendation = "cSharp";
    } else if (question3 === "false" && question4 === "true" && question5 === "false") {
        recommendation = "javaScript";
    } else if (question3 === "false" && question4 === "false" && question5 === "true") {
        recommendation = "python";
    } else {
        recommendation = "neither";
    }

    
    document.getElementById("neither").classList.add("hidden");
    document.getElementById("cSharp").classList.add("hidden");
    document.getElementById("javaScript").classList.add("hidden");
    document.getElementById("python").classList.add("hidden");

    
    document.getElementById(recommendation).classList.remove('hidden');

    document.addEventListener("change", recommendation)
}






    
