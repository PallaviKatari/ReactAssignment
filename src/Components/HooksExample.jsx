import React, { useState, useEffect, useRef, createContext ,useContext} from "react";
import Bootstrap from "./Bootstrap";
import { UserContext, UserContext1 } from "./UserContext";
//useState Hook
//The useState hook allows us to create state variables in a React function component.
export default function ReactHooks() {
  //const [language, setLanguage] = React.useState("React!!!");
  //const [projects, setProject] = React.useState(0);
  
  // state - current state value of language and projects and counter
  // setState - function to update the state
  const [state, setState] = useState({
    language: "React",
    projects: 0,
    counter: 0,
    id: 1,
  });

  function changeLanguage() {
    setState({ ...state, language: "Angular" });
  }
  function addProject() {
    // setState - points to language: "React",projects: 0
    setState((prev) => {
      return {
        ...prev,
        projects: prev.projects + 1, // 0+1
        counter: prev.counter + 1, // 0+1
      };
    });
  }
   
  function incrementCounter() {
    setState((prev) => {
      return {
        ...prev,
        counter: prev.counter + 1,
      };
    });
  }

  useEffect(() => {
    console.log("Component has mounted or updated.");
  }, [state]); // This effect runs only when the state changes

  return (
    <div style={{ marginTop: 100 }}>
      {/* <h1>React useState</h1>
      <h1 onClick={changeLanguage}>
        {state.counter} . I've completed {state.projects} projects in {state.language}
      </h1>
      <button onClick={addProject} style={{ marginTop: 30, width: 100 }}>
        Add Project
      </button>
      <button onClick={incrementCounter} style={{ marginTop: 30, width: 100 }}>
        Increment Counter
      </button>
       <hr></hr>
      <Effect />
      <hr></hr>
      <Effect1 />
      <hr></hr> */}
      {/* <UsersList />
      <hr /> */}
      {/* <Reference />  */}
      {/* <hr />
      <Context1/>*/}
      <Context /> 
    </div>
  );
}

// /useEffect lets us perform side effects in function components.
function Effect() {
  var [color, setColor] = useState("");
  var [foregroundColor, setForegroundColor] = useState("");

  useEffect(() => {
    document.body.style.background = color; //red
    document.body.style.color = foregroundColor;
  });

  return (
    <div>
      <h1 style={{ marginBottom: 30 }}>React useEffect</h1>
      Enter color to change the background
      <input
        type="text"
        onChange={(e) => setColor(e.target.value)}
        style={{
          marginTop: 30,
          width: 100,
          marginLeft: 20,
          borderStyle: "dashed",
          borderColor: "black",
        }}
      ></input>
      <h1 style={{ marginBottom: 30 }}>React useEffect</h1>
      Enter color to change the Foreground
      <input
        type="text"
        onChange={(e) => setForegroundColor(e.target.value)}
        style={{
          marginTop: 30,
          width: 100,
          marginLeft: 20,
          borderStyle: "dashed",
          borderColor: "black",
        }}
      ></input>
    </div>
  );
}

//fetch -> 2 callback functions -> then(2)
function Effect1() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <div>
      Random user: <p>{JSON.stringify(user, null, 2)}</p>
    </div>
  );
}

