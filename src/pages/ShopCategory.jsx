import { useContext } from "react";
import "./CSS/ShopCategory/shopCategory.css";
import { ShopContext } from '../Context/ShopContext';
import { RiArrowDropDownLine } from "react-icons/ri";
import Item from '../Components/Item/Item'
import { GiPlateClaw } from "react-icons/gi";

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className="shop-category">
      <div className="banner">
        <p>50%
        تخفیف
        </p>
        <GiPlateClaw className="icon-banner" />
      </div>
      <div className="shopcategory-indexsort">
        <p>
          <span> 1-12</span>از36  محصولات
        </p>
        <div className="shopcategory-sort">
          <p>مرتب سازی براساس</p><RiArrowDropDownLine className="icon" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item,i)=>{
          if (props.category===item.category) {
            return <Item key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />
          }
          else{
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        بازدید بیشتر
      </div>
    </div>
  )
};

export default ShopCategory;
