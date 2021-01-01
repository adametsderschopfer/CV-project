import "./Button.scss";

export function Button({ bordered = false, children, style, className = "" }) {
  const borderedButton = (_bordered) => {
    return _bordered !== undefined
      ? (_bordered === true && "button--bordered") || ""
      : "";
  };

  return (
    <button
      className={`button ${borderedButton(bordered)} ${className}`}
      style={style}
    >
      <div className="button__text">{children}</div>
    </button>
  );
}
