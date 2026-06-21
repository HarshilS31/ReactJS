import type  { Info } from "./UserInfo"
type Info_Admin = Info & {

  isAdmin:string
}
const AdminInfo = ({userName,email,age,address,isAdmin}:Info_Admin) => {
  return (
    <div>
      <ul>
        <li>{userName}</li>
        <li>{email}</li>
        <li>{age}</li>
        <li>{JSON.stringify(address)}</li>
        <li>{isAdmin}</li>
      </ul>
    </div>
  )
}

export default AdminInfo