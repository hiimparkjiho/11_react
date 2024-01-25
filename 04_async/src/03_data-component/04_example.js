// openAPI를 이용해 유럽 5대리그의 선수 득점 순위를 표시하는 기능.
// 리그와 시즌을 선택하고 확인 버튼을 누르면 선수의 개인 득점 순위가 리스팅되는 형식(한 10위까지 하면 될 듯).

import { useEffect, useState } from "react";

const TopScorePlayer = () => {
    const [players, setPlayers] = useState([]);

    const fetchTopScorers = async () => {
        try {
            const response = await fetch("http://api.football-data.org/v4/competitions/SA/scorers", {
                headers: {
                    "X-Auth-Token": "5f24c12e984f409c8fe47e8be75d4d 4c",
                },
            });
            const data = await response.json();
            setPlayers(data.scorers);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchTopScorers();
    }, []);

    return (
        <>
            <h3>세리에A 득점 순위</h3>
            <ul>
                {players.map((player) => (
                    <li key={player.player.id}>
                        {`${player.player.name} - ${player.goals} goal`}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default TopScorePlayer;