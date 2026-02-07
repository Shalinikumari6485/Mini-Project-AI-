// Function to summarize text
function summarizeText() {

    // Get input text
    let text = document.getElementById("inputText").value;

    // Split text into sentences
    let sentences = text.match(/[^.!?]+[.!?]/g);

    if (!sentences) {
        document.getElementById("output").innerText = "Please enter valid text.";
        return;
    }

    // Count word frequencies
    let words = text.toLowerCase().match(/\w+/g);
    let freq = {};

    words.forEach(word => {
        freq[word] = (freq[word] || 0) + 1;
    });

    // Score sentences
    let scores = sentences.map(sentence => {
        let score = 0;
        sentence.toLowerCase().match(/\w+/g).forEach(word => {
            score += freq[word];
        });
        return { sentence, score };
    });

    // Sort sentences by score
    scores.sort((a, b) => b.score - a.score);

    // Pick top 3 sentences
    let summary = scores.slice(0, 3).map(s => s.sentence).join(" ");

    // Display summary
    document.getElementById("output").innerText = summary;
}
