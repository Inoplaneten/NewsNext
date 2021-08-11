import styled from 'styled-components';

const StyledComment = styled.div`
    padding: 20px;
    background-color: #fff;
    border-radius: 16px;
    &:not(last-of-type) {
        margin-bottom: 25px; 
    }
`
export default StyledComment;