import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8080", { autoConnect: false });
export default function Practice1() {
  const [fromServerStr, setFromServerStr] = useState("");

  const initSocketConnect = () => {
    if (!socket.connected) socket.connect(); // 클라이언트 소켓에 접속
  };
  useEffect(() => {
    initSocketConnect();

    socket.on("helloMessage", (message, cb) => {
      cb(message);
    });
  }, []);

  return (
    <>
      <button
        onClick={() => {
          socket.emit("helloMessage", "hello")
          socket.on("helloMessage", (message) => {
            
          })
          });
        }}
      >
        hello
      </button>
      <button
        onClick={() => {
          //   io.emit("study", "study");
        }}
      >
        study
      </button>
      <button
        onClick={() => {
          //   io.emit("bye", "bye");
        }}
      >
        bye
      </button>
      <h3>{fromServerStr}</h3>
    </>
  );
}
