import React from "react";

function DebitCard() {
    return (
        <div className="cardGroup">
            <img src="https://www.pngmart.com/files/22/Visa-Card-Logo-PNG-Isolated-Transparent-Picture.png" alt="" className="card_logo" />
            <img src="https://cdn-icons-png.flaticon.com/512/6404/6404078.png" alt="" className="card_chip" />

            <div className="card_number">123456789</div>

            <div className="card_name">Avijit Saha</div>

            <div className="card_from">10/21</div>

            <div className="card_to">10/25</div>
            <div className="card_ring"></div>
        </div>
    );
}

export default DebitCard;
