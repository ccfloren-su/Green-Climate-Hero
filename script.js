console.log("Hello 🌎");


const btn = document.querySelector("button"); // Get the button from the page
if (btn) { // Detect clicks on the button
  btn.onclick = function () {
    // The 'dipped' class in style.css changes the appearance on click
    btn.classList.toggle("dipped");
  };
}



let goto = (file, line) => {
  window.parent.postMessage(
    { type: "glitch/go-to-line", payload: { filePath: file, line: line } }, "*"
  );
};
// Get the file opening button from its class name
<script>
    function processSurvey() {
        // Get the selected values
        const spending = document.querySelector('input[name="spending"]:checked');
        const electricity = document.querySelector('input[name="electricity"]:checked');
        const flights = document.querySelector('input[name="flights"]:checked');

        // Initialize output message
        let outputMessage = "Your Survey Results:\n";

        // Validate input
        if (!spending || !electricity || !flights) {
            alert("Please answer all questions before submitting.");
            return;
        }

        // Construct the output message based on the responses
        outputMessage += "Spending: " + spending.value + "\n";
        outputMessage += "Electricity Source: " + electricity.value + "\n";
        outputMessage += "Flights Taken: " + flights.value + "\n\n";

        // If-Then statements for customized messages
        if (spending.value === "Less than $200") {
            outputMessage += "You're a savvy spender!";
        } else if (spending.value === "Between $200 to $1,000") {
            outputMessage += "You have a moderate spending habit.";
        } else if (spending.value === "Between $1,000 to $2,000") {
            outputMessage += "Your spending is on the higher side.";
        } else {
            outputMessage += "You have a luxurious spending style!";
        }

        outputMessage += "\n\n";

        if (electricity.value === "100% clean") {
            outputMessage += "Great job! You're using clean energy.";
        } else if (electricity.value === "50% clean") {
            outputMessage += "You're on the right track, but there's room for improvement.";
        } else {
            outputMessage += "Consider switching to cleaner energy sources.";
        }

        outputMessage += "\n\n";

        if (flights.value === "Zero") {
            outputMessage += "You're minimizing your carbon footprint!";
        } else if (flights.value === "One to Two") {
            outputMessage += "Moderate travel habits!";
        } else if (flights.value === "Three to Five") {
            outputMessage += "You travel quite a bit!";
        } else {
            outputMessage += "Frequent flyer! Consider eco-friendly travel options.";
        }

        // Display the result
        document.getElementById('output').innerText = outputMessage.replace(/\n/g, "<br>");
    }
</script>