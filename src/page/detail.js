import {useParams} from "react-router-dom";

function Detail(props) {

    let {id} = useParams();
    let shoe = props.shoes.filter(v => v.id == id)[0];

    return(
        <>
        <h1 className="pageName">상품 상세페이지</h1>
        <h1 className="id">id : {shoe.id}</h1>
        <h1 className="title">title : {shoe.title}</h1>
        <h1 className="content">content : {shoe.content}</h1>
        <h1 className="price">price : {shoe.price}</h1>
        </>
    )
}

export default Detail;