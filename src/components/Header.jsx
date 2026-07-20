function Header({ name }) {
  return (
    <header className="profile">
      <div className="avatar">RP</div>

      <h1>{name}</h1>

      <p>Computer Science Engineering Student</p>

      <small>AI • ML • React Enthusiast</small>
    </header>
  );
}

export default Header;