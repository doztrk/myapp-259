import React from "react";
import { ProductCard } from "./product-card";

export const Products = () => {

    //Props are used to send a data from one component to another
    //There are 2 types of props, normal and children-props
	return (
		<div>

            {/* Normal Prop <ProductCard title="Iphone 11" price="1500" desc= "Lorem Ipsum"/> */}

            {/* Children Prop ↴ */}
			<ProductCard title="Sony X5 Ultra" price="1000">
				Lorem ipsum dolor sit amet consectetur<b> adipisicing elit. Neque, optio.</b>
			</ProductCard>


			<ProductCard title="Iphone 11" price="800">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, optio.{" "}
				<b>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit officiis voluptatibus dolores est laboriosam fugiat
					accusantium eius voluptates earum."
				</b>
			</ProductCard>
		</div>
	);
};
