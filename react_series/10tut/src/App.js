// import Box from "./Box"
// import AddColor from "./AddColor";
import ListItems from "./listItems";
import Button from "./button";
import { useState, useEffect } from "react";
import apiRequest from "./apiRequest";


function App() {
    const API_URL = 'https://jsonplaceholder.typicode.com';

    const [items, setItems] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    // const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(`${API_URL}/users`);
                if(!response.ok) throw Error('Did not receive expected data');
                const listItems = await response.json();
                console.log(listItems)
                setItems(listItems);
                setFetchError(null);
            } catch (err) {
                setFetchError(err.message)
            } finally {
                // setIsLoading(false)
            }
        }

        (async() => await fetchItems())();
    }, []);

    const handleGet = async (group = "users") => {
        const updateOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const reqUrl = `${API_URL}/${group}`;

        const result = await apiRequest(reqUrl,updateOptions);
        console.log(items)

        if (result) setFetchError(result);
    };

    return (
        <div className="App">
            <div className="buttonContainer">
                <Button
                    handleGet={handleGet}
                    name='users'
                />
                <Button
                    handleGet={handleGet}
                    name='posts'
                />
                <Button
                    handleGet={handleGet}
                    name='comments'
                />
            </div>
            {!fetchError &&
                <ListItems
                    items={items}
                />
            }
        </div>
    );
}

export default App;
