import React from "react";
import imgFrontend from "../../assets/img/frontend.jpg";
import imgHome from "../../assets/img/home.svg";
import imgSalesForce from "../../assets/img/salesforce.png";



export const Image = () => {
	return (
		<div>
			<h2>Static Method</h2>
			<p>If Images are at public folder and no optimization required, this method is used</p>
			<img src="/vite.svg" alt="" />


            <h2>Dynamic Method</h2>
            <p>If Images are at public folder and optimization required this method is used</p>

            <img src={imgFrontend} alt="" />
            <img src={imgHome} alt="" />
            <img src={imgSalesForce} alt="" />
		</div>
	);
};
