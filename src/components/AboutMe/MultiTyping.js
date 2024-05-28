import React, { useState, useEffect, useCallback, useMemo } from 'react';

const MultiTyping = () => {
    const [text, setText] = useState("Software Developer");
    const [index, setIndex] = useState(0);

    const texts = useMemo(() => ["Software Developer", "Front End Developer"], []);

    const changeText = useCallback(() => {
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setText(texts[index]);
    }, [index, texts]);

    useEffect(() => {
        const intervalId = setInterval(changeText, 6000);

        return () => clearInterval(intervalId);
    }, [changeText]);

    return (
        <div className="mx-8 animate-typing overflow-hidden whitespace-nowrap border-r-4 md:text-6xl sm:text-3xl font-bold text-[#fe945f]">
            <h1>{text}</h1>
        </div>
    );
};

export default MultiTyping;
