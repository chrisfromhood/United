import "./_promotions.css";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import PostCTA from "../components/CTA/PostCTA";
import Coupon from "../components/CTA/Coupon";
import BaseContent from "../components/BaseContent/BaseContent";
import Footer from "../components/Footer/Footer";

function Promotions() {
    return (
        <div>
            <Header></Header>

            <div className="content">
                <div className="inner-page-header">
                    <div className="fill">
                        <div className="container">
                            <h1 className="title">Promotions</h1>
                        </div>
                    </div>
                </div>
                <div className="inner-page-content container">
                    <div className="row">
                        <div className="col-lg-8 content-info">
                            <div className="post-content">
                                <Coupon></Coupon>
                                <Coupon></Coupon>
                                <Coupon></Coupon>
                                <Coupon></Coupon>
                                <PostCTA></PostCTA>
                            </div>
                        </div>
                        <div className="col-lg-4 sticky-sidebar">
                            <Sidebar></Sidebar>
                        </div>

                    </div>
                </div>
            </div>
            <BaseContent></BaseContent>
            <Footer></Footer>
        </div>
    )
}
export default Promotions;