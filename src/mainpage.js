// LoginPage.js
import React, { useState } from 'react';
import LoginScreen from '../components/LoginScreen';
import TeamDropdown from '../components/TeamDropdown';

const LoginPage = ({ onTeamSelect }) => {
    const [teams, setTeams] = useState(null);

    const handleLogin = () => {
        // Normally, you'd authenticate here, then fetch the teams.
        const fetchedTeams = ['Team A', 'Team B', 'Team C']; // Mock data for this example
        setTeams(fetchedTeams);
    };

    return (
        <div>
            <h1>Login Page</h1>
            {!teams ? (
                <LoginScreen onLogin={handleLogin} />
            ) : (
                <TeamDropdown teams={teams} onSelect={onTeamSelect} />
            )}
        </div>
    );
};

export default LoginPage;

