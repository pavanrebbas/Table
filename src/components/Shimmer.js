import { Fragment } from "react"

const Shimmer = () => {

    return (

        <Fragment>
            <div className="container mt-5 pt-5">
                <div className="row gap-2">
                    <div className="card col border-0" style={{ backgroundColor: "gray", height:"250px" }}>
                        <div className="card-body">

                        </div>
                    </div>
                    <div className="card col border-0" style={{ backgroundColor: "gray", height:"250px" }}>
                        <div className="card-body">

                        </div>
                    </div>
                    <div className="card col border-0" style={{ backgroundColor: "gray", height:"250px" }}>
                        <div className="card-body">

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default Shimmer;