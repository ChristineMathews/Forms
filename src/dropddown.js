import React from 'react';
import './TeamDropdown.css'; // Import the CSS file for styling

const TeamDropdown = ({ teams, onSelect }) => (
    <div className="dropdown-container">
        <div className="dropdown-card">
            <h2>Select a Team</h2>
            <div className="select-container">
                <select onChange={(e) => onSelect(e.target.value)}>
                    <option value="">Select a team...</option>
                    {teams.map((team) => (
                        <option key={team} value={team}>
                            {team}
                        </option>
                    ))}
                </select>
                <div className="arrow">▼</div>
            </div>
        </div>
    </div>
);

export default TeamDropdown;


