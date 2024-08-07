


function TabButton(props) {
    console.log(props);

    var event = props.onParent;
    var mesg = props.children;
    console.log(event, mesg);

    return (  
      <div className="TabButton">
        <h2>TabButton</h2>
        <button onClick={()=>event(mesg)}>딸깍</button>
      </div>
    );
  }

  export default TabButton;