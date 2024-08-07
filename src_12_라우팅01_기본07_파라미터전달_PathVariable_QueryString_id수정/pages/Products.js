import { Link } from "react-router-dom";

function Products(){

        const arr=[
                    {id:"p1", title:"Product1"},
                    {id:"p2", title:"Product2"},
                    {id:"p3", title:"Product3"}
        ];

    return(
        <>
            <h1>GoldenCarrot Products</h1>
            <h3>01 PathVariable 방식</h3>
            <ul>
            {
     
                arr.map((row,idx)=>
                        <li key={idx}>
                            <Link to={`/products/${row.id}`}>{row.title}</Link>
                        </li>
                        )
            }
            </ul>

            <h3>02 QueryString 방식</h3>
            <ul>
            {
     
                arr.map((row,idx)=>
                        <li key={idx}>
                            <Link to={`/products2?id=${row.id}&pw=12`}>{row.title}</Link>
                        </li>
                        )
            }
            </ul>
            <h6><a href="/">Back</a></h6>
        </>
    )
}

export default Products;