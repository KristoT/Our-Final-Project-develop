import product1and5 from "../../images/product1.png";
import productTwo from "../../images/product2.png";
import product3and6 from "../../images/product6.png";
import product4 from "../../images/product4.png";

const SHOP_DATA = {
	women: {
		id: 1,
		title: "Women",
		routeName: "women",
		items: [
			{
				id: "product2",
				img: productTwo,
				title: "Apollo sweater for woman",
				price: "$100.00",
			},
			{
				id: "product3",
				img: product3and6,
				title: "Apollo dress",
				price: "$30.00",
			},
		]
	},
	men: {
		id: 2,
		title: "Men",
		routeName: "men",
		items: [
			{
				id: "product1",
				img: product1and5,
				title: "Apollo man sweater",
				price: "$50.00",
			},
		]
	},
	kids: {
		id: 3,
		title: "Kids",
		routeName: "kids",
		items: [
			{
				id: "product4",
				img: product4,
				title: "Apollo t-shirt for kid",
				price: "$30.00",
			},
			{
				id: "product5",
				img: product1and5,
				title: "Apollo sweater",
				price: "$80.00",
			},
			{
				id: "product6",
				img: product3and6,
				title: "Apollo dress",
				price: "$70.00",
			},
		]
	}
}

export default SHOP_DATA;