function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center mt-4">Loading...</p>;
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Users</h2>

      <div className="row">
        {users.map((user) => (
          <div className="col-md-4 mb-4" key={user.id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {user.username}
                </h6>

                <p className="card-text">
                  <strong>Email:</strong> {user.email}
                </p>
                <p className="card-text">
                  <strong>Phone:</strong> {user.phone}
                </p>
                <p className="card-text">
                  <strong>Company:</strong> {user.company.name}
                </p>
              </div>

              <div className="card-footer text-end">
                <a
                  href={`https://${user.website}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
// function UsersList() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => {
//         setUsers(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div>
//       <h2>User List</h2>
//       {users.map((user) => (
//         <div key={user.id}>
//           <p>Name: {user.name}</p>
//           <p>Email: {user.email}</p>
//           <p>Phone: {user.phone}</p>
//           <hr/>
//         </div>
//       ))}
//     </div>
//   );
// }

//Refs are a special attribute that are available on all React components.
//They allow us to create a reference to a given element / component when the component mounts.
function Reference() {
  //It does not cause re-render
  const inputRef = useRef(null);
  const inputRef1 = useRef(null);

  function handleClearInput() {
    inputRef.current.value = "";
    inputRef1.current.value = "";
    inputRef1.current.focus();
  }

  function changeColor() {
    document.body.style.background = inputRef1.current.value;
  }

  return (
    <form>
      <h1 style={{ marginBottom: 30 }}>React useRef</h1>
      <input
        type="text"
        ref={inputRef}
        placeholder="Enter Text"
        style={{
          marginTop: 30,
          width: 200,
          marginLeft: 100,
          borderStyle: "dashed",
          borderColor: "black",
        }}
      />
      <button type="button" onClick={handleClearInput}>
        Clear Input
      </button>

      <input
        type="text"
        ref={inputRef1}
        placeholder="Enter Color"
        style={{
          marginTop: 30,
          width: 200,
          marginLeft: 100,
          borderStyle: "dashed",
          borderColor: "black",
        }}
      />

      <button type="button" onClick={changeColor}>
        Change background color
      </button>
    </form>
  );
}

// useContext
// useContext Helps Us Avoid Prop Drilling

// In React, we want to avoid the following problem of
// creating multiple props to pass data down two or more levels from a parent component.

// In some cases, it is fine to pass props through multiple components,
// but it is redundant to pass props through components which do not need it.
// Context is helpful for passing props down multiple levels of child
// components from a parent component and sharing state across our app component tree.

// The useContext hook removes the unusual-looking render props pattern that
// was required in consuming React Context before.

// Instead, useContext gives us a simple function to
// access the data we provided on the value prop of the Context Provider in any child component.

// 1. createContext
// 2. import the UserContext in the component where we want to consume the context value and use the useContext hook to access the value provided by the nearest UserContext.Provider in the component tree.
// 3. UserContext.Provider to Main Component
// 4. The components that require the state can access the state using the useContext hook and passing the UserContext as an argument.

function Context() {
  const [user] = useState({ name: "Freddy" });
  return (
    <UserContext.Provider value={user}>
      <Main />
    </UserContext.Provider>
  );
}

function Context1() {
  const [user] = useState({ name: "Alice1" });
  return (
    <UserContext1.Provider value={user}>
      <Bootstrap />
    </UserContext1.Provider>
  );
}

// Functional component is created using arrow function
const Main = () => (
  <>
    <Header />
    <Header1 />
    <Header2 />
    <Header3 />
    <br />
    <div>Main app content</div>
  </>
);

// Functional component is created using arrow function
// Consume the context value using useContext hook
const Header = () => {
  const user = useContext(UserContext); // name = "Freddy"
  return (
    <>
      <h1>React useContext - Header</h1>
      <h1 style={{ marginTop: 20 }}>Welcome, {user.name}!</h1>
    </>
  );
};

const Header1 = () => {
  const user = React.useContext(UserContext);
  return (
    <>
      <h1>React useContext - Header 1</h1>
      <h1 style={{ marginTop: 20 }}>Welcome, {user.name}!</h1>
    </>
  );
};

const Header2 = () => {
  return (
    <>
      <h1>React useContext not required - Header 2</h1>
      <h1 style={{ marginTop: 20 }}>Welcome!!!</h1>
    </>
  );
};

const Header3 = () => {
  const user = React.useContext(UserContext);
  return (
    <>
      <h1>React useContext - Header 3</h1>
      <h1 style={{ marginTop: 20 }}>Welcome, {user.name}!</h1>
    </>
  );
};

//GrandFather -> Parent(no need for name) -> Child - Prop drilling
//Context(Provide - name) -> Main -> Header (useContext-name)
