// script.ts
document.addEventListener("DOMContentLoaded", function () {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    // Function to draw a horizontal line and print the result of 5 + 3
    function drawHorizontalLine(context, y) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(canvas.width, y);
        context.stroke();
        // Print the result of 5 + 3
        var result = 5 + 3;
        console.log("Result of 5 + 3: ".concat(result));
    }
    // Get the canvas size based on the window size
    function setCanvasSize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    // Event listener for window resize
    window.addEventListener("resize", function () {
        setCanvasSize();
        // Redraw all four horizontal lines when the window is resized
        if (ctx) {
            var lineHeight = canvas.height / 5; // Divide canvas height by 5 to get 4 equally spaced lines
            for (var i = 1; i <= 4; i++) {
                drawHorizontalLine(ctx, i * lineHeight);
            }
        }
    });
    // Initialize the canvas size and draw the initial four horizontal lines
    setCanvasSize();
    if (ctx) {
        var lineHeight = canvas.height / 5; // Divide canvas height by 5 to get 4 equally spaced lines
        for (var i = 1; i <= 4; i++) {
            drawHorizontalLine(ctx, i * lineHeight);
        }
    }
});
