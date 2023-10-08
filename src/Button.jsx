const Button = ({ range, setAnswer }) => {
  return (
    <>
      {/* display answers */}
      <button
        style={{ cursor: "pointer" }}
        className="main__primary_btn"
        onClick={() => setAnswer(range)}
      >
        Click
      </button>

      {/* clears answers */}
      <button
        style={{ cursor: "pointer" }}
        className="main__secondary_btn"
        onClick={() => setAnswer(0)}
      >
        Clear
      </button>
    </>
  );
};

export default Button;
