import {Search} from "react-bootstrap-icons";


export const NavBar=()=>{
    return <>

        <div className={""}>
            <a href={"#"} className={"text-decoration-none"}><h3>amazone</h3></a>
        </div>
        <div >
            <input type="text"  placeholder="Search" className={"p-1 rounded-left"} />
            <button type="button" className="btn btn-outline-warning  " style={{marginBottom:"4px"}}><Search/></button>

        </div>

        <div className={" "}>
            <ul className={"text-white list-unstyled d-inline d-flex m-3"}>
                <li style={{marginRight : 20}}>cart</li>
                <li className={""}>sign in</li>
            </ul>
        </div>
    </>
}