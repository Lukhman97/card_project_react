import PlayerCard from "./Components/PlayerCard";
import cskPlayers from "./JSON DATA/Data";
import "./index.css";

export default function App() {
  return (
    <div className="app">
      <h1>CSK Team Players 🦁</h1>

      <div className="players-container">
        {cskPlayers.map((player) => (
          <PlayerCard
            key={player.id}
            name={player.name}
            role={player.role}
            image={player.image}
            jersey={player.jersey}
          />
        ))}
      </div>
    </div>
  );
}
