// FunctionalComponent.jsx
//Components are the building blocks of any React application, and a typical React app will have many of these.
// You can think of a component as a JavaScript function that returns a React element (which is JSX).
// There are two types of components in React: Functional Components and Class Components. 
// In this example, we will create a simple functional component.

//Functional Component vs Class Component
// Functional components are simpler and easier to read than class components. They are also more concise and easier to test.

//React 19
//Before React 16.8, functional components were stateless and 
//did not have access to lifecycle methods. However, with the introduction of Hooks 
//in React 16.8, functional components can now manage state and side effects, 
//making them more powerful and versatile than ever before.
//As a result, functional components have become the preferred way to create components in modern React development.

function FunctionalComponent() {
    return (
        <div>
            <h1>This is a Functional Component</h1>
            <FunctionalComponent1 />
        </div>
    );
}

function FunctionalComponent1() {
    return (
        <div>
            <h1>This is a Functional Component1</h1>
            <FunctionalComponent2 />
        </div>
    );
}

function FunctionalComponent2() {
    return (
        <h1>This is a Functional Component2</h1> 
    );
}

export default FunctionalComponent;