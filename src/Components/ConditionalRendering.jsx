export default function ConditionalRendering() {
    const users=
    [
        {id:1,name:"John Doe",isActive:false},
        {id:2,name:"Jane Smith",isActive:false},
        {id:3,name:"Bob Johnson",isActive:false},
        {id:4,name:"Alice Williams",isActive:false},
        {id:5,name:"Charlie Brown",isActive:false},
        {id:6,name:"Emily Davis",isActive:false},
        {id:7,name:"David Wilson",isActive:false},
        {id:8,name:"Sarah Miller",isActive:false},
        {id:9,name:"Michael Anderson",isActive:false},
        {id:10,name:"Jessica Taylor",isActive:false}
    ];

    const activeUsers = users.filter(user => user.isActive);
    const inactiveUsers = users.filter(user => !user.isActive);

    return (
      <div>
        <h2>Active Users:</h2>
        {
        activeUsers.length > 0 ? 
        (
          <ul>
            {activeUsers.map(user => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        ) : (
          <p>No active users.</p>
        )
        }
        <hr />
        <h2>Inactive Users:</h2>
        {
        inactiveUsers.length > 0 ? 
        (
          <ul>
            {inactiveUsers.map(user => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        ) : (
          <p>No inactive users.</p>
        )
        }
      </div>
    );
}