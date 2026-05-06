
const Sidebar = () => {
  const navItems = ["Dashboard", "Tasks", "Notes", "Settings"];

  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <span className="brand-mark" aria-hidden="true">
          P
        </span>
        <div>
          <h2>Productivity</h2>
          <span>Focus board</span>
        </div>
      </div>

      <nav aria-label="Main navigation">
        <ul className="sidebar__nav">
          {navItems.map((item) => (
            <li
              className={item === "Dashboard" ? "is-active" : ""}
              key={item}
            >
              <span className="nav-dot" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
