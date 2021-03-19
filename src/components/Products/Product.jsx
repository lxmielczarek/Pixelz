import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ShoppingCart } from '@material-ui/icons';
import "./style.css"
const Product = ({ product, addProduct = () => { } }) => (


    <Card className="product-card">
        <CardActionArea>
            <CardMedia
                component="img"
                height="300"
                className="card-image"
                image={product.media.source}

            />
            <CardContent className="content">
                <Typography className="title" gutterBottom variant="h6" component="h5">
                    {product.name}
                </Typography>
                <Typography className="title" variant="body2" component="p">
                    {product.description.slice(3, -4)}
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions className="actions-content">
            <>
                <Typography className="price" gutterBottom variant="h5" component="h2">
                    {product.price.formatted_with_code}
                </Typography>
                <Button size="large" className="custom-button" onClick={() => { addProduct(product.id, 1); }}>
                    <ShoppingCart /> Dodaj do koszyka
                </Button>
            </>
        </CardActions>
    </Card>

);
export default Product;