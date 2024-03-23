import React from "react";
import "./features.css"
import FeatureItem from "../FeatureItem/FeatureItem";
import anh1 from "../../assets/images/anh1.png"
import anh2 from "../../assets/images/anh2.png"
import anh3 from "../../assets/images/anh3.png"
import anh4 from "../../assets/images/anh4.png"
import image4 from "../../assets/images/image4.png"
import image3 from "../../assets/images/image3.png"
import image2 from "../../assets/images/image2.png"
import image1 from "../../assets/images/image1.png"
const Features = () => {
    return (
        <div className="features">
            <div className="features__head">
                <h1>Features</h1>
                <p>Some of the features and advantages that we provide for those of you who store data in this Data Warehouse.</p>
            </div>
            <div className="features__content">
                <FeatureItem anh={image1}anhnen={anh1} title='Search Data' content='Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time.'/>
                <FeatureItem anh={image2}anhnen = {anh2} title='24 Hours Access' content='Access is given 24 hours a full morning to night and
meet again in the morning, giving you comfort when
you need data when urgent.'/>
                <FeatureItem anh={image3}anhnen={anh3} title='Print Out' content='Print out service gives you convenience if someday
you need print data, just edit it all and just print it.'/>
                <FeatureItem anh={image4}anhnen={anh1} title='Security Code' content='Data Security is one of our best facilities. Allows for your files
to be safer. The file can be secured with a code or password that 
you created, so only you can open the file.'/>
                 
            </div>
        </div>
    )
}
export default Features;