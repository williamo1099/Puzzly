function InfoButton({ clickHandler, classNames = "", icon: Icon }) {
  return (
    <button
      className={`absolute flex justify-center cursor-pointer hover:opacity-80 ${classNames}`}
      onClick={clickHandler}
    >
      <Icon className="w-10 h-10 text-primary" />
    </button>
  );
}

export default InfoButton;
