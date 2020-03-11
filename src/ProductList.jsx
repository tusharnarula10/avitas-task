import React from 'react';
import { Paper, Card, CardHeader, CardContent, CardMedia, Typography, Grid } from '@material-ui/core';

class ProductList extends React.Component {

    constructor(props){
        super(props)
        this.state={
            searchResult:[]
        }
    }
    importAll = r => {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    images = this.importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

    componentDidMount() {
        fetch('https://6f6a24cc-a4b4-407d-b34b-4217d3a28714.mock.pstmn.io/search')
        .then(res =>{ 
            debugger;
            res.json()})
        .then((data) => {
          this.setState({ searchResult: data })
        })
        .catch(console.log)
      }

    results = [
        {
            'brand': 'HRX',
            'description': 'Men Yellow Printed Round Neck T-Shirt',
            'image': 'hrx.jpg',
            'price': '599'
        },
        {
            'brand': 'h&m',
            'description': 'Men Olive Green Solid Cotton T-shirt Regular Fit',
            'image': 'h&m.jpg',
            'price': '399'
        },
        {
            'brand': 'DILLINGER',
            'description': 'Men Navy Blue Colourblocked Round Neck T-shirt',
            'image': 'dillinger.jpg',
            'price': '359'
        },
        {
            'brand': 'h&m',
            'description': 'Men Grey Melange Solid Cotton T-shirt Regular Fit',
            'image': 'h&m.jpg',
            'price': '399'
        },
        {
            'brand': 'Difference of Opinion',
            'description': 'Men Sea Green Solid Round Neck T-shirt',
            'image': 'hugo.jpg',
            'price': '437'
        },
        {
            'brand': 'Superdry',
            'description': 'Men Navy Blue Solid Round Neck T-shirt',
            'image': 'superdry.jpg',
            'price': '1800'
        },
        {
            'brand': 'Roadster',
            'description': 'Men Maroon & Navy Blue Striped Round Neck T-shirt',
            'image': 'hrx.jpg',
            'price': '349'
        },
        {
            'brand': 'DILLINGER',
            'description': 'Men Mustard Yellow Solid Round Neck T-shirt',
            'image': 'dillinger.jpg',
            'price': '419'
        },
        {
            'brand': 'Justice League',
            'description': 'Men Blue Printed Round Neck T-shirt',
            'image': 'superdry.jpg',
            'price': '799'
        },
        {
            'brand': 'Superdry',
            'description': 'Men White & Red Printed Round Neck T-shirt',
            'image': 'hrx.jpg',
            'price': '2519'
        },
        {
            'brand': 'Calvin Klein Jeans',
            'description': 'Men White Printed Round Neck T-shirt',
            'image': 'hugo.jpg',
            'price': '1724'
        }
    ]

    render() {
        return (
            <Grid style={{ display: 'flex', flexWrap: 'wrap' }} spacing={3}>
                {
                    this.results.map(product => {
                       return <Grid item xs={6} sm={3}>
                            <Card style={{ padding: '20px', width: '200px' }}>
                                <CardMedia
                                    style={{ height: '200px' }}
                                    image={this.images[`${product.image}`]}
                                />
                                <CardContent>
                                    <Typography variant='h3' style={{ fontSize: '16px' }}>{product.brand}</Typography>
                                    <Typography variant='h4' style={{ fontSize: '14px' }}>{product.description}</Typography>
                                    <Typography variant='h4' style={{ fontSize: '14px', fontWeight: '700' }}>Rs.{product.price}`</Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                    })
                }
            </Grid>
        );
    }
}

export default ProductList;


