import React from 'react';

const Cart = (props) => {
    var courseCount = 0;
    var cost = 0;
    const courseArray = props.cartInfo;
    courseArray.map(element => {
        courseCount = courseCount+1;
        cost = cost+element.price;
        
    })
        var vat = cost*0.5;
        var totalCost = cost+vat;
        var discount = cost*0.3;
        var grandTotal = totalCost-discount;
    return (
        <div>
            <h3>Order summery</h3>
            <h4>Price:{cost}</h4>
            <h4>Vat:{vat}</h4>
            <h4>Total cost:{totalCost}</h4>
            <h4>Discount:{discount}</h4>
            <h4>Grand total:{grandTotal}</h4>
            <button><h3>Proceede to pay</h3></button>

        </div>
    );
};

export default Cart;