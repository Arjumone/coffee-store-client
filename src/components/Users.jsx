import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const loadedUser = useLoaderData();
  const [users, setUsers] = useState(loadedUser);

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://coffee-store-server-hh8iqorsw-arjus-projects.vercel.app/user/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");

              // remove the user from UI
              const remaining = users.filter((user) => user._id !== _id);
              setUsers(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <h2>loaded user{loadedUser.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>CreatedAt</th>
              <th>Last Login</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <th>1</th>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
                <td>{user.lastLoggedAt}</td>
                <td>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className=" btn bg-red-500"
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
