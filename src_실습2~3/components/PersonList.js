

function PersonList(props){
    const {idx,username,age}=props;

    console.log("자식",props);
    return (<tr>
                <td>{idx+1}</td>
                <td>{username}</td>
                <td>{age}</td>
            </tr>

    );
}

export {PersonList};