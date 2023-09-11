import { useState } from "react";

function Team() {

    const [team, setTeam] = useState(11);

    const handleAdd = () => {
        const newTeam = team + 1;
        setTeam(newTeam);
    }

    const handleReduce = () => {
        const newTeam = team - 1;
        setTeam(newTeam);
    }
    //CSS style:
    const teamStyle = {
        border: '2px solid purple',
        margin: '5px',
        padding: '25px',
        borderRadius: '15px'
    }

    return (
        <>
            <h3 style={teamStyle}>Players: {team}</h3>
            <button onClick={handleAdd}>Add Player</button>
            <br />
            <button onClick={handleReduce}>Reduce Player</button>
        </>
    )
}

export default Team;