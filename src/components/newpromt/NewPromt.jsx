import "./newPromt.css";
import { useEffect, useRef } from "react";

const NewPromt = () => {
  const endRef = useRef();
  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, [endRef]);

  return (
    <>
    <div ref={endRef} className="endChat"></div>
      <form className="newForm">
        <label htmlFor="file">
          <img src="/attachment.png" alt="attachment.png" />
        </label>
        <input type="file" id="file" multiple="false" hidden />
        <input type="text" placeholder="Ask anything..." />
        <button>
          <img src="/arrow.png" alt="send btn arrow" />
        </button>
      </form>
    </>
  );
};

export default NewPromt;
