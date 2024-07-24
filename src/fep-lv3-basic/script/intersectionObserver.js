// Helper function to map a number from one range to another
function mapRange(value, fromLow, fromHigh, toLow, toHigh) {
  return toLow + (toHigh - toLow) * (value - fromLow) / (fromHigh - fromLow);
}

// Event listener for scroll events
window.addEventListener('scroll', function() {
  const section = document.getElementById('sectionAnim');
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;

  // Calculate the percentage of how far we've scrolled
  const scrollPercent = (scrollTop / docHeight);

  // Map the scroll percentage to a color value
  const red = Math.min(255, Math.max(0, mapRange(scrollPercent, 0, 1, 255, 0)));
  const green = Math.min(255, Math.max(0, mapRange(scrollPercent, 0, 1, 0, 255)));
  const blue = Math.min(255, Math.max(0, mapRange(scrollPercent, 0, 1, 0,
