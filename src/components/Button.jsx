function Button({
  children,
  disabled,
  clickHandler,
  classNames = "",
  icon: Icon,
}) {
  return (
    <button
      className={`flex items-center gap-2 bg-primary text-black text-lg font-bold p-3 rounded transition-opacity w-fit cursor-pointer ${
        disabled ? "opacity-50 cursor-not-allowed" : "hover:opacity-80"
      } ${classNames}`}
      disabled={disabled}
      onClick={clickHandler}
    >
      {/* Icon */}
      {Icon && <Icon className="w-5 h-5" />}

      {/* Text */}
      {children}
    </button>
  );
}

export default Button;
