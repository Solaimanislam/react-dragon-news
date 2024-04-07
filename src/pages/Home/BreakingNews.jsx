import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex bg-[#F3F3F3] mt-5">
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee pauseOnHover={true} speed={100}>
                <Link className=" font-semibold my-2" to='/'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as.....</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;