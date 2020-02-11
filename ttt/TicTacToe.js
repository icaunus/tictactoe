import React, { Component } from 'react';
import './TicTacToe.css';

class TicTacToe extends Component {

/**/
  constructor(props){
    super(props);
this.start = new Date();
      this.startTimer = setInterval(
    this.f,
    1000
  );
  
  }
/**/
 f() {
      var diff = new Date() - this.start;
      
      document.getElementById("time").innerText = Math.round(diff / 1000);
    }

 rst() {
  var cells = document.getElementsByClassName("cell");
  var tableDatas = document.getElementsByTagName("td");

  delete document.getElementById("outer")["disabled"];
  
  clearInterval(this.startTimer);
   document.getElementById("time").innerText = "0";
  
   for (var i = 0; i < tableDatas.length; i++) {
     // nb! tableDatas[i].classNameList.remove("occupied");
   }
  
  for (var i = 0; i < cells.length; i++) {
    var seed = Math.round(Math.random() * 1000);
    var tmp = seed / (i + 1);
    
    if (tmp % 2 === 1) {
      cells[i].innerText = 'X';
    }
    else {
      cells[i].innerText = 'O';
    }
    
    cells[i].style.visibility = "hidden";
  }
}

show(cellId, parentId) {
  var cell = document.getElementById(cellId);
    
  cell.style.visibility = "visible";
  document.getElementById(parentId).className = ("occupied");
}

time() {
  

this.start = new Date();
    this.startTimer = setInterval(
    this.f,
    1000
  );
  
}


  componentWillMount(){
  }
  componentDidMount(){
this.start = new Date();
document.getElementById("t0").style.width = window.screen.width;
  setTimeout(() => { console.log("") }, 750);
  }
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <div id="outer">
        <table id="t0" disabled>
    <tbody>
      <tr>
        <td id="td0" onClick={() => this.show('s0', 'td0')}>
          <span id="s0" className="cell">X</span>
        </td>
        <td id="td1" onClick={() => this.show('s0', 'td1')}>
          <span id="s1" className="cell">O</span>
        </td>
        <td id="td2" onClick={() => this.show('s0', 'td2')}>
          <span id="reset" onMouseOver={() => this.rst()}>hover to reset</span>
          <span id="s2" className="cell">X</span>
        </td>
      </tr>
      <tr>
        <td id="td3" onClick={() => this.show('s0', 'td3')}>
         <span onClick="on('s3')"></span>
         <span id="s3" className="cell">0</span>
        </td>
        <td id="td4" onClick={() => this.show('s0', 'td4')}>
          <span id="s4" className="cell">X</span>
          <span id="time" onMouseOver={() => this.time}>0</span>          
        </td>
        <td id="td5" onClick={() => this.show('s0', 'td5')}>
          <span id="s5" className="cell">X</span>
        </td>
      </tr>
      <tr>
        <td id="td6" onClick={() => this.show('s0', 'td6')}>
          <span id="s6" className="cell">X</span>
        </td>
        <td id="td7" onClick={() => this.show('s0', 'td7')}>
          <span id="s7" className="cell">X</span>
        </td>
        <td id="td8" onClick={() => this.show('s0', 'td8')}>
          <span id="s8" className="cell">O</span>
        </td>
      </tr>
      <tr>
        <td colSpan="3">
          <button id="start" onClick={this.time}>START</button>
        </td>
      </tr> 
    </tbody>
  </table>    
</div>
    );
  }
}

export default TicTacToe;
