import React from "react";
import style from "./Card.module.css";

const Card = (props) => {
    const { imgSrc, imgAlt, title, price } = props;

    return (
        <div className={style.card}>
            <div className="p-3">
                <img src={imgSrc} alt={imgAlt} className={style.Img} />
                <div className="card-body text-start">
                    <table className="mb-4">
                        <tr>
                            <td className={style.text}>Judul</td>
                            <td>: {title}</td>
                        </tr>
                        <tr>
                            <td className={style.text}>Harga</td>
                            <td>: Rp {price},-</td>
                        </tr>
                    </table>
                    <button className="btn btn-success" disabled="disabled">Buy</button>
                </div>
            </div>
        </div>
    )
}

export default Card;