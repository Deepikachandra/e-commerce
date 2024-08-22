import { useRouteError } from "react-router-dom";

const NoMatch =  () => {
    const err = useRouteError();
    console.log(err)
    return(
        <div>
            NoMatch page
        </div>
    )
}

export default NoMatch;