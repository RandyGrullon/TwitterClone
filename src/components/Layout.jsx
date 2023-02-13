import React from "react"; 
import Login from "./Login/Login";

const Layout = () => (
  // const [_id, set_id] = useState("");
  // const [noteTitle, setNoteTitle] = useState("");
  // const [noteDescription, setNoteDescription] = useState("");
  // // const [tasks, setTasks] = useState([]);

  // const fetchTasks = async () => {
  //   try {
  //     const response = await fetch("/api/task");
  //     const data = await response.json();
  //     setTasks(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const handleAddTask = async (event) => {
  //   event.preventDefault();
  //   if (!_id) {
  //     try {
  //       const response = await fetch("/api/task", {
  //         method: "POST",
  //         body: JSON.stringify({
  //           title: noteTitle,
  //           description: noteDescription,
  //         }),
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //         },
  //       });
  //       const data = await response.json();
  //       console.log(data);
  //       setNoteTitle("");
  //       setNoteDescription("");
  //       fetchTasks();
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   } else {
  //     try {
  //       const response = await fetch(`/api/task/${_id}`, {
  //         method: "PUT",
  //         body: JSON.stringify({
  //           title: noteTitle,
  //           description: noteDescription,
  //         }),
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //         },
  //       });
  //       const data = await response.json();
  //       console.log(data);
  //       setNoteTitle("");
  //       setNoteDescription("");
  //       set_id("");
  //       fetchTasks();
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  // };

  // const handleEditTask = async (id) => {
  //   try {
  //     const response = await fetch(`/api/task/${id}`);
  //     const data = await response.json();
  //     console.log(data);
  //     set_id(data._id);
  //     setNoteTitle(data.title);
  //     setNoteDescription(data.description);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const handleDeleteTask = async (id) => {
  //   if (window.confirm("Are you sure you want to delete it?")) {
  //     try {
  //       const response = await fetch(`/api/task/${id}`, {
  //         method: "DELETE",
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //         },
  //       });
  //       const data = await response.json();
  //       console.log(data);
  //       fetchTasks();
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  // };

  // const handleInputChange = ({ target }) => {
  //   const { name, value } = target;
  //   if (name === "title") {
  //     setNoteTitle(value);
  //   } else if (name === "description") {
  //     setNoteDescription(value);
  //   }
  // };

  // useEffect(() => {
  //   fetchTasks();
  // }, []);

  <div className="h-screen bg-cover bg-blue-900 bg-center ">
    <div className="flex items-center justify-center h-full">
      <Login />
    </div>
  </div>
);

export default Layout;
