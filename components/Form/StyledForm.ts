import styled from 'styled-components';
import { Props } from './Form';

const StyledForm = styled.form<Props>`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.align || 'flex-start'};
`
export default StyledForm;