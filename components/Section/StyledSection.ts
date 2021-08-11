import styled from 'styled-components';

const SectionStyle = styled.section`
    padding: 100px 0;
    @media screen and (${({ theme }) => theme.media.desktopSmall}) {
        padding: 10vmin 0;
    }
`
export default SectionStyle;