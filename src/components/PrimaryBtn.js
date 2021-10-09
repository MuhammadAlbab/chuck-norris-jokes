const PrimaryBtn = ({ text, clickHandler }) => {
  return (
    <button className="primary-button" onClick={clickHandler}>
      {text}
    </button>
  );
};

export default PrimaryBtn;
