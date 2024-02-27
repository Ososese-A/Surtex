import disImg from "../assets/discover_img.png"

const Discover = () => {
    return ( 
        <>
        <div className="discover">
            <div className="dis-txt-box">
                <p className="dis-tit">
                Pleasure is to be <br />
                Expressed and <br />
                Explored
                </p>
                <p className="dis-txt">
                Although a lot of people see sex as a complex process <br />
                that doesn't mean it has to be complex. Pleasure should <br />
                be explored and expressed and seeing as sex is <br />
                associated with pleasure the same thing goes for sex. <br /> 
                We exist for this reason, to enhance this expression and <br />
                exploration of pleasure. 
                </p>
            </div>
            <div className="dis-img-box">
                <img className="dis-img" src={disImg} alt="discover" />
                <br />
                <button className="dis-btn">DISCOVER SURTEX</button>
            </div>
        </div>
        </>
     );
}
 
export default Discover;