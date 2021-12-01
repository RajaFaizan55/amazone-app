
import {StarFill ,Star} from 'react-bootstrap-icons'

export const Card=(props)=>{

    return <>
        <div className={"   bg-warning border border-warning m-3" } style={{width: "20%" }}>
             <div className={"  bg-info "}>
                 <img src={props.image} className={"w-100 h-100"}/>
             </div>
            <div className={" mt-3 m-3"}>
                <h4>{props.name}</h4>
                <StarFill/><StarFill/><StarFill/><Star/><Star/>
                <div>
                    {props.reviews} Reiews
                </div>

                <h4>${props.price}</h4>
                <p className={"d-flex flex-row-reverse"}>{props.category}</p>
            </div>
        </div>
    </>
}