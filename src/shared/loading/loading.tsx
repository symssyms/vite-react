import {Box, SxProps}     from '@mui/material';
import {FC, ReactElement} from 'react';

const Loading: FC = (): ReactElement => {

    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

    return (
        <Box sx={loadingStyles}>
            <Box sx={ldioStyles}>
                {Array.from({length: 12}).map((_, index: number): ReactElement => (
                    <Box
                        key={index}
                        sx={{
                            ...divStyles,
                            transform: `rotate(${index * 30}deg)`,
                            animationDelay: `-${(12 - index) / 12}s`,
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default Loading;

const loadingStyles: SxProps = {
    top: '50%',
    left: '50%',
    right: '50%',
    bottom: '50%',
    position: 'absolute',
    width: '200px',
    height: '200px',
    display: 'inline-block',
    overflow: 'hidden',
    background: 'white',
    margin: 'auto',
};

const ldioStyles: SxProps = {
    width: '100%',
    height: '100%',
    position: 'relative',
    transform: 'translateZ(0) scale(1)',
    backfaceVisibility: 'hidden',
    transformOrigin: '0 0',
};

const divStyles: SxProps = {
    position: 'absolute',
    animation: 'ldio-yzaezf3dcmj linear 1s infinite',
    background: '#00e1ff',
    width: '12px',
    height: '24px',
    borderRadius: '6px / 12px',
    transformOrigin: '6px 52px',
    boxSizing: 'content-box',
};

const keyframes = `@keyframes ldio-yzaezf3dcmj { 0% { opacity: 1; } 100% { opacity: 0; } }`;
