import React from 'react';
import './products.css';
import ProductTemplate from './productTemplate';





class Products extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            value: 'PriceHL',
            Products: [],
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});

        if(event.target.value === "priceHL") {
            const myData = [].concat(this.state.Products)
                .sort((a, b) => a.price < b.price);

            this.setState({Products: myData});
        }else if(event.target.value === "priceLH") {
            const myData2 = [].concat(this.state.Products)
                .sort((a, b) => a.price > b.price);

            this.setState({Products: myData2});
        }else if(event.target.value === "stockHL") {
            const myData3 = [].concat(this.state.Products)
                .sort((a, b) => a.stock < b.stock);

            this.setState({Products: myData3});
        }else if(event.target.value === "stockLH") {
            const myData4 = [].concat(this.state.Products)
                .sort((a, b) => a.stock > b.stock);

            this.setState({Products: myData4});
        }

    }


componentDidMount() {
    let myRequest = new Request('http://192.168.99.100:8090/api/collections/get/Products?token=9cbbec297423443b8eddc60a2feecb');
    let initialProducts = [];
    fetch(myRequest)
        .then(response => {
            return response.json();
        }).then(data => {
        initialProducts = data.entries.map((products) => {
            return products
        });
        console.log(initialProducts);
        this.setState({
            Products: initialProducts,
        });
    });
}



render () {
    let products = this.state.Products;
    let productlist = products.map((product) =>
        <div className="row" key={product._id}>
           <ProductTemplate  products={product}/>
        </div>
    );
    return (
        <div id="productcontainer">

            <select value={this.state.value} onChange={this.handleChange}>
                <option value="priceHL">Pris högt-lågt</option>
                <option value="priceLH">Pris lågt-högt</option>
                <option value="stockHL">Lagerstatus högt-lågt</option>
                <option value="stockLH">Lagerstatus lågt-högt</option>
            </select>
            {productlist}
        </div>
    );
}

}
export default Products;
