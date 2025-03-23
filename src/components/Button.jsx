function Button({ children, disabled, clickHandler }) {
  return (
    <button
      className={`bg-primary text-lg font-bold p-3 rounded transition-opacity ${
        disabled ? "opacity-50 cursor-not-allowed" : "hover:opacity-80"
      }`}
      disabled={disabled}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
}

export default Button;
