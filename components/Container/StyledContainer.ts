import styled from 'styled-components';

const StyledContainer = styled.div`
    max-width: 1140px;
    margin: 0 auto;

    @media screen and (${({ theme }) => theme.media.desktopSmall}) {
        max-width: 960px;
    }

    @media screen and (${({ theme }) => theme.media.tabletBig}) {
        max-width: 720px;
    }

    @media screen and (${({ theme }) => theme.media.tabletSmall}) {
        max-width: 540px;
    }

    @media screen and (${({ theme }) => theme.media.phoneBig}) {
        max-width: 100%;
        padding: 0 15px;
    }
`
export default StyledContainer;