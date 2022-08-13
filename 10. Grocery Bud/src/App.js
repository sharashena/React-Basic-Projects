import { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const getFromLocalStorage = () => {
  let storage;
  if (localStorage.getItem("list")) {
    storage = JSON.parse(localStorage.getItem("list"));
  } else {
    storage = [];
  }
  return storage;
};

const App = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState(getFromLocalStorage);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!name) {
      // alert
      showAlert(true, "please enter value", "danger");
    } else if (name && isEdit) {
      const replaceItem = list.map(editItem => {
        if (editItem.id === editId) {
          return { ...editItem, name };
        }
        return editItem;
      });
      setList(replaceItem);
      setName("");
      setIsEdit(false);
      setEditId(null);
      showAlert(true, "value changed", "success");
      // edit
    } else {
      // show alert
      // add items
      const id = new Date().getTime().toString();
      const newItems = { id, name };
      setList([...list, newItems]);
      setName("");
      showAlert(true, "item added to the list", "success");
    }
  };

  const clearItems = () => {
    setList([]);
    showAlert(true, "empty list", "danger");
  };

  const removeItem = id => {
    showAlert(true, "item removed", "danger");
    const newItems = list.filter(listItem => listItem.id !== id);
    setList(newItems);
  };

  const editItem = id => {
    const findItem = list.find(list => list.id === id);
    setIsEdit(true);
    setEditId(id);
    setName(findItem.name);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} list={list} removeAlert={showAlert} />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEdit ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <div className="grocery-list">
            {list.map(listItem => {
              return (
                <List
                  key={listItem.id}
                  {...listItem}
                  removeItem={removeItem}
                  editItem={editItem}
                />
              );
            })}
            <button className="clear-btn" onClick={clearItems}>
              clear items
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default App;
