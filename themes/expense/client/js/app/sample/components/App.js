import React, { useState, useRef, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";
import { Form } from "./Form";
import { VideoPlayer } from "./VideoPlayer";
import MemoSample from "./MemoSample";
let vid = '_resources/themes/expense/dist/videos/sample-video.mp4'

export default function MyApp() {

    useEffect(() => {
        console.log("MyApp rendered")
    });




    const ref = useRef(false);
    const [theme, setTheme] = useState('light');
    const [isPlaying, setIsPlaying] = useState(false);

    const handleChange = () => {
        if(ref.current.checked) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    };

    return (
        // <ThemeContext.Provider value={theme}>
        //     <label>
        //         <input
        //             type="checkbox"
        //             ref={ref}
        //             onChange={handleChange}
        //         />
        //         Dark theme
        //     </label>
        //     <Form />
        //     <>
        //         <button onClick={() => setIsPlaying(!isPlaying)}>
        //             {isPlaying ? 'Pause' : 'Play'}
        //         </button>
        //         <VideoPlayer
        //             isPlaying={isPlaying}
        //             src={vid}
        //         />
        //     </>
        // </ThemeContext.Provider>

        <MemoSample />
    )
}
