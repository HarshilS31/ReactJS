export type Info ={//we have to export it in order to re-use in Other Components!
  userName:string;
  email:string;
  age:number;
  address:string[]

}
const UserInfo = ({userName,email,age,address}:Info) => {
  return (
    <>
      <ul>
        <li>{userName}</li>
        <li>{email}</li>
        <li>{age}</li>
        <li>{JSON.stringify(address)}</li>
      </ul>


    </>
   
  )
}

export default UserInfo