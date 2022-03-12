// dependencies
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'


function ActorDetails(props) {
  const { actor_id } = useParams();
  const [ actorData, setActorData] = useState([]);

  // get Actor in db
  useEffect(() => {
    const API_URL = `PG_URI${actor_id}`;
    const fetchData = async () => {
      const response = await fetch(API_URL);
      const resData = await response.json();
      console.log(resData)
      setActorData(resData.results);
    };
    fetchData();
  }, [actor_id]);

  // to be changed
  // render actor detail
  const renderActorDetails = actorData.map((actorMap, i) => {
    return(
      <div key={i}>
        <p>
          {actorMap.name}
          <br />
          {actorMap.bio}
        </p>
      </div>
    )
  })

  // what gets shown
  return(
    <div>
    <h1>{renderActorDetails}</h1>
  </div>
    )
};
export default ActorDetails;
