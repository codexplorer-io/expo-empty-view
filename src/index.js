import React from 'react';
import { useTheme } from 'react-native-paper';
import {
    EmptyRoot,
    Text,
    IconContainer
} from './styled';

export const EmptyView = ({
    message,
    icon,
    shouldFillParent = true
}) => {
    const theme = useTheme();

    const { Icon } = theme;

    return (
        <EmptyRoot shouldFillParent={shouldFillParent}>
            <IconContainer>
                <Icon
                    name={icon}
                    size={150}
                    color={theme.colors.foreground}
                />
            </IconContainer>
            <Text>{message}</Text>
        </EmptyRoot>
    );
};
