// Load images and apply neural style transfer
async function applyStyle() {

    // Get image files
    let contentFile = document.getElementById("content").files[0];
    let styleFile = document.getElementById("style").files[0];

    if (!contentFile || !styleFile) {
        alert("Upload both images!");
        return;
    }

    // Display content image as output (demo purpose)
    document.getElementById("outputImage").src =
        URL.createObjectURL(contentFile);

    alert("Style Transfer applied (Demo version)");
}
