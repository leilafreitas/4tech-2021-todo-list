import React,{useState} from 'react';
import styled from 'styled-components';
import {LeftOutlined,RightOutlined} from '@ant-design/icons';
import {Avatar} from 'antd';
import {whoList} from '../../../helpers/whoList';

export const Who = ({initialSelectedWho, onChangeSelectedWho}) =>{

    const [select,setSelected] = useState(initialSelectedWho);

    const FormItem = styled.div`
        display:flex;
        flex-direction:column;
        width:30%;
        padding-left: 1rem;
    `;

    const WhoLabel = styled.div`
        font-size:30px;
    `;

    const WhoSelectionArea = styled.div`
        display:flex;
        height:5rem;
        background:#ffffff;
        box-shadow:5px 5px 10px #A9C4DA;
        border-radius:5px;
    `;

    const SelectedToTheLeftOrRight = styled.div`
        width:10%;
        display:flex;
        justify-content:center;
        align-items:center;
        cursor:pointer;
    `;

    const AvatarArea = styled.div`
        width:80%;
        display:flex;
        align-items:center;
        justify-content:space-around;
        .AvatarStyle{  
            border:5px solid #5bf326;
            box-sizing:border-box;
        }
        
    `;

    const onClickLeft = () =>{
        if(select === 1){
            return setSelected(4);
        }
        setSelected(select-1);
    }

    const onClickRight= () =>{
        if(select === 4){
            return setSelected(1);
        }
        setSelected(select + 1);
      
    }

    return(
        <FormItem>
            <WhoLabel>Who?</WhoLabel>
            <WhoSelectionArea>
                <SelectedToTheLeftOrRight onClick={onClickLeft}><LeftOutlined/></SelectedToTheLeftOrRight>
                <AvatarArea>
                    {
                        whoList.map((item,key)=>{
                            return(
                                <Avatar 
                                className= {select===item.idx ? 'AvatarStyle':''}
                                style={select===item.idx ?{
                                    height:'calc(3rem + 5px)',
                                    width:'calc(3rem + 5px)',
                                    margin:'0 0.3rem',
                                    cursor:'pointer',
                                    }:
                                    {
                                    height:'3rem',
                                    width:'3rem',
                                    margin:'0 0.3rem',
                                    cursor:'pointer',
                                    }}

                                onClick={()=>{
                                    setSelected(item.idx)
                                    onChangeSelectedWho(item.idx);
                                }}
                                icon={<img src={item.image} alt={`Avatar ${item.idx}`}/>} 
                                key={key}/>
                            )
                        })
                    }
                </AvatarArea>
                <SelectedToTheLeftOrRight onClick={onClickRight}><RightOutlined/></SelectedToTheLeftOrRight>

            </WhoSelectionArea>
        </FormItem>
    );

}