const Banner=()=>{
    return(
        <>
        <div className="background_img">
        <div className="container">
            <div className="row">
                <div className="col-lg-5">
                    <div className="banner_text_aside">
                        <span><span>icon</span>Discover The Easiest ways to Build Your CV!</span>
                        <div>
                            <h3>Create Your Winning Resume in Minutes.</h3>
                            <p>Our Perfect resume builder takes the hassle out of resume writing. Choose from several templates and follow easy prompts to create the perfect job-ready resume.</p>
                        </div>
                        <div className="d-flex justify-content-space-between w-100 gap-5">
                            <button className="btn"><a href="#" className="nav_btn">Chose Template</a></button>
                            <button className="btn"><a href="#" className="nav_btn">Contact Us</a></button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7"></div>
            </div>
        </div>
        </div>
        </>
    )
}
export default Banner;