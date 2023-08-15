export default function Navbar() {
  return (
  
    <nav className="nav flex p-3 mx-2 justify-center justify-between">
      
      <a href="/" className="rent-ease">
        Rentease
      </a>
      <ul className="flex mx-2">
        <li>
          <a href="/pricing">Pricing</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
      
    </nav>
  );
}
