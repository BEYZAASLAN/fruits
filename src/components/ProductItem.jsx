import ProductInfo from "../ProductInfo";
import "./ProductItem.css"
// eslint-disable-next-line react/prop-types
const ProductItem = ({product}) => {
    // eslint-disable-next-line react/prop-types
    const {productName,img,productPrice}=product;
  return (
    <div className="wrapper">
        <div className="product-item">
            <img src={img} alt="" />
        </div>
        <div className="product-info">
            <h2>{productName}</h2>
            <span>Fiyat: {productPrice}</span>
        </div>
        <ProductInfo/>
    </div>
  )
}
export default ProductItem
