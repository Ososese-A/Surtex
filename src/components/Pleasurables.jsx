import conds from "../assets/condom_img.png"
import lub from "../assets/lub_img.png"
import stoys from "../assets/toy_img.png"

const Pleaseurables = () => {
    return ( 
        <>
        <div className="ple">
        <p className="sub-head-ple">Pleasurables</p>
        <div className="ple-con">
            <div className="dom-con">
                <img className="conds" src={conds} alt="condom" />
                <p className="dom-txt">
                Our condoms can <br />
                be dotted, ultra-thin, <br /> 
                serrated, support  <br />
                long performance <br />
                and evoke different <br />
                emotions.
                </p>
                <p className="dom-label">CONDOMS</p>
            </div>
            <div className="lub">
                <img className="lb" src={lub} alt="lubricants" />
                <p className="lub-txt">
                Reach the pinacle of <br />
                pleasure thanks to <br />
                lubricants and gels <br />
                that will make sex a <br />
                fun and comfortable <br />
                experience.
                </p>
                <p className="lub-label">LUBRICANTS</p>
            </div>
            <div className="toys">
                <img className="stoys" src={stoys} alt="sex toys" />
                <p className="toys-txt">
                Our toys are <br />
                designed for you <br />
                to enjoy with <br />
                your partner or <br />
                on your own.
                </p>
                <p className="toys-label">SEX TOYS</p>
            </div>
        </div>
        </div>
        </>
     );
}
 
export default Pleaseurables;