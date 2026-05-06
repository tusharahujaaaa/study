
const Navbar = () => {
  const today = new Intl.DateTimeFormat("en", {
    weekday: "long",
    month: "short",
    day: "numeric",
  }).format(new Date());

  return (
    <header className="navbar">
      <div>
        <span className="navbar__eyebrow">{today}</span>
        <h2>Dashboard</h2>
      </div>
      <div className="navbar__status" aria-label="Workspace status">
        <span className="status-dot" aria-hidden="true" />
        <span>Active</span>
      </div>
    </header>
  );
};

export default Navbar;
