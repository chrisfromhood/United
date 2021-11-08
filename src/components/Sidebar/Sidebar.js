import "./_sidebar.css";

function Sidebar() {
    return (

        <div className="sticky-wrapper">
            <aside className="sidebar">
                <div className="s-box-wrapper">
                    <div className="s-box-large">
                        <div className="h4">CONNECT WITH SPECIALIST</div>

                        <div className="form-message">
                            <form>
                                <div className="form-row">
                                    <div className="col">
                                        <div className="field-name">
                                            <label for="validationDefault01">First name</label>
                                            <input type="text" className="form-control " id="validationDefault01" />
                                            <div className="valid-feedback">Looks good!</div>
                                        </div>
                                        <div className="field-last-name">
                                            <label for="validationDefault01">Last name</label>
                                            <input type="text" className="form-control " id="validationDefault01" />
                                            <div className="valid-feedback">Looks good!</div>
                                        </div>
                                        <div className="field-phone">
                                            <label for="validationDefault01">Phone</label>
                                            <input type="text" className="form-control" id="validationDefault01" aria-describedby="validationServer05Feedback" required />
                                            <div id="validationServer05Feedback" className="invalid-feedback">
                                                Please provide a valid phone number.
                                            </div>
                                        </div>
                                        <div className="field-zip">
                                            <label for="validationDefault01">Zip</label>
                                            <input type="text" className="form-control" id="validationDefault01" aria-describedby="validationServer05Feedback" required />
                                            <div id="validationServer05Feedback" className="invalid-feedback">
                                                Please provide a valid zip.
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label for="validationTextarea">Textarea</label>
                                            <textarea className="form-control" id="validationTextarea" placeholder="Required example textarea" required=""></textarea>
                                            <div className="invalid-feedback">
                                                How can we help?
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button className="btn btn-primary" type="submit">Submit</button>
                            </form>
                        </div>

                    </div>
                    <div className="review-box">Review box</div>
                    <div className="s-box-small text-center">
                        <h4>Quick, easy &amp; affordable financing is available for you</h4>
                    </div>
                </div>
            </aside>
        </div>

    );
}
export default Sidebar;