const Form = ({ classes, context, formImage }) => {
  return (
    <form className={classes}>
      <input
        type="text"
        placeholder={context}
        className="caret-white text-white placeholder-gray-400 px-0 bg-transparent w-full focus:ring-0 border-none"
      />
      <img
        src={formImage}
        alt="search"
        className="cursor-pointer px-0.5 py-1"
      />
    </form>
  );
};

export default Form;
