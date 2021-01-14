import React from 'react';
import styled from 'styled-components';
import {CheckOutlined} from '@ant-design/icons';
import { Spin } from 'antd';


export const Save = ({loading,saveTask}) =>{

    const FormItem = styled.div`
        display:flex;
        flex-direction:column;
        width:10%;
        padding-left:1rem;
        font-size:30px;
    `;

    const SaveLabel = styled.div`
        
    `;

    const SaveButton = styled.div`
        height:5rem;
        background-color:rgba(61,188,147,0.51);
        box-shadow: 5px 5px 10px #A9C4D4;
        border-radius:5px;
        cursor: pointer;
        display:flex;
        justify-content:center;
        align-items:center;
        
    `;

    return(
        <FormItem>
            <SaveLabel>Save?</SaveLabel>
            <Spin spinning={loading}>
                <SaveButton onClick={saveTask}><CheckOutlined style={{color:'#ffffff'}}/></SaveButton>            </Spin>
        </FormItem>
    );

}