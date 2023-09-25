import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  //Temporary
  const comments = [
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos officiis odio unde ipsum qui, perferendis accusamus dolorem, est, temporibus delectus ipsam. Magnam accusantium voluptas veritatis. Numquam quo optio temporibus. Totam.",
      name: "Teste Tester",
      userId: 1,
      profilePic:
        "https://media.istockphoto.com/id/1289383957/pt/foto/blurred-bangkok-city-night-background.jpg?s=612x612&w=is&k=20&c=RjWZL816RZ4tsJ-pK44xjofCIdS0qkKu2Qa3r6xRvHk=",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      name: "Teste Tester",
      userId: 2,
      profilePic:
        "https://media.istockphoto.com/id/1289383957/pt/foto/blurred-bangkok-city-night-background.jpg?s=612x612&w=is&k=20&c=RjWZL816RZ4tsJ-pK44xjofCIdS0qkKu2Qa3r6xRvHk=",
    },
  ];

  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="Deixe um comentario" />
        <button>Enviar</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePic} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 min ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
