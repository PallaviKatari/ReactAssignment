import PropsDemo from './PropsDemo';
import ConditionalRendering from './ConditionalRendering';

export default function PropsChildren()
{
    return (
        <div>
            <hr/>
            <h1>This is a Props Children Demo</h1>
            <PropsChildrenDemo>
                <h2>This is a child element passed as props</h2>
                <p>This is another child element passed as props</p>
                <h6>Sample Data</h6>
                <PropsDemo name="Jane Doe" age={30} />
                <ConditionalRendering />
            </PropsChildrenDemo>
        </div>
    );
}

function PropsChildrenDemo(props) {
    return (
        <div>
            <hr/>
            <h1>Props Children Demo</h1>    
            {props.children}
        </div>
    );
}