import React from 'react';

const styles = {
    container: {
        marginTop: '20px',
        width: '200px',
        position: 'relative',
    },
    select: {
        width: '100%',
        padding: '10px',
        fontSize: '16px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        appearance: 'none',
        backgroundColor: '#f4f4f4',
    },
    arrow: {
        position: 'absolute',
        top: '50%',
        right: '10px',
        transform: 'translateY(-50%)',
        pointerEvents: 'none',
    },
};

const TeamDropdown = ({ teams, onSelect }) => (
    <div style={styles.container}>
        <select style={styles.select} onChange={(e) => onSelect(e.target.value)}>
            <option value="">Select a team...</option>
            {teams.map((team) => (
                <option key={team} value={team}>
                    {team}
                </option>
            ))}
        </select>
        <div style={styles.arrow}>▼</div>
    </div>
);

export default TeamDropdown;

