import React from 'react';
import classes from './ProductPreview.module.css';


const ProductPreview = (props) =>
{
    let hours=new Date().getHours()<10 ? '0' + new Date().getHours(): new Date().getHours();
    
    hours=hours>12 ? String(parseInt(hours)-12) : hours;
    
    const time= parseInt(new Date().getHours())<12 ? 'AM' : 'PM'
    

    const minutes=new Date().getMinutes()<10 ? '0' + new Date().getMinutes(): new Date().getMinutes();

    return(
        <div className={classes.ProductPreview}>
          <img src={props.currentPreviewImage} alt="Product Preview"/>


          {
            props.showHeartBeatSection ?

            <div className={classes.HeartBeatSection}>
              <i className="fa fa-heartbeat" aria-hidden="true"></i>
              <p>
                78
              </p>
            </div>
            :
            <div className={classes.TimeSection}>
              <p>
                {`${hours}:${minutes}`}
              </p>
              <p className={classes.TimeZone}>{time}</p>
            </div>

          }


        
        </div>
    );
}


export default ProductPreview;