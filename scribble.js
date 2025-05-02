import roughNotation from 'rough-notation';
  document.addEventListener("DOMContentLoaded", function () {
    // Get elements to annotate
    const heading = document.getElementById('heading');
    const intro = document.getElementById('intro');

    // Create a rough annotation on the heading
    const headingAnnotation = roughNotation.annotate(heading, {
      type: 'box', // Type of annotation: box, circle, underline, strike-through, etc.
      color: '#ff4d6d', // Color of the annotation
      strokeWidth: 4, // Thickness of the line
      animationDuration: 2000 // Duration of the animation
    });

    // Create a rough annotation on the paragraph
    const introAnnotation = roughNotation.annotate(intro, {
      type: 'underline', // Type of annotation
      color: '#5f43b2',
      strokeWidth: 2,
      animationDuration: 1500
    });

    // Start the animation
    headingAnnotation.show();
    introAnnotation.show();
  });

