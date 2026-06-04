const UsingProps = () => {//Parent component

  return (
    <User name="abc" age={19} subjects={["DSA","Mern Stack"]}/>

  )
}
const User = ({name,age,subjects}) =>{//Child Component
    return (
        <>
        <h1>Name:{name}</h1>
        <h2>age:{age}</h2>
        <h3>Subjects:</h3>
        {subjects.map(p=>(
          <ul key={p}>
            <li>{p}</li>
             
          </ul>

        ))}

        </>
    )
}

export default UsingProps