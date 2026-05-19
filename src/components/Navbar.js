export default function Navbar() {
  return (
    <nav id="nav">
      <div className="logo">Vend<span className="dot">✻</span>Axis</div>
      <div className="nav-links">
        <a href="#work">Work</a>
        <a href="#services">Services</a>
        <a href="#about">Studio</a>
        <a href="#contact" className="nav-cta"><span className="live" /> Let's talk</a>
      </div>
    </nav>
  );
}
