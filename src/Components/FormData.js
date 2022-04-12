import React from 'react';

function FormData (props) {
    return(
        <>
        <div>
                {props.formdata.map((value,index) =>
                {
                    return(
                        <div key={index}>
                            <span>Name:{value.name}|</span>
                            <span>Age:{value.age}|</span>
                            <span>Salary:{value.salary}</span>


                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default  FormData