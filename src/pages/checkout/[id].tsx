import Link from "next/link";
import { useRouter } from "next/router";
import { MdKeyboardArrowRight } from "react-icons/md";
import { GiPresent } from "react-icons/gi";
import { FaRecycle } from "react-icons/fa";
import { FiPercent } from "react-icons/fi";
import { PhoneInfo } from "../../../types";
import phones from "../../constants/phones";
import { HiOutlineShoppingCart } from "react-icons/hi";
import Carousel from "../../components/Carousel";
import { useState } from "react";

const SinglePhone = () => {
  const [showInfo, setShowInfo] = useState<Boolean>(false);
  const [selected, setSelected] = useState<Number>(3);

  const router = useRouter();
  const { id } = router.query;

  const phoneData: PhoneInfo[] = phones.filter(
    (phone) => phone.id === Number(id)
  );

  return (
    <>
      {phoneData?.map((phone: PhoneInfo) => (
        <section key={phone.id}>
          <p className="flex items-center space-x-1 text-xs">
            <Link href={"/checkout"} className="text-gray hover:underline">
              Оформить заказ
            </Link>
            <span>
              <MdKeyboardArrowRight />
            </span>
            <Link
              href={`/checkout/${phone.id}`}
              className="text-primary hover:underline"
            >
              {phone.name}
            </Link>
          </p>

          <div className="bg-white mt-8 rounded-2xl w-full p-8 relative">
            <div className="bg-[#FF647C] w-[60px] h-[60px] rounded-full flex justify-center items-center absolute -top-7 right-4">
              <HiOutlineShoppingCart className="text-white text-2xl" />
            </div>
            <h1 className="text-blue text-[22px] font-semibold mb-8">
              {phone.name}
            </h1>
            <div className="flex">
              <div className="w-[480px] h-[380px] relative rounded-2xl bg-[#F3F5F8] p-5 flex justify-center items-center">
                <div className="absolute top-5 left-5">
                  {phone.present && (
                    <span className="phone__news-box bg-[#a2aedb] mb-[6px]">
                      <GiPresent className="text-[#3855B3] text-2xl" />
                    </span>
                  )}
                  {phone.change && (
                    <span className="phone__news-box bg-purpleLight mb-[6px]">
                      <FaRecycle className="text-purple text-[1.2rem]" />
                    </span>
                  )}
                  {phone.discount && (
                    <span className="phone__news-box bg-orangeLight mb-[6px]">
                      <FiPercent className="text-orange text-[1.2rem]" />
                    </span>
                  )}
                </div>
                <div className="max-w-[198px] min-w-[178px]">
                  <Carousel>
                    {phone.imgUrl.map((img) => (
                      <div key={phone.id}>
                        <img
                          src={img}
                          alt="img"
                          className="w-full h-[268px] object-contain"
                        />
                      </div>
                    ))}
                  </Carousel>
                </div>
              </div>
              <div className="ml-[20px] mr-[30px] flex-grow">
                <div className="pb-5 border-b-[1px] border-[#F7F7F7] w-full">
                  <h4 className="text-gray font-light">Цена телефона</h4>
                  <span className="mt-2 block font-semibold">
                    {phone.price} сум
                  </span>
                </div>
                <div className="mt-5">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-gray font-light">
                        Общая цена (с наценкой)
                      </h4>
                      <span className="block mt-2 font-semibold">
                        {phone.fromPrice}
                      </span>
                    </div>
                    <p className="text-gray">
                      <span className="px-2 py-1 mr-2 bg-[#FF647C] text-white rounded-[2px]">
                        2 433 333 сум
                      </span>
                      x3
                    </p>
                  </div>
                  <div className="pb-6 mt-[17px] border-b-[1px] border-[#F7F7F7]">
                    <div className="flex mb-[9px]">
                      {[3, 6, 12, 24].map((num, i) => (
                        <div
                          className="w-[25%] xl:w-[120px] h-[38px] relative check-months"
                          key={num}
                        >
                          <input
                            type="radio"
                            id={`${num}`}
                            name="month"
                            value={num}
                            className="hidden"
                            onChange={(e) => setSelected(+e.target.value)}
                            checked={selected === num}
                          />
                          <label
                            htmlFor={`${num}`}
                            className="absolute cursor-pointer border-2 border-primary top-0 w-full h-full flex items-center justify-center text-primary left-0 right-0"
                          >
                            {num} мес
                          </label>
                        </div>
                      ))}
                    </div>
                    <p className="text-center">
                      Наценка: <span className="font-semibold">5%</span>
                    </p>
                  </div>

                  <div className="mt-5 overflow-auto">
                    <h4 className="text-gray font-light">
                      Общие характеристики
                    </h4>
                    <p className="text-[#262728] mt-2 font-light">
                      Тип: моноблок (классический) <br />
                      Стандарт: 2G, 3G, 4G (LTE), 5G <br />
                      Операционная система: iOS 14
                    </p>
                    {showInfo && (
                      <p className="text-[#262728] font-light">
                        Тип: моноблок (классический) <br />
                        Стандарт: 2G, 3G, 4G (LTE), 5G <br />
                        Операционная система: iOS 14
                      </p>
                    )}
                    <button
                      className="mt-5 text-primary hover:underline w-full flex items-center justify-between"
                      onClick={() => setShowInfo((prev) => !prev)}
                    >
                      <p>Показать все</p>
                      <MdKeyboardArrowRight className="text-2xl" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-7">
              <h1 className="text-primary">Акции</h1>
              <div className="flex items-center justify-between border-b-[1px] pb-5 border-[#BBC2D0]">
                <div className="flex items-start space-x-2 mt-5">
                  <div className="phone__news-box bg-purpleLight mb-[6px]">
                    <FaRecycle className="text-purple text-[1.2rem]" />
                  </div>
                  <div>
                    <h4>Обменяй свой старый айфон и получи скидку на новый</h4>
                    <p className="text-gray mt-[10px]">- 400 000 сум</p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  className="accent-primary"
                  defaultChecked={phone.change}
                />
              </div>
              <div className="flex items-center justify-between border-b-[1px] pb-5 border-[#BBC2D0]">
                <div className="flex items-start space-x-2 mt-5">
                  <div className="phone__news-box bg-[#A2AEDB] mb-[6px]">
                    <GiPresent className="text-[#3855B3] text-[1.2rem]" />
                  </div>
                  <div>
                    <h4>Наушники в подарок</h4>
                    <p className="text-gray mt-[10px]">Apple EarPods</p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  className="accent-primary"
                  defaultChecked={phone.present}
                />
              </div>
              <div className="flex items-center justify-between border-b-[1px] pb-5 border-[#BBC2D0]">
                <div className="flex items-start space-x-2 mt-5">
                  <div className="phone__news-box bg-orangeLight mb-[6px]">
                    <FiPercent className="text-orange text-[1.2rem]" />
                  </div>
                  <div>
                    <h4>Скидка 20% на смартфоны</h4>
                    <p className="text-gray mt-[10px]">- 10 000 сум</p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  className="accent-primary"
                  defaultChecked={phone.discount}
                />
              </div>
              <div className="flex items-center justify-between border-b-[1px] pb-5 border-[#BBC2D0]">
                <div className="flex items-start space-x-2 mt-5">
                  <div className="phone__news-box bg-[#AAD9AC] mb-[6px]">
                    <FiPercent className="text-[#4CAF50] text-[1.2rem]" />
                  </div>
                  <div>
                    <h4>Скидка на айфоны</h4>
                    <p className="text-[gray] mt-[10px]">- 10 000 сум</p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  className="accent-primary select-none"
                  defaultChecked={phone.discount}
                />
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default SinglePhone;
