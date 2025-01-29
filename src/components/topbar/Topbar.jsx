import { Chat, Search, Notifications } from '@mui/icons-material';
import React, { useContext } from 'react';
import "./Topbar.css";
import { Link } from 'react-router-dom';
import { AuthContext } from "../../state/AuthContext";

export default function Topbar() {
    const { user } = useContext(AuthContext);
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">Keetalk</span>
                </Link>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon" />
                    <input
                        type="text"
                        className="searchInput"
                        placeholder="検索しよう" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarItemIcons">
                    <div className="topbarIconItem"> {/* DMコンポーネンツを作りたい*/}
                        <Chat />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem"> {/*notificationコンポーネンツを作りたい*/}
                        <Notifications />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <Link to={`/profile/${user.username}`}>
                        <img src={user.profilePicture ? PUBLIC_FOLDER + user.profilePicture : PUBLIC_FOLDER + "/person/noAvatar.png"}
                            alt=""
                            className="topbarImg"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}