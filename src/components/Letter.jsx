const Letter = () => {
    return ( 
        <>
        <div className="letter">
            <p className="sub-head-let">Pleasure Letter</p>
            <p className="let-txt">
            If you would like to know more about pleasure exploration and expression make <br />
            sure to subscribe to our newsletter to get all the info and updates you'll need.
            </p>

            <form>
                <input placeholder="E-mail Address" type="text" name="newletter" id="news-field"/>
                <input type="submit" value="SUBSCRIBE" id="sub-btn"/>
            </form>
        </div>
        </>
     );
}
 
export default Letter;