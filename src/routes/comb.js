import "../style/comb.css";

function Comb(props) {
  return (
    <>
      <div className={props.cName}>
        <img src={props.heroimg} alt="WEBOWING Image" />

        <div className="hero-text">
          <h1>{props.title}</h1>
          <p className="pp">{props.text}</p>
          <a href={props.url} className={props.btnClass}>
            {props.buttonText}
          </a>
        </div>
      </div>
    </>
  );
}

export default Comb;
