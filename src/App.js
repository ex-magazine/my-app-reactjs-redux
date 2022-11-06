import logo from './logo.svg';
import './App.css';

//Kết nối vơi redux
import { connect } from "react-redux";
import ShowNote from './components/Note/ShowNote';
import AddNote from './components/Note/AddNote';

import Welcome from './Welcome';

function App(props) {
  /*
  const oldArray = [1222, 222, 3222];
  const newArray = [...oldArray, 4, 5];
  console.log(newArray); 


  const oldObject = {
    name: 'Dương Minh Trí'
  };
  
  const newObject = {
    ...oldObject,
    age: 4
  };
  
  console.log(newObject); 

  function number(num1, num2, ...numOther){
    console.log("x:", num1); 
    console.log("y:", num2);
    console.log("Other number:", numOther);
  }
  number("one", "two", "three", "four", "five", "six");


  var member = (name, age) => {
    console.log(name, age);
  }
  member("aaaaaaaaaaa", 88);

  var member2 = name => {
    console.log(name)
  }
  member2("aaaaaaaaaaa");

  var member3 = () => {
    console.log("Dương Minh Trí");
  }
  member3(); 


  var a = [1, 2, 3];
  var arr = () => a[0];
  console.log(arr());  */




  return (
    <div className="App">
      <div className='container'>
        <div className="row" style={{ marginTop: "3%" }}>
          <AddNote />
          {props.note.map((note, index) => {
              // Render ra lần lượt các ghi chú.
              return <ShowNote noteData = {note} key={note.id}/>
          })}
        </div>
      </div>
    

      
      <header className="App-header">
        <Welcome name="Nguyễn Trí" age="18" gender="1">Xin chào </Welcome>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// Lấy state từ store bằng mapStateToProps
// Lúc này state nhận được sẽ gán vào props
const mapStateToProps = (state, ownProps) => {
  // Gán state nhận về từ store 
  // thành props có tên note (props.note)
  return {
    note: state.note,
  };
};
 
export default connect(mapStateToProps, null)(App);
