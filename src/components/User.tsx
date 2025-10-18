
type TUser = {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
};


function User({ value, onChange }: TUser){
    return (
        <div>User</div>
    )
}

export default User;