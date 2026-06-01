// Spread Syntax

function SpreadSyntax() {
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const combinedArr = [...arr1, ...arr2];
  console.log(combinedArr); // Output: [1, 2, 3, 4, 5, 6]

  const originalImage = {
    src: "https://th.bing.com/th/id/OIP.yNOaibrXZ3bEEC8bfTkJtQHaHa?w=168&h=180&c=7&r=0&o=5&dpr=1.56&pid=1.7",
    alt: "React Application",
    width: 400,
    height: 400,

  };

  const newImage = {
    ...originalImage,
    width: 100,
    height: 100,
    style: {
      border: "2px solid red",
      borderRadius: "5px",
    },
  };

  return (
    <div>
      <h1>Spread Syntax Demo</h1>
      <img {...originalImage} />
      <img {...newImage} />
      <hr />
      <Image {...originalImage} />
      <Image {...newImage} />
    </div>
  );
}

export default SpreadSyntax;

function Image(props) {
  return <img alt={props.alt} src={props.src}/>;
}