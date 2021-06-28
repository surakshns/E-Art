import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loading = ()=>{
    return(
        <div style={{flex:1,justifyContent:'center',alignItems:'center',display:'flex'}}>
        <Spinner
        animation={'border'}
        size={'100px'}
        >
        </Spinner>
        </div>
    )
}
export default Loading