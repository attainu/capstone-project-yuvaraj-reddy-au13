import React from "react";
import './rating.css';


const Rating = ({ value, text }) => {
    return (
        <div className="ratings">
            {[1, 2, 3, 4, 5].map((index, i) => (
                <i key={i}
                    className={
                        value >= index
                            ? "fas fa-star stars"
                            : value >= index - 0.5
                            ? "fas fa-star-half-alt stars"
                            : "far fa-star stars"
                    }
                ></i>
            ))}
            {/* <span>
                <i
                    className={
                        value >= 1
                            ? "fas fa-star"
                            : value >= 0.5
                            ? "fas fa-star-half-alt"
                            : "far fa-star"
                    }
                ></i>
                </span>
            <span>
                <i
                    className={
                        value >= 2
                            ? "fas fa-star"
                            : value >= 1.5
                            ? "fas fa-star-half-alt"
                            : "far fa-star"
                    }
                ></i>
                </span>


                <span>
                <i
                    className={
                        value >= 3
                            ? "fas fa-star"
                            : value >= 2.5
                            ? "fas fa-star-half-alt"
                            : "far fa-star"
                    }
                ></i>
                </span>

                <span>
                <i
                    className={
                        value >= 4
                            ? "fas fa-star"
                            : value >= 3.5
                            ? "fas fa-star-half-alt"
                            : "far fa-star"
                    }
                ></i>
                </span>


                <span>
                <i
                    className={
                        value >= 5
                            ? "fas fa-star"
                            : value >= 4.5
                            ? "fas fa-star-half-alt"
                            : "far fa-star"
                    }
                ></i>
            </span> */}

            <span>{text ? text : ''}</span> 
        </div>
    );
};

export default Rating;
