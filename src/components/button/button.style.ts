import styled, { css } from 'styled-components';
import { Button } from 'antd';

export const StyledButton = styled(Button)`
    ${({ color }) => css`
        color: black;
        ${color && `background: ${color} !important;`}
    `}
`;

export const StyledContainer = styled.div``;