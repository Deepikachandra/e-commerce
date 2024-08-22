import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err)
    return(
        <div>
            Oops!! Something went wrong
        </div>
    )
}

export default Error;