import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Table from "./Table";
import Shimmer from "./Shimmer";


const Body = () => {

    // const { Data } = props


    const [data, SetData] = useState([]);

    // ALL PRODUCTS
    const [Allfilter, setAllFilter] = useState(data)

    // MENS CLOTHING
    const [mens, SetMens] = useState([]);

    // WOMES CLOTHING
    const [womens, setwomes] = useState([]);

    // JEWELERY
    const [jewelery, setjewelery] = useState([]);

    // ELECTRONICS
    const [electronics, setelectronics] = useState([])

    // PRICE LOW TO HIGHT
    const [lowPrice, SetLowPrice] = useState([]);



    // USEEFFCET FOR API CALL
    useEffect(() => {
        productdata();
    }, [])


    /*    // THIS METHOD IS THEN AND CATCH FOR (AXIOS)
           const productdata = async () => {
       
               await axios.get('https://fakestoreapi.com/products').then(
                   Response => {
                       console.log(Response.data)
                       setfetchdata(Response.data)
                   }
               ).catch(err => { console.error(err + " something went wrong ") })
           };
        */


    const productdata = async () => {
        try {
            const ApiData = await axios.get('https://fakestoreapi.com/products')
            console.log(ApiData.data)
            SetData(ApiData.data)
            SetMens(ApiData.data)
            setwomes(ApiData.data)
            setjewelery(ApiData.data)
            setelectronics(ApiData.data)
            setAllFilter(ApiData.data)

        } catch (err) {
            console.error(err + ' "somthing went wrong " ')
            alert(err + " ' somting went wrong ' ")
        }
    };


    /*     const AssendingSort = () => {
    
            let AssendingOrder = [...data]
            if (AssendingOrder.length > 0) {
                let result = AssendingOrder.sort((a, b) => a.title.localeCompare(b.title))
                SetData(result)
            }
        }; */



    //Conditional Rendering Shimmer Component
    if (data.length == 0) {
        return (
            <Shimmer></Shimmer>
        )
    };


    return (

        <Fragment>

            <div className="container-fluid ">
                <div className="row">
                    <div className="col-lg-2  col-12  my-5 text-center" style={{ backgroundColor: "ghostwhite" }}>
                        <h5 className="py-2">Apply Filters:</h5>
                        <button className="btn btn-outline-danger my-2" onClick={() => {
                            let All = Allfilter.filter((all) => all.data = data)
                            console.log(All)
                            SetData(All)
                        }}>All</button> <br />
                        <button className="btn btn-outline-danger my-2" onClick={() => {
                            let mensClothing = mens.filter((men) => men.category == "men's clothing")
                            console.log(mensClothing)
                            SetData(mensClothing)
                        }} >men's clothing</button>
                        <button className="btn btn-outline-success my-2" onClick={() => {
                            let womensClothing = womens.filter((men) => men.category == "women's clothing")
                            SetData(womensClothing)
                        }} >women's clothing</button>
                        <button className="btn btn-outline-primary my-2" onClick={() => {
                            let jewell = jewelery.filter((men) => men.category == "jewelery")
                            SetData(jewell)
                        }} >jewelery</button> <br />
                        <button className="btn btn-outline-secondary my-2" onClick={() => {
                            let electric = electronics.filter((men) => men.category == "electronics")
                            SetData(electric)
                        }} >Electronics</button>
                    </div>

                    <div className="col-lg-10 col-12">
                        {
                            <Table details={data}></Table>
                        }
                    </div>
                </div>
            </div>
        </Fragment>

    )
};

export default Body;
