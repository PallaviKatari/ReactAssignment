// Destructuring is a convenient way of extracting multiple values from data stored in 
// objects and arrays. It can be used in variable declarations, function parameters, and more. 
// Here are some examples of destructuring in JavaScript:

function UserCard({ name, age, email }) {
    return (
        <div>
            <h1>{name}</h1>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
            <hr/>
            <UserCard1 props={{ name, age, email }} />
        </div>
    );
}

function UserCard1({ props }) {
    const { name, age, email } = props;
    return (
        <div>
            <h1>{name}</h1>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
            <hr/>
            <EmployeeCard employee= {props} />
        </div>
    );
}

export default UserCard;

function EmployeeCard({ employee }) {
    const { name, age, email } = employee;
    return (
        <div>
            <h1>{name}</h1>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
        </div>
    );
}




