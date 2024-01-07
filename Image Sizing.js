let warningMessageEl = document.getElementById("warningMessage");
let imageEl = document.getElementById("image");
let imageWidthEl = document.getElementById("imageWidth");
let decrementButtonEl = document.getElementById("decrementButton");
let incrementButtonEl = document.getElementById("incrementButton");

let imageMaxWidth = 300;
let imageMinWidth = 100;
let originalImageWidth = 200;
let maxWidthWarningMessage = "Too big. Decrease the size of the Image.";
let minWidthWarningMessage = "Can't Visible. Increase the size of the Image.";


function decrementButton() {
    if (originalImageWidth <= imageMinWidth) {
        warningMessageEl.textContent = minWidthWarningMessage
    } else {
        originalImageWidth -= 5;
        let updatedimage = originalImageWidth + "px";

        warningMessageEl.textContent = "";
        image.style.width = updatedimage;
        imageWidthEl.textContent = updatedimage;
    }
}

function incrementButton() {
    if (originalImageWidth >= imageMaxWidth) {
        warningMessageEl.textContent = maxWidthWarningMessage
    } else {
        originalImageWidth += 5;
        let updatedimage = originalImageWidth + "px";

        warningMessageEl.textContent = "";
        image.style.width = updatedimage;
        imageWidthEl.textContent = updatedimage;
    }
}