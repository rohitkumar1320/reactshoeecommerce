import nikebody from "../../../assets/nikebody.jpg";

function Banner() {
    return(
        <div style={{ position: "relative" }}>
        <img className="yoyotyoo" src={nikebody} alt="nike body"></img>
        <button className="button-styling"
          style={{
            position: "absolute",
            top: "90%",
            right: "90.5%",
            padding:"10px 20px",
            borderRadius:"30px",
            border:"0px"
          }}
        >Buy
        </button>
      </div>
    )
}

export default Banner;