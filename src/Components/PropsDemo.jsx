// Props - properties that are passed to components 
// to customize their behavior or appearance. 
// They are read-only and cannot be modified 
// by the component receiving them.
// Parent - Child Communication 
// Props allow you to create reusable components 
// that can be easily 
// customized by passing different 
// <values className=""></values>

function PropsDemo(props) {
    return (
        <div>
            <h1>This is a Props Demo</h1>
            <h2>My name is {props.name}</h2>
            <h2>I am {props.age} years old</h2>
        </div>
    );
}

export default PropsDemo;