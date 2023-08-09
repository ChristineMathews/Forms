import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import TeamDropdown from '../components/TeamDropdown';

const LoginPage = ({ onTeamSelect }) => {
    const [teams, setTeams] = useState(null);

    const handleLogin = (fetchedTeams) => {
        setTeams(fetchedTeams);
    };

    return (
        <div>
            <h1>Login Page</h1>
            {!teams ? (
                <LoginForm onLogin={handleLogin} />
            ) : (
                <TeamDropdown teams={teams} onSelect={onTeamSelect} />
            )}
        </div>
    );
};

export default LoginPage;
