import React from "react";

const CardVertical = ({ blog }) => {
  return (
    <React.Fragment>
      <div className="flex flex-col items-center border-b-[1px] border-gray-300 py-2 cursor-pointer mb-5">
        <div className="section-text-primary card-cate">Post Formats</div>
        <h1 className="font-lora-serif text-[24px] text-[#444444] mt-5 mb-3 italic">
          5cm/s: Vận tốc cánh hoa anh đào rơi.
        </h1>
        <p className="text-gray-700 font-lora-serif text-[14px] mb-3">
          Posted on <span>12/31/2021</span> by <span>Khang Duy</span>
        </p>
        <div className="px-5">
          <img
            src="https://res.cloudinary.com/dr5ul6iqy/image/upload/v1640926579/mpmp81pqocrmfzladq1c.jpg"
            className="opacity-90 hover:opacity-100 duration-150"
            height={327}
            width={"auto"}
          />
        </div>
        <p className="mt-4 font-lora-serif text-[#696969] text-[16px] leading-6 ">
          5 Centimet Trên Giây là câu chuyện về Tono Takaki và Shinohara Akari.
          Họ biết nhau từ thuở còn học tiểu học, thân thiết như hình với bóng.
          Giống những đứa trẻ con vô lo vô nghĩ, họ kể cho nhau nghe mọi chuyện
          từ chân trời dưới bể. Dường như không có...
        </p>
        <span className="card-button mb-5">Read more</span>
      </div>
    </React.Fragment>
  );
};

export default CardVertical;
