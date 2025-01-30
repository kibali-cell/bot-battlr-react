import ArmyBotCard from './ArmyBotCard';

const YourBotArmy = ({ bots, onRelease, onDischarge }) => {
  return (
    <div className="your-army">
      <h2 className="army-title">DEPLOYED UNITS</h2>
      <div className="army-scroll-container">
        <div className="army-grid">
          {bots.map(bot => (
            <ArmyBotCard
              key={bot.id}
              bot={bot}
              onRelease={() => onRelease(bot.id)}
              onDischarge={() => onDischarge(bot.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default YourBotArmy;



