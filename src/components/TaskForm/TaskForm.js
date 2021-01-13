import React from 'react';
import styled from 'styled-components';
import {WhatToDo} from './WhatToDo/WhatToDo';
import {Who} from './Who/Who';
import {IsItUrgent} from './IsItUrgent/IsItUrgent'

export const TaskForm = () =>{

    const TaskForm = styled.div`
        grid-column: 2/5;
        grid-row:2;
        display:flex;
        user-select:none;
    `;
    
    return(
        <TaskForm>
            <WhatToDo/>
            <Who/>
            <IsItUrgent/>
        </TaskForm>
    );

}