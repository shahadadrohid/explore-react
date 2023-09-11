import { useEffect, useState } from "react";

function User() {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])
    return (
        <>
            <h3>Users: {users.length}</h3>
        </>
    )
}

export default User;