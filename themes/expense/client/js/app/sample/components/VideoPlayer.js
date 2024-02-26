import React, { useRef, useEffect } from 'react';

export function VideoPlayer({ src, isPlaying }) {
    const ref = useRef(null);

    //The reason this code isn’t correct is that it tries to do something with the DOM node
    // during rendering.
    // In React, rendering should be a pure calculation of JSX and
    // should not contain side effects like modifying the DOM.

    // if (isPlaying) {
    //     ref.current.play();  // Calling these while rendering isn't allowed.
    // } else {
    //     ref.current.pause(); // Also, this crashes.
    // }

    useEffect(() => {
        if (isPlaying) {
            console.log('Calling video.play()');
            ref.current.play();
        } else {
            console.log('Calling video.pause()');
            ref.current.pause();
        }

        return () => {
            console.log('disconnect');
        }
    }, [isPlaying]); //Specifying [isPlaying] as the dependency
    // array tells React that it should skip re-running your
    // Effect if isPlaying is the same as it was during the previous render.


    //Notes:
    // useEffect(() => {
    //     // This runs after every render
    // });
    //
    // useEffect(() => {
    //     // This runs only on mount (when the component appears)
    // }, []);
    //
    // useEffect(() => {
    //     // This runs on mount *and also* if either a or b have changed since the last render
    // }, [a, b]);

    return <video ref={ref} src={src} loop playsInline />;
}
