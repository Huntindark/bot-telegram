import { useText } from '@urban-bot/core';
import { useState } from 'react';

const CommandListener = ({ subscribeTo, renderComponent }) => {
    const [reply, setReply] = useState();

    useText(() => {
        setReply(renderComponent);
    }, subscribeTo);

    return <>{reply}</>;
};

export default CommandListener;
