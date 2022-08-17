import { useState } from 'react';
import { StyledButton, StyledContainer } from './button.style';


export interface ButtonComponentTypes {
    colors: string[];
    children?: any;
}

const ButtonComponent = ({ colors, children }: ButtonComponentTypes) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <StyledContainer>
            <StyledButton
                onClick={() => setCurrentIndex((currentIndex + 1) % (colors.length)) }
                color={colors[currentIndex]}
            >
                {children}
            </StyledButton>
        </StyledContainer>
    );
};

export default ButtonComponent;