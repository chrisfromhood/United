import "./_coupon.css";

function Coupon() {
    return (

        <div className="coupon-wrapper">
            <div className="coupon">
                <div className="coupon-inner row">
                    <div className="col-md-5 order-md-1 align-self-center">
                        <img className="coupon-logo img-fluid" src="https://cdn.searchkings.ca/img/assets/logo-8d549571fa.png" alt="logo" />
                        <div className="info">
                            <h4 className="phone">
                                <span>706-995-7485</span>
                            </h4>
                            <h4 className="location">
                                <span>Local Service</span>
                            </h4>

                        </div>
                    </div>
                    <div className="col-md-7 order-md-1 align-self-center">
                        <h2 className="discount">$200 off Tankless Water Heater</h2>
                    </div>
                </div>
                <hr className="border-hr" />
                <small className="disclamer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, sed autem. Voluptatum aut ad quam tempora mollitia quas, magnam adipisci perspiciatis ipsum? Quam rerum voluptates aut velit maxime doloremque excepturi.</small>
            </div>
        </div>

    );
}
export default Coupon;