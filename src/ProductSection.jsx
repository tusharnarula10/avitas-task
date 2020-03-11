import React from 'react';
import ProductList from './ProductList';
import Filter from './Filter';

class ProductSection extends React.Component {
    render() {
        return (
            <div style={{ display: 'inline-flex', paddingTop:'20px' }}>
                <Filter />
                <ProductList />
            </div>
        );
    }
}

export default ProductSection;