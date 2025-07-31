import React, { useEffect, useState } from "react";
import { useParams } from "react-router";


const Productdetails = () => {

    const { id } = useParams();
    const [product, setproduct] = useState({});
    console.log(id)

    useEffect(() => {
        console.log('in effedct', id)
        async function fetchData() {
            const res = await fetch(`https://dummyjson.com/products/${id}`);
            const data = await res.json();

            console.log(data);
            setproduct(data);
        }

        fetchData();

        //    fetch(`https://dummyjson.com/products/${id}`)
        //         .then(res => res.json())
        //         .then(data =>{
        //             console.log(data);
        //             setproduct(data);
        //         })


    }, [id])


    return (
        <div className="container">
            <h2 className="mt-5 mb-5">{product.title}</h2>
            <div className="row">
                <div className="col-5">
                    <img width={400} src={product.thumbnail} alt={product.title} />

                </div>
                <div className="col-7">
                    <p>Description: {product.description}</p>
                    <p>Category: {product.category}</p>
                    <p>Price: {product.price}</p>
                    <p>AvailabilityStatus: {product.availabilityStatus}</p>
                    <p>SKU: {product.sku}</p>
                    <p>Rating: {product.rating}</p>
                    <p>Stock: {product.stock}</p>
                    <p>Tags: {product.tags}</p>
                    <p>Brand: {product.brand}</p>
                    <p>WarrantyInformation: {product.warrantyInformation}</p>
                    <p>ShippingInformation: {product.shippingInformation}</p>
                    <p>ReturnPolicy: {product.returnPolicy}</p>
                    <p>Barcode: {product.barcode}</p>
                    <p>QrCode: {product.qrCode}</p>
                </div>
            </div>
        </div>
    )
};

export default Productdetails;