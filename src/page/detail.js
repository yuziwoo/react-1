import {useParams} from "react-router-dom";
import '../css/Detail.module.css';
import '../css/Detail.css';
import {useState, useEffect} from "react";


function Detail(props) {
    let [valuex, setValue1] = useState("숫자만 입력하세요.");

    // useEffect(() => {
    //     console.log("Mount, Update 시 실행됨");
    // })
    // useEffect(() => {
    //     console.log("Mount 시 실행됨");
    // },[])
    // useEffect(() => {
    //     console.log("Switch state가 Update되면 실행됨");
    // },[switchs])
    // useEffect(() => {
    //     let a = 0;
    //     console.log(`mount update a : ${a}`);
    //     return () => {
    //         console.log(`unmount a : ${a}`);
    //     }
    // },[switchs])

    let {id} = useParams();
    let shoe = props.shoes.filter(v => v.id == id)[0];

    return(
        <>
        <input type="text" placeholder={valuex} onInput={(e) => {
            if (isNaN(e.target.value)) {
                alert("숫자만 입력하라구!");
                e.target.value = "";
            } else {
                setValue1(e.target.value)
            }
        }}></input>
        <h1 className="pageName">상품 상세페이지</h1>
        <h1 className="id">id : {shoe.id}</h1>
        <h1 className="title">title : {shoe.title}</h1>
        <h1 className="content">content : {shoe.content}</h1>
        <h1 className="price">price : {shoe.price}</h1>
        </>
    )
}

export default Detail;