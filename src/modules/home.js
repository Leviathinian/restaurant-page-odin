export default function loadHome() {
    const content = document.getElementById('content');
    const homeDiv = document.createElement('div');
    homeDiv.innerHTML = `
    <h1>Welcome to My Bistro!</h1>
    <p>Serving comfort good with a modern twist </p>
    `;
    content.appendChild(homeDiv);
}