const Button = ({ id, url, children, target }) => {
  return (
    <a
      id={id}
      href={url}
      className="bg-gray w-full max-w-[50rem] p-4 rounded-lg text-center drop-shadow-[0_1px_2px_rgba(16,24,40,0.05)]"
      target={target || ""}
    >
      {children}
    </a>
  );
};

export default Button;
