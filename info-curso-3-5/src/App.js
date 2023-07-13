const course = {
  name: "Half Stack application development",
  parts: [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
        name: 'Using props to pass data',
        exercises: 7
    },
    {
        name: 'State of a component',
        exercises: 14
    }
  ],
};

const Header = (props) => {
  return <h1>{props.course.name}</h1>;
};

const Part = (props) => {
    return (
        <p>
            {props.index} {props.part} {props.exercises}
        </p>
    )
}

const Content = (props) => {
    const parts = props.course.parts
    console.log(parts)
    return (
        <div>
            {parts.map((part, index) => (
                <Part key={index} part = {part.name} exercises = {part.exercises} />
            ))}
        </div>
    )
};

const Total = (props) => {
    return (
        <>
        <p>
        Numero total de ejercicios  {props.course.parts[2].exercises + props.course.parts[1].exercises + props.course.parts[0].exercises}
        </p>
        </>   
    )
}

const App = () => {
  return (
    <div>
      <Header course = {course}/>
      <Content course = {course}/>
      <Total course = {course}/>
    </div>
  );
};

export default App;