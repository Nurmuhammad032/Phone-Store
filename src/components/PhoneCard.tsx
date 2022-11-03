import { Phone } from "../../types";

interface PhoneProps extends Phone {
}

const PhoneCard = ({
  imgUrl,
  name,
  price,
  fromPrice,
  times,
}: PhoneProps) => {
  function truncateString(str: string, num: number): string {
    return str.length > num ? str.slice(0, num) + "..." : str;
  }

  return (
    <div
      className="w-[192px] mr-[20px] h-[285px] lg:w-[232px] lg:h-[325px] rounded-[10px] p-[12px] bg-white"
      style={{
        boxShadow: "0px 10px 30px rgba(138, 149, 158, 0.1)",
      }}
    >
      <div className="bg-[#F7F7F7] rounded-[6px] relative flex items-center justify-center w-full h-[168px] lg:h-[208px]">
        <img
          src={imgUrl}
          alt="phone"
          className="min-w-[64px] max-w-[107px] h-[142px]"
        />
      </div>
      <div className="mt-[6px]">
        <h1 className="text-[#262728] text-[15px] font-[300]">
          {truncateString(name, 21)}
        </h1>
        <p className="my-[6px] text-[#262728] font-[500]">{price} сум</p>
        <h4>
          <span className="rounded-sm text-white bg-redLight font-[600] px-[6px] py-[2px]">
            от {fromPrice}
          </span>
          <span className="text-gray text-[11px] ml-[6px]">x{times}</span>
        </h4>
      </div>
    </div>
  );
};

export default PhoneCard;
