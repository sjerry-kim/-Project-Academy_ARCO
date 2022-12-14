import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import MyDonation from "../components/MyDonation";
import MyProfile from "../components/MyProfile";
import Questions from "../components/Questions";
import Home from "./Home";
import { useContext, useEffect, useState } from "react";
import DataContext from "../context/DataContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldDog } from "@fortawesome/free-solid-svg-icons";

const MyPage = () => {
  const [login, setLogin] = useState(false);
  const data = useContext(DataContext);
  const navigate = useNavigate();

  useEffect(()=>{
    setLogin(data.state.user? true :false)
  },[data.state.user])

  const checkLogout = ()=>{
    setLogin(false);
    data.action.setUser(null); // 🤬🤬🤬
    navigate('/login'); // 🤬🤬🤬
  }

  //<FontAwesomeIcon icon={faShieldDog}/>

  const activeStyle = {
    background : "rgba(255, 255, 255, 0.4)",
    borderRadius : "10px",
    color: "#2C3D4F"
  }

  return (
    
      <div className="mypage-background">
        <div className="mypage-home-logout">
          <button onClick={()=>{navigate('/')}}>
            ARCO Home
          </button>
          <button
            style={{ textDecoration: 'none', color: '#2C3D4F'}}
            onClick={checkLogout}>
            Sign Out
          </button>
        </div>
        <h1 className="mypage-title" onClick={()=>{navigate('/mypage/myprofile')}}>
          <FontAwesomeIcon icon={faShieldDog}/> {" "}
          My Page
          </h1>
        <nav className="mypage-nav">
          <NavLink index to='/mypage/myprofile' style={({isActive})=>isActive? activeStyle : undefined}>My profile</NavLink>
          <NavLink to='/mypage/mydonation' style={({isActive})=>isActive? activeStyle : undefined} >My Donation</NavLink>
          <NavLink to='/mypage/questions' style={({isActive})=>isActive? activeStyle : undefined} >Questions</NavLink>
        </nav>
        <section className="mypage-section">
          <Outlet />
        </section> 
      </div>
    
  );
}

export default MyPage;