import Box from "./Box"
import AddColor from "./AddColor";
import {useState} from "react";


function App() {
    const [newColor, setNewColor] = useState('');

    return (
        <div className="App">
            <Box
                newColor={newColor}
            />
            <AddColor
                newColor={newColor}
                setColor={setNewColor}
            />
        </div>
    );
}

export default App;
