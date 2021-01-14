import React,{useState} from 'react';
import styled from 'styled-components';
import uniqid from 'uniqid';

export const IsItUrgent = ({initialUrgency, onChangePriority}) =>{

    const defaultlUrgencyScale=[
        {
            urgency:'low',
            color:'#71a1ff',
            selected:false
        },
        {
            urgency:'avarage',
            color:'#f8Bd26',
            selected:false
        },        
        {
            urgency:'high',
            color:'#ff7171',
            selected:false
        },

    ]
    
    const initialUrgencyScale = defaultlUrgencyScale.map(item => {
        if (item.urgency === initialUrgency.urgency) {
            return { ...item, selected: true }
        }

        return item
    })

    const [urgencyScale, setUrgencyScale] = useState(initialUrgencyScale)

    const FormItem = styled.div`
        display:flex;
        flex-direction:column;
        width:25%;
        padding-left:1rem;
    `;

    const IsItUrgentLabel = styled.div`
        font-size:30px;
    `;

    const IsItUrgentSelectionArea = styled.div`
        display:flex;
        justify-content:space-around;
        align-items:center;
        height:5rem;
        background:#ffffff;
        box-shadow: 5px 5px 10px #a9c4d4;
        border-radius: 5px;
    `;

    const onClickSetUrgency = (urgency) => {
        const newUrgencyScale = urgencyScale.map(item=>{       
            if(item.urgency === urgency){
                return {...item,selected:true}

            }
            return {...item,selected:false}      
        })
        setUrgencyScale(newUrgencyScale); 
        onChangePriority(newUrgencyScale.find(item => item.selected === true)) ;   
    }

    const generateUrgencyOptions = () => {

        return urgencyScale.map((item)=> {
            if(item.selected){

                return <div
                    key={uniqid()}
                    style={{
                        backgroundColor:item.color,
                        width:'calc(2.5rem + 5px)',
                        height:'calc(2.5rem + 5px)',
                        border:'5px solid #5bf326',
                        borderRadius:'3px',
                        cursor:'pointer'

                    }}
                />
            }

            return <div
                    key={uniqid()}  
                    style={{
                        backgroundColor:item.color,
                        width:'2.5rem',
                        height:'2.5rem',
                        cursor:'pointer'

                    }}
                    onClick={()=>onClickSetUrgency(item.urgency)}
                />
        })
    }
    return(
        <FormItem>
            <IsItUrgentLabel>Is It Urgent?</IsItUrgentLabel>
            <IsItUrgentSelectionArea>{generateUrgencyOptions()}</IsItUrgentSelectionArea>
        </FormItem>
    );
}