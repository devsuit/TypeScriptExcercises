// script.ts
document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d");

  // Function to draw a horizontal line and print the result of 5 + 3
  function drawHorizontalLine(context: CanvasRenderingContext2D, y: number) {
    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(canvas.width, y);
    context.stroke();

    // Print the result of 5 + 3
    const result = 5 + 3;
    console.log(`Result of 5 + 3: ${result}`);
  }

  // Get the canvas size based on the window size
  function setCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  // Event listener for window resize
  window.addEventListener("resize", () => {
    setCanvasSize();
    // Redraw all four horizontal lines when the window is resized
    if (ctx) {
      const lineHeight = canvas.height / 5; // Divide canvas height by 5 to get 4 equally spaced lines
      for (let i = 1; i <= 4; i++) {
        drawHorizontalLine(ctx, i * lineHeight);
      }
    }
  });

  // Initialize the canvas size and draw the initial four horizontal lines
  setCanvasSize();
  if (ctx) {
    const lineHeight = canvas.height / 5; // Divide canvas height by 5 to get 4 equally spaced lines
    for (let i = 1; i <= 4; i++) {
      drawHorizontalLine(ctx, i * lineHeight);
    }
  }
});