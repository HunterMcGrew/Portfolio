import React from "react";
import "./footer.css";

function Footer(props) {

    return(

        <footer>
            <p data-theme={props.theme}>
                Hunter McGrew 2022
            </p>
    </footer>

    )

}

export default Footer;