import React, { ChangeEvent, useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { PhoneCard, Pagination } from "../../components";
import phones from "../../constants/phones";
import { PhoneInfo } from "../../../types";
import Link from "next/link";

const Checkout = () => {
  const [currentItems, setCurrentItems] = useState<PhoneInfo[]>(null!);
  const [search, setSearch] = useState<PhoneInfo[]>(null!);
  const [phonesList, setPhonesList] = useState<PhoneInfo[] | null>(null);

  // currentItems could be empty, that's why we don't set default value as current items to phoneList
  // as soon as currentItems change, set to phoneList
  useEffect(() => {
    setPhonesList(currentItems);
  }, [currentItems]);

  const handleChange = (e: ChangeEvent): void => {
    const el = e.target as HTMLInputElement;
    let value = el.value.toLowerCase();
    const searched = currentItems.filter(
      (current) => current.name.toLowerCase().indexOf(value) > -1
    );
    setSearch(searched);
  };

  useEffect(() => {
    if (search) {
      setPhonesList(search);
    } else {
      setPhonesList(currentItems);
    }
  }, [search]);

  return (
    <section>
      <Link
        href={"/checkout"}
        className="text-primary text-xs cursor-pointer hover:underline"
      >
        Оформить заказ
      </Link>
      <div className="mt-[30px]">
        <h1 className="text-blue text-[22px] font-semibold">Оформить заказ</h1>
        <div className="mt-[20px] w-full h-[50px] relative">
          <input
            type="text"
            placeholder="Поиск по названию товара"
            className="h-full pl-[20px] text-blue placeholder:text-[#BBC2D0] w-full rounded-full outline-none pr-[120px]"
            onChange={handleChange}
          />
          <button className="bg-primary text-white absolute right-0 top-0 h-full px-[38px] rounded-r-full">
            <BiSearch className="text-[28px]" />
          </button>
        </div>
        <div className="mt-[30px]">
          <h1 className="font-semibold mb-[20px] text-[#262728]">
            Все товары {phones?.length}
          </h1>
          <div className="flex flex-wrap">
            {phonesList?.map((phone: PhoneInfo) => (
              <Link
                href={`/checkout/${phone.id}`}
                key={phone.id!}
                className="mb-[20px]"
              >
                <PhoneCard
                  imgUrl={phone.imgUrl}
                  name={phone.name}
                  price={phone.price}
                  fromPrice={phone.fromPrice}
                  times={phone.times}
                  present={phone.present}
                  change={phone.change}
                  discount={phone.discount}
                />
              </Link>
            ))}
          </div>
        </div>
        <div>
          <Pagination itemsPerPage={10} setCurrentItems={setCurrentItems} />
        </div>
      </div>
    </section>
  );
};

export default Checkout;
