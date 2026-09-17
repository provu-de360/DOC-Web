import { Link } from "react-router-dom";

// Reusable button component.
// Usage: <Button to="/rides" variant="primary">VIEW RIDES</Button>
// If you pass "to", it becomes a link. Otherwise it's a normal button.
function Button({ children, to, onClick, variant = "primary", type = "button", className = "" }) {
  const classes = `btn btn-${variant} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

export default Button;
