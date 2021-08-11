import styled from 'styled-components';

export const StyledCardPost = styled.div`
    max-width: 380px;
    width: 31.53%;
    background-color: #fff;
    border-radius: 24px;
    transition-duration: .7s;
    padding: 32px;
    margin: 0 1.8% 1.8% 0;
    &:hover {
        box-shadow: 24px 24px 8px 0 rgba(${({ theme }) => theme.colors.primaryRGB}, .25);
    }

    @media screen and (${({ theme }) => theme.media.tabletBig}) {
        width: 47%;
        margin: 0 3% 3% 0;
    }

    @media screen and (${({ theme }) => theme.media.phoneBig}) {
        width: 100%;
        margin: 0 auto 25px;
    }

    h3 {
        margin-bottom: 15px;
    }
`
export default StyledCardPost;