// Prop Drilling in React refers to the process of passing data from a parent component 
// down to child components through multiple levels of the component tree. 
// This can lead to a situation where you have to pass props through several 
// intermediate components that do not need the data themselves, 
// just to get it to the component that does need it. 
// This can make the code more difficult to maintain and understand, 
// especially as the component tree grows in complexity.

// To avoid prop drilling, React provides a feature called Context. 
// Context allows you to create a global state that can be accessed by any component 
// in the component tree, without having to pass props down through multiple levels. 
// This can help simplify your code and make it easier to manage state across your application.

export default function GrandParent() {
  const name = "John";
  return (
    <div>
      <h3>GrandParent - {name}</h3>
      <Parent name={name} />
    </div>
  );
}

function Parent({ name }) {
  return (
    <div>
      <h3>Parent - {name}</h3>
      <Child name={name} />
    </div>
  );
}

function Child({ name }) {
  return <h3>Child - {name}</h3>;
}