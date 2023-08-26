import ProductItem from './ProductItem';
import classes from './Products.module.css';
const DummyProducts=[
  {id:'p1',price:6,title:'Myfirst book',description:'the first book xdbshj'},
  {id:'p2',price:5,title:'MySecond book',description:'the seconf bookj forecxe'}
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DummyProducts.map((product)=>(
      <ProductItem
      key={product.id}
      title={product.title}
      price={product.price}
      description={product.description}
      id={product.id}
    />
        ))}
        
      </ul>
    </section>
  );
};

export default Products;
