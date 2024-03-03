import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

const users = [
  {
    userName: "VicWithGG1",
    name: "Francisco Victorico Aguirre Jimenez",
    isFollowing: true,
  },
  {
    userName: "JohnD",
    name: "John Doe",
    isFollowing: false,
  },
  {
    userName: "JaneD",
    name: "Jane Doe",
    isFollowing: true,
  },
  {
    userName: "Lil Peep",
    name: "Gustav Ahr",
    isFollowing: false,
  }
]

export function App() {
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  )
}
