import React from 'react';
import SectionStyle from './StyledSection';

const Section: React.FC = props => {
    return (
        <SectionStyle {...props} />
    )
};

export { Section };