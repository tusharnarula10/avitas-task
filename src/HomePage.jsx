import React from 'react';
import Header from './Header';
import ProductSection from './ProductSection';

class HomePage extends React.Component{

    render(){
        return(
            <div>
                <Header />
                <ProductSection/>
            </div>
        );
    }
}

export default HomePage;