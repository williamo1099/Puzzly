function Button({ children, clickHandler }) {
  return (
    <button
      className="bg-primary text-lg font-bold p-3 rounded"
      onClick={clickHandler}
    >
      {children}
    </button>
  );
}

export default Button;
