const ArmyBotCard = ({ bot, onRelease, onDischarge }) => {
    return (
      <div className="army-bot-card" onClick={onRelease}>
        {/* Discharge button */}
        <button 
          className="discharge-btn"
          onClick={(e) => {
            e.stopPropagation();
            onDischarge();
          }}
        >
          X
        </button>
  
        {/* Bot info */}
        <img 
          className="army-bot-avatar" 
          src={bot.avatar_url} 
          alt={bot.name} 
        />
        <h4 className="army-bot-name">{bot.name}</h4>
        <div className="army-bot-class">{bot.bot_class}</div>
      </div>
    );
  };
  
  export default ArmyBotCard;