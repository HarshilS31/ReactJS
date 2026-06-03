const C1 = ({count,HandleClick}) => {
  return (
    <>
        <div>{count}</div>
        <button onClick={HandleClick}>+</button>
    </>

  )
}

export default C1