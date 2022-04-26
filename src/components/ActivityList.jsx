

const ActivityList = (props) => {

  console.log(props.activities.ActivityList)
  return (
    <div className="grid">
      { {
        props.activities.map((activity) => (
          <div key={activity.key} className="card">
            <h3>{activity.activity}</h3>
            
          </div>  
        ))
      } }
    </div>
  )
}

export default ActivityList