import { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);

  //Temporario
  const stories = [
    {
      id: 1,
      name: "Teste Tester",
      img: "https://media.istockphoto.com/id/1289383957/pt/foto/blurred-bangkok-city-night-background.jpg?s=612x612&w=is&k=20&c=RjWZL816RZ4tsJ-pK44xjofCIdS0qkKu2Qa3r6xRvHk=",
    },
    {
      id: 2,
      name: "Teste Tester",
      img: "https://media.istockphoto.com/id/1289383957/pt/foto/blurred-bangkok-city-night-background.jpg?s=612x612&w=is&k=20&c=RjWZL816RZ4tsJ-pK44xjofCIdS0qkKu2Qa3r6xRvHk=",
    },
    {
      id: 3,
      name: "Teste Tester",
      img: "https://media.istockphoto.com/id/1289383957/pt/foto/blurred-bangkok-city-night-background.jpg?s=612x612&w=is&k=20&c=RjWZL816RZ4tsJ-pK44xjofCIdS0qkKu2Qa3r6xRvHk=",
    },
    {
      id: 4,
      name: "Teste Tester",
      img: "https://media.istockphoto.com/id/1289383957/pt/foto/blurred-bangkok-city-night-background.jpg?s=612x612&w=is&k=20&c=RjWZL816RZ4tsJ-pK44xjofCIdS0qkKu2Qa3r6xRvHk=",
    },
  ];
  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt=""></img>
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt=""></img>
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
