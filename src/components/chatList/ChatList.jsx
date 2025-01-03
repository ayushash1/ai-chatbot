import "./chatList.css";
import { Link } from "react-router";
const ChatList = () => {
  return (
    <div className="chatList">
      <span className="title">DashBoard</span>
      <Link to={"/dashboard"}>Create a new Chat</Link>
      <Link to={"/"}>Explore</Link>
      <Link to={"/"}>Contact</Link>
      <hr />
      <span className="title">Recent Chats</span>
      <div className="list">
        <Link to={"/"}>chat title</Link>
        <Link to={"/"}>chat title</Link>
        <Link to={"/"}>chat title</Link>
        <Link to={"/"}>chat title</Link>
        <Link to={"/"}>chat title</Link>
        <Link to={"/"}>chat title</Link>
        <Link to={"/"}>chat title</Link>
        <Link to={"/"}>chat title</Link>
        <Link to={"/"}>chat title</Link>
        <Link to={"/"}>chat title</Link>
        <Link to={"/"}>chat title</Link>
      </div>
      <hr />
      <div className="upgrade">
        <img src="/logo.png" alt="logo.png" />
        <div className="texts">
          <span>Upgrade to Neo AI Pro</span>
          <span>Get unlimited access to all features</span>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
