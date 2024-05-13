
import "./Products.css";
import ProductItem from './ProductItem';

const productData = [
  {
    "productName" : "Elma",
    "img" : "https://www.diyetkolik.com/site_media/media/customvideo_images/Yesil_elma_yag_yakar_m__Krmz_elma_m_yesil_elma_m__1_1.jpg",
    "productPrice" : "40tl",
  },
  {
    "productName" : "Armut",
    "img" : "https://static.ticimax.cloud/38693/uploads/urunresimleri/buyuk/santa-maria-armut-kilo-2d390-.jpg",
    "productPrice" : "40tl",
  },
  {
    "productName" : "Kivi",
    "img" : "https://i.lezzet.com.tr/images-xxlarge-secondary/kivinin-faydalari-nelerdir-07945fde-db2a-4091-bc17-b6ab5196e06b",
    "productPrice" : "80tl",
  },
  {
    "productName" : "Karpuz",
    "img" : "https://www.ufuktarim.com/imaj/blog/karpuz-yetistiriciligi.jpg",
    "productPrice" : "100tl",
  },
  {
    "productName" : "Muz",
    "img" : "https://static.ticimax.cloud/48857/uploads/urunresimleri/buyuk/1008825-f2c8a-.jpg",
    "productPrice" : "50tl"
  },

];

const Products = () => {
  return (
    <div className='product-wrapper'>
      <h1>Meyveler</h1>
      <div className='products'>
        {productData.map((product)=>{
          return (
            <ProductItem key={product.productName} product={product} />
          )
        })}
      </div>
    </div>
  )
}

export default Products
