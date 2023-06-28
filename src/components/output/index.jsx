import { Text } from '@urban-bot/core';
import { useStore } from '../../store';

const Output = () => {
    const { state } = useStore();

    return (
        <>
            <Text>Usted escribio</Text>
            <Text>{state.holder}</Text>
            <Text>{state.number}</Text>
            <Text>{state.email}</Text>
            <Text>{state.type}</Text>
            <Text>{state.address}</Text>
        </>
    );
};

export default Output;
