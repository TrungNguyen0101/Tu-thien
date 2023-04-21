import React from "react";
import SidebarMenu from "../layout/homePage/SidebarMenu";
import styled from "styled-components";
const TableStyles = styled.div`
  overflow-x: auto;
  background-color: white;
  border-radius: 10px;
  font-size: 14px;
  table {
    width: 100%;
  }
  thead {
    background-color: #f7f7f8;
  }
  th,
  td {
    vertical-align: middle;
    white-space: nowrap;
  }
  th {
    padding: 20px 30px;
    font-weight: 600;
    text-align: left;
  }
  td {
    padding: 15px 30px;
  }
  tbody {
  }
  .title-post{
    display:-webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient:vertical;
    overflow:hidden;
    text-overflow:ellipsis;
    width:300px;
    max-width:300px;
    white-space:pre-wrap;
    word-break: break-word;
  }
`;
const Manage = () => {
    const user = JSON.parse(localStorage.getItem("userLogin"));
    return (
        <div className="flex">
            <SidebarMenu styled="60.5px" props={user}></SidebarMenu>
            <main>
                <div>
                    <div className="text-right pt-[20px] pr-[20px] border-b-[2px] pb-[10px]">
                        <button className="px-[15px] py-[10px] text-[20px] font-semibold rounded-[10px] text-white  bg-[#00b6f1]">
                            Đăng bài viết
                        </button>
                    </div>
                    <div className="p-[20px]">
                        <h3 className="text-[20px] font-semibold">Danh sách bài viết</h3>
                        <TableStyles>
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Bài viết</th>
                                    <th>Tác giả</th>
                                    <th>Trạng thái</th>
                                    <th>Nổi bật</th>
                                    <th>Hành động</th>
                                    <th>Kiểm duyệt</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <div className="flex items-center gap-x-3">
                                            <img
                                                src="https://nld.mediacdn.vn/2017/8-chan-1-1501857270466.jpg"
                                                alt=""
                                                className="w-[66px] h-[55px] rounded object-cover"
                                            />
                                            <div className="flex-1">
                                                <h3 className="title-post font-semibold max-w-[300px] whitespace-normal">
                                                    KỲ 382: CHA BỆNH, CON THƠ, LO CHẠY ĂN TỪNG BỮA, GIA ĐÌNH NGHÈO
                                                    LÂM CẢNH NỢ NẦN, TÚNG QUẪN
                                                </h3>
                                                <time className="text-sm text-gray-500">
                                                    01/01/2002
                                                </time>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </TableStyles>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Manage;
