function List(props) {

  return (
    <div className="list" onClick={() => {props.navigate(`detail/${props.value.id}`)}}>
      <h1 className={`title`}>{props.value.title}</h1>
      <p className="content">{props.value.content}</p>
      <p className="price">{props.value.price}₩</p>
    </div>
  )
}

export default List;