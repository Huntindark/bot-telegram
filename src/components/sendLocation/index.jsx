import React, { useState } from 'react';
import { Location, Text, useCommand } from '@urban-bot/core';

const SendLocation = () => {
    const [latitude, setLatitude] = useState();
    useCommand(() => {
        setLatitude(Number(-34.91376));
        setLatitude(undefined);
    }, '/dire');

    if (latitude === undefined) return;
    return (
        <>
            <Location latitude={latitude} longitude={-57.948153} />
            <Text>Nuestra direccion es 6 y 50, en el Baxar X!</Text>
        </>
    );
};

export default SendLocation;
