import List from "../page/list.js";

function Main(props) {
  return (
    <>
      <h1 className="pageName">메인페이지</h1>
      <section className="product">
        <div className="product-wrap">
          {
            props.shoes.map((value, index) => {
              return <List key={index} value={value} />
            })
          }
        </div>
      </section>
    </>
  )
}

export default Main;