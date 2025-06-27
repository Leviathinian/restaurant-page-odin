export default function loadAbout() {
  const content = document.getElementById('content');
  const aboutDiv = document.createElement('div');
  aboutDiv.innerHTML = `
    <h1>About Us</h1>
    <p>My Bistro began as a dream to bring quality and warmth to every plate.</p>
  `;
  content.appendChild(aboutDiv);
}