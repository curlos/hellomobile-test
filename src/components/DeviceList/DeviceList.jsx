import './DeviceList.css';
import { PHONES } from '../../utils/phones';
import { useState } from 'react';

const DeviceList = ({ devices }) => {

    return (
        <div id="device-list" className="container">
            {devices.map((phone) => {
                const imgLink = `https://resources.hellomobile.com/hello-mobile-temp/prepaid/products/phones/en/${phone.ProductId}.jpg`;
                return (
                    <div className="text-center shop-phone-card">
                        <div className="text-primary">{phone.Brand}</div>
                        <div className="text-black fw-bold">{phone.Name}</div>
                        <div className="my-2">
                            <img src={imgLink} alt="" />
                        </div>
                        <div>${phone.Price}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default DeviceList;