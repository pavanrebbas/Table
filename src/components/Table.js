import { Fragment } from "react";
import { useState } from "react";

const Table = (props) => {
    const { details } = props

    // DYNAMIC  SEARCH FILTERING 
    const [search, setSearch] = useState("")

    return (
        <Fragment>
            <div className="container py-4">
                <div className="row">
                    <div className="col-12">
                        <input type="search" placeholder="search for ....." value={search} onChange={(event) => {
                            setSearch(event.target.value)
                        }} />

                    </div>
                </div>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Title</th>
                        <th>category</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        details.filter((s) => (
                            s.title.toLowerCase().includes((search)) || s.category.toLowerCase().includes((search))
                        )).map((item) => (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.category}</td>
                                <td>{item.price}</td>
                                <td>
                                    <img src={item.image} width={"40px"}></img>
                                </td>
                                <td>{item.rating.rate}</td>

                            </tr>
                        ))
                    }
                </tbody>
            </table>



        </Fragment>

    )
};

export default Table;