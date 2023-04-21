import React from 'react';
import styled from "styled-components";
const TextClampStyle = styled.div`
  flex: 1 1;
  margin-left: 10px;

  h3 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    max-width: 100%;
    white-space: pre-wrap;
    word-break: break-word;
  }
`;
const ItemRelate = ({ item }) => {
    console.log("🚀 ~ file: ItemRelate.js ~ line 20 ~ ItemRelate ~ item", item)
    return (
        <div>
            <div className="flex flex-row items-start pb-[15px]">
                <div className="w-[100px] h-[70px] object-cover border-[2px] p-[3px]">
                    <img
                        src={item.image}
                        alt=""
                        className="w-full h-full"
                    />
                </div>
                <TextClampStyle>
                    <h3 className="text-[14px] font-semibold">
                        <a href={`/${item.id}`}>{item.title}</a>
                    </h3>
                    <span className="text-[14px]">Th8 18, 2022</span>
                </TextClampStyle>
            </div>

        </div>
    );
};

export default ItemRelate;