import React from 'react';
import { motion } from 'framer-motion';

interface Props {
    text: string,
    onClick: () => void,
    className?: string
}

const Button: React.FC<Props> = ({ text, onClick, className }) => {
    return (
        <motion.button
            onClick={onClick}
            className={`transition-transform duration-200 transform hover:scale-105 active:scale-95 ${className} p-2 px-4 rounded-lg font-semibold bg-orange-400 hover:bg-orange-500`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.90 }}
        >
            {text}
        </motion.button>
    );
}

export default Button;
