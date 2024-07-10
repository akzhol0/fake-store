import { useContext, useEffect, useState } from "react";
import { contextData } from "../../context/logic";
import { useNavigate } from "react-router";
import MyDefaultButton from "../UI/my-buttons/MyDefaultButton";
import Cookies from "universal-cookie";

function UserProfile() {
  const { token, setToken } = useContext(contextData);
  const [userInfo, setUserInfo] = useState<any>([]);
  const navigate = useNavigate();
  const cookies = new Cookies()

  const getUserInfo = () => {
    if (token === undefined) {
      navigate('/')
      return;
    }

    const res = localStorage.getItem('user');
    const user = res ? JSON.parse(res) : null;
    setUserInfo(user);
  }

  useEffect(() => {
    getUserInfo();
  }, [])

  return (
    <div className="w-full flex justify-center">
      <div className="w-[95%] md:w-[70%] h-[350px] flex flex-col justify-center">
        <span className="flex gap-2 text-[20px]">
          <p>User email:</p>
          <p className="text-red-400 font-[600]">{userInfo?.email}</p>
        </span>
        <p>Thats all i have...</p>
        <span onClick={() => {
          localStorage.removeItem('user');
          cookies.remove('auth-token');
          navigate('/');
          setToken(undefined)
        }}>
          <MyDefaultButton className="w-[350px] mt-4">Exit</MyDefaultButton>
        </span>
      </div>
    </div>
  );
}

export default UserProfile;
