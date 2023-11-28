import { SlLogout, SlSettings } from 'react-icons/sl';
import profile from '../../style/images/Profile_picture.png';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ handleLogout, search, setSearch, user }) => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="header">
        <img src={profile} className="profile-pic"/>
        <div>
          {user.data && <h4>{user.data.firstName} {user.data.lastName}</h4>}
          <p>...</p>
        </div>
        <div className="menu">
          <SlLogout id='logout' onClick={handleLogout} className="icon"/>
          <SlSettings onClick={() => navigate(`/profile/${user.data.username}`)} className="icon"/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
