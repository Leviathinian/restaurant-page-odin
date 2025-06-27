export default function loadMenu() {
  const content = document.getElementById('content');
  const menuDiv = document.createElement('div');
  menuDiv.innerHTML = `
    <h1>Menu</h1>
    <ul>
      <li>Truffle Mac & Cheese</li>
      <li>Seared Salmon with Dill Cream</li>
      <li>Decadent Chocolate Lava Cake</li>
    </ul>
  `;
  content.appendChild(menuDiv);
}