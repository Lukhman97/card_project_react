export default function PlayerCard({ name, role, image, jersey }) {
  return (
    <div className="player-card">
      <img src={image} alt={name} width="120" />
      <h3>{name}</h3>
      <p>{role}</p>
      <span>Jersey No: {jersey}</span>
    </div>
  );
}
