import React, { useState } from 'react';
import LoginScreen from '../components/LoginScreen';
import TeamDropdown from '../components/TeamDropdown';
import { useAuth } from '../path-to-your-AuthContext'; // Adjust the path accordingly

const LoginPage = () => {
    const [teams, setTeams] = useState(null);
    const { login } = useAuth(); // Use the hook to get the login function

    const handleLoginSuccess = () => {
        // This will set our global state to "logged in"
        login();

        // Fetch teams (this is just mock data for the example)
        const fetchedTeams = ['Team A', 'Team B', 'Team C'];
        setTeams(fetchedTeams);
    };

    const handleTeamSelect = (team) => {
        // Here, after selecting a team, you might want to set the team somewhere or just navigate to the scorecard.
        // For this example, we'll just log the selected team.
        console.log(`Selected team: ${team}`);
        // You can navigate or do other logic here.
    };

    return (
        <div>
            <h1>Login Page</h1>
            {!teams ? (
                <LoginScreen onLogin={handleLoginSuccess} />
            ) : (
                <TeamDropdown teams={teams} onSelect={handleTeamSelect} />
            )}
        </div>
    );
};

export default LoginPage;



const App = () => {
    const [selectedTeam, setSelectedTeam] = useState(null);

    const handleTeamSelect = (team) => {
        setSelectedTeam(team);
    };

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    {selectedTeam ? <Redirect to="/main" /> : <LoginPage onTeamSelect={handleTeamSelect} />}
                </Route>
                <Route path="/main" component={MainPage} />