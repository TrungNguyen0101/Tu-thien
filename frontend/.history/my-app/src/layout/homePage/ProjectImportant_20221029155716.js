import React from 'react';
import ButtonStatus from '../../components/button/ButtonStatus';

const ProjectImportant = () => {
    return (
        <div className="pb-[50px]">
            <div className="flex h-[400px] ">
                <div className="flex items-start justify-center flex-col w-[50%] h-full p-[30px] bg-[#f5f5f5]">
                    <div className="caption-box mb-[20px]">
                        <p className="caption-text text-center text-[20px] font-bold ">
                            Dự Án Quan Trọng
                        </p>
                    </div>
                    <div className="image-support relative">
                        <ButtonStatus></ButtonStatus>
                        <img
                            src="https://nld.mediacdn.vn/2017/8-chan-1-1501857270466.jpg"
                            alt=""
                            className="h-[300px] w-[600px] object-cover"
                        />
                    </div>
                </div>
                <div className=" flex i  justify-center flex-col w-[50%] h-full p-[40px] bg-[#fbfbfc]">
                    <a href="#1" className="font-semibold cursor-pointer mb-[30px]">
                        KỲ 382: CHA BỆNH, CON THƠ, LO CHẠY ĂN TỪNG BỮA, GIA ĐÌNH NGHÈO
                        LÂM CẢNH NỢ NẦN, TÚNG QUẪN
                    </a>
                    <p>
                        Gia cảnh quá nghèo nên khi được bệnh viện báo bệnh không chữa
                        được, người nhà không có điều kiện đưa chú Vũ nhập viện ở những
                        bệnh viện lớn tại Sài Gòn đành đưa chú về nhà nằm chờ chết. Từ
                        khi chú Vũ bị bệnh đến nay gia đình đã vay mượn hơn 70 triệu
                        đồng.
                    </p>
                    <a href="#1" className=" text-right text-[#1e99bf] font-semibold hover:text-red-500">Xem thêm </a>
                    <div>
                        <a href="#1">Đóng góp</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectImportant;