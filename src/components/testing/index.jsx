import { Text } from '@urban-bot/core';
import { useStore } from '../../store';

const Testing = () => {
    const { state } = useStore();

    return <Text>Usted escribio {state}</Text>;
};

export default Testing;
