import React, { useEffect, useState } from "react";
import { FaAnglesUp } from "react-icons/fa6";

const GoToTop = () => {

    const [isvisible, setisvisible] = useState(false);

    const GoToTopEvent = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 150) {
                setisvisible(true);
            }
            else {
                setisvisible(false);
            }
        });
    }, []);


    return (
        <>
            <div className="GoToTop">
                {isvisible && (
                    <div className="GoToTop_btn" onClick={GoToTopEvent}>
                        <FaAnglesUp className="icon_up" />
                    </div>
                )}
            </div>
        </>

    )
}

export default GoToTop;