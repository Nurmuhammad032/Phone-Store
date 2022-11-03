import { BiSearch } from "react-icons/bi";
import { PhoneCard, Pagination } from "../components";
import phones from "../constants/phones";
import { Phone } from "../../types";

const Checkout = () => {
  return (
    <section>
      <p className="text-primary text-xs">Оформить заказ</p>
      <div className="mt-[30px]">
        <h1 className="text-blue text-[22px] font-[600]">Оформить заказ</h1>
        <div className="mt-[20px] w-full h-[50px] relative">
          <input
            type="text"
            placeholder="Поиск по названию товара"
            className="h-full pl-[20px] text-blue placeholder:text-[#BBC2D0] w-full rounded-full outline-none pr-[120px]"
          />
          <button className="bg-primary text-white absolute right-0 top-0 h-full px-[38px] rounded-r-full">
            <BiSearch className="text-[28px]" />
          </button>
        </div>
        <div className="mt-[30px]">
          <h1 className="mb-[20px] font-[600] text-[#262728]">
            Все товары (121)
          </h1>
          <div className="flex">
            {phones.map((phone: Phone) => (
              <div key={phone.id!}> 
                <PhoneCard
                  imgUrl={phone.imgUrl}
                  name={phone.name}
                  price={phone.price}
                  fromPrice={phone.fromPrice}
                  times={phone.times}
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <Pagination itemsPerPage={3} />
        </div>
      </div>
    </section>
  );
};

export default Checkout;
