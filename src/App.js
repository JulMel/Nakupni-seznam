import Modal from "./components/Modal";
import { useState, useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newItems = [...state.items, action.payload]; // přidám všechny dosavadní položky + action.payload(=newItem)
    return {
      ...state, // vezmi všechno z defultState a prověď následující
      items: newItems,
      showNotification: true,
      notifContent: "Položka byla přidána",
    };
  }

  if (action.type === "NO_ITEM") {
    return {
      ...state, // současný stav
      showNotification: true,
      notifContent: "Zadejte položku",
    };
  }

  if (action.type === "CLOSE_NOTIFICATION") {
    return {
      ...state,
      showNotification: false,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const filtredItems = state.items.filter((oneItem) => {
      return oneItem.id !== action.payload;
    });
    return {
      ...state,
      items: filtredItems,
    };
  }

  return new Error(); // když neplatí ani jedna podmínka, zavolá se error
};

const defaultState = {
  items: [],
  showNotification: false,
  notificationContent: "", // proměnlivý text notifikace
};

const App = () => {
  const [itemName, setItemName] = useState(""); // ukládání názvu položky
  const [state, dispatch] = useReducer(reducer, defaultState);

  const submitForm = (e) => {
    e.preventDefault();

    if (itemName) {
      const newItem = { id: new Date().getTime(), name: itemName }; // nová položka = vygenerování id, jméno je v itemName
      dispatch({ type: "ADD_ITEM", payload: newItem });
    } else {
      dispatch({ type: "NO_ITEM" });
    }
    setItemName(""); // po odeslání se obsah pole smaže
  };

  const closeNotification = () => {
    dispatch({ type: "CLOSE_NOTIFICATION" });
  };

  return (
    <div>
      <h1>Nákupní seznam</h1>
      <section className="form">
        {state.showNotification && (
          <Modal
            notifContent={state.notifContent}
            closeNotif={closeNotification}
          />
        )}
        {/* state.notification*/} {/* posílám notifContent do Modal*/}
        {/* pokud je showNotification false, tak nic, pokud je true, tak vyskočí modal komponenta*/}
        <form onSubmit={submitForm}>
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          <input type="submit" value="Přidat" />
        </form>
        <div>
          {/* state.items*/}
          {state.items.map((oneItem) => {
            return (
              <div key={oneItem.id} className="all-items">
                <p>{oneItem.name}</p>
                <button
                  type="button"
                  onClick={() =>
                    dispatch({ type: "REMOVE_ITEM", payload: oneItem.id })
                  }
                >
                  Smazat
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default App;
