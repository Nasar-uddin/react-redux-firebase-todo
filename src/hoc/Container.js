import React from 'react'

function Container(BaseComponent) {
    return (props)=>{
        return (
            <div className="container">
                <div className="row">
                    <BaseComponent {...props}/>
                </div>
            </div>
        )
    }
}

export default Container;
