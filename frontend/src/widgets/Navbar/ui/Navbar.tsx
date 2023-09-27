import "./Navbar.css";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <>
      <header className={className}>
        <div className="Navbar">
          <div>Home</div>
          <div>Products</div>
          <div>Dashboard</div>
          <div>Login</div>
        </div>
      </header>
    </>
  );
};
