import styled from 'styled-components';

const StyledCardsPosts = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 -1.8% -1.8% 0;
    @media screen and (${({ theme }) => theme.media.tabletBig}) {
        margin: 0 -3% -3%;
    }
    @media screen and (${({ theme }) => theme.media.phoneBig}) {
        margin: 0 0 -25px;
    }
`
export default StyledCardsPosts;