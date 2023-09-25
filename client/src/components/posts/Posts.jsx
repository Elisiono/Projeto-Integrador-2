import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  //Temporario
  const posts = [
    {
      id: 1,
      name: "Teste Tester",
      userId: 1,
      profilePic:
        "https://media.istockphoto.com/id/1289383957/pt/foto/blurred-bangkok-city-night-background.jpg?s=612x612&w=is&k=20&c=RjWZL816RZ4tsJ-pK44xjofCIdS0qkKu2Qa3r6xRvHk=",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: "https://media.istockphoto.com/id/1289383957/pt/foto/blurred-bangkok-city-night-background.jpg?s=612x612&w=is&k=20&c=RjWZL816RZ4tsJ-pK44xjofCIdS0qkKu2Qa3r6xRvHk=",
    },
    {
      id: 2,
      name: "Teste Tester",
      userId: 2,
      profilePic:
        "https://media.istockphoto.com/id/1289383957/pt/foto/blurred-bangkok-city-night-background.jpg?s=612x612&w=is&k=20&c=RjWZL816RZ4tsJ-pK44xjofCIdS0qkKu2Qa3r6xRvHk=",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
