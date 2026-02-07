// Function to generate text based on user prompt
function generateText() {

    // Get user input prompt
    let prompt = document.getElementById("prompt").value;

    // If prompt is empty, show message
    if (prompt.trim() === "") {
        document.getElementById("output").innerText =
            "Please enter a prompt to generate text.";
        return;
    }

    // Predefined responses (simulating generative AI behavior)
    let responses = [
        "Artificial Intelligence is transforming the world by enabling machines to think, learn, and adapt like humans.",
        "In the future, AI systems will help humans solve complex problems in healthcare, education, and climate change.",
        "Once upon a time, AI and humans worked together to build a smarter and more sustainable world.",
        "Generative models create new content by learning patterns from large amounts of data.",
        "AI-powered assistants can generate text, images, and ideas in seconds."
    ];

    // Randomly select a generated response
    let generatedText = responses[Math.floor(Math.random() * responses.length)];

    // Combine prompt + generated output
    document.getElementById("output").innerText =
        "Prompt: " + prompt + "\n\nGenerated Text: " + generatedText;
}
