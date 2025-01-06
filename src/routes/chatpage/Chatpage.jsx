import { useQuery } from "@tanstack/react-query";
import NewPromt from "../../components/newPromt/NewPromt";
import "./chatpage.css";
import { useLocation } from "react-router";
import Markdown from "react-markdown";
import { IKImage } from "imagekitio-react";

const Chatpage = () => {
  const path = useLocation().pathname;
  const chatId = path.split("/").pop();
  const backendurl = import.meta.env.VITE_API_URL;

  const { isPending, error, data } = useQuery({
    queryKey: ["chat", chatId],
    queryFn: () =>
      fetch(`${backendurl}/api/chats/${chatId}`, {
        credentials: "include",
      }).then((res) => res.json()),
  });

  return (
    <div className="chatpage">
      <div className="wrapper">
        <div className="chat">
          {isPending
            ? "Loading...."
            : error
            ? "Error: Something went wrong!"
            : data?.history.map((message, i) => (
                <>
                  {message.img && (
                    <IKImage
                      urlEndpoint={import.meta.env.VITE_IMAGEKIT_ENDPOINT}
                      path={message.img}
                      height={250}
                      width={300}
                      transformation={[{ height: 250, width: 300 }]}
                      loading="lazy"
                      lqip={{ active: true, quality: 20 }}
                    />
                  )}
                  <div
                    key={i}
                    className={
                      message.role === "user" ? "message user" : "message"
                    }
                  >
                    <Markdown>{message.parts[0].text}</Markdown>
                  </div>
                </>
              ))}

          <NewPromt />
        </div>
      </div>
    </div>
  );
};

export default Chatpage;
