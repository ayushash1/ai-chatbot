import { useQuery } from "@tanstack/react-query";
import "./chatList.css";
import { Link } from "react-router";
const ChatList = () => {
  const backendurl = import.meta.env.VITE_API_URL;
  const { isPending, error, data } = useQuery({
    queryKey: ["userChats"],
    queryFn: () =>
      fetch(`${backendurl}/api/userchats`, {
        credentials: "include",
      }).then((res) => res.json()),
  });

  return (
    <div className="chatList">
      <span className="title">DashBoard</span>
      <Link to={"/dashboard"}>Create a new Chat</Link>
      <Link to={"/"}>Explore</Link>
      <Link to={"/"}>Contact</Link>
      <hr />
      <span className="title">Recent Chats</span>
      <div className="list">
        {isPending
          ? "Loading..."
          : error
          ? `Error: Something went wrong!`
          : Array.isArray(data) && data.length > 0
          ? data.map((chat) => (
              <Link to={`dashboard/chats/${chat._id}`} key={chat._id}>
                {chat.title || "Untitled Chat"}
              </Link>
            ))
          : "No chats found."}
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
