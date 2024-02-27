import talkA from "../assets/aricle_one.png"
import talkB from "../assets/aricle_two.png"
import talkC from "../assets/aricle_three.png"
import moreArrow from "../assets/more_arrow.png"

const DirtyTalk = () => {
    return ( 
        <>
        <div className="talk">
        <p className="sub-head-talk">Dirty Talk On Sexuality</p>
        <p className="talk-txt">We all have different perspectives when it comes to sex, orgasms and pleasure but the main theme is to feel good. Read our articles and join the <br />
            discussion as we dive into the world of sexuality and pleasure.</p>
        <button className="talk-btn">EXPLORE SEXUALITY</button>
        <div className="talk-articles">
        <div className="talk-con">
            <img className="talk-img" src={talkA} alt="article one" />
            <div className="talk-con-desc">
                <p className="talk-con-tit">Slow sex or fast sex does it matter</p>
                <p className="talk-con-txt">Seeing as this is a topic that comes to <br /> 
                mind ever so often let's dive into it...</p>
                <p className="talk-con-date">Apr 28, 2021</p>
            </div>
        </div>
        <div className="talk-con">
            <img className="talk-img" src={talkB} alt="article two" />
            <div className="talk-con-desc">
                <p className="talk-con-tit">Sex toys and preferences</p>
                <p className="talk-con-txt">Although a topic like this can be <br /> 
                a no go area it is important to...</p>
                <p className="talk-con-date">Mar 16, 2022</p>
            </div>
        </div>
        <div className="talk-con">
            <img className="talk-img" src={talkC} alt="article three" />
            <div className="talk-con-desc">
                <p className="talk-con-tit">Can condoms make sex better?</p>
                <p className="talk-con-txt">This question is a weird one no doubt <br />
                about it but to lay your curiosity to rest...</p>
                <p className="talk-con-date">Dec 9, 2023</p>
            </div>
        </div>
        </div>
        <p className="more">View All Articles <img src={moreArrow} alt="more arrow" /></p>
        </div>
        </>
     );
}
 
export default DirtyTalk;