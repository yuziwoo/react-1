import List from "../page/list.js";
import '../css/main.css';

function Main(props) {
  return (
    <>
      <h1 className="pageName">메인페이지</h1>
      <section className="product">
        <div className="button-wrap">
        <h2>등록순 정렬하기</h2>
        <h2>가나다순 정렬하기</h2>
        </div>
        <div className="product-wrap">
          {
            props.shoes.map((value, index) => {
              return <List key={index} value={value}  navigate={props.navigate}/>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Main;