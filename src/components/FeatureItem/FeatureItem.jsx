import React from "react";
import "./featureItem.css";

const FeatureItem = ({title,content, anhnen, anh}) => {
    const style={
        backgroundImage :`url(${anhnen})`,
        
    }
    return (
         <div className="feature__content-item" style={style} >
            <span><img src={anh} alt="" /></span>
            <div className="feature__content-item-content">
            <h3 >{title}</h3>
            <p className="feature__content-item__content">{content}</p>
            <p className="feature__content-item__footer">Learn more	&#10145;</p>
            </div>
           
         </div>
         
    )
}
export default FeatureItem;