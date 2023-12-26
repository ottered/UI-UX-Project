import styled from "styled-components"
export const Card2 = styled.div`
    position: absolute;
    aspect-ratio: 1/1/5;
    display: flex;
    flex-direction: column-reverse;
    flex: 0 0 auto;
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-sizing: border-box;
    box-shadow: inset 0px -10em 30px rgba(0,0,0,0.8);
    text-shadow: white 1px 0 10px;
    opacity: 0;
    pointer-events: none;
    transition: 1s;
    padding: 20px;
    color: white; 
`;

export const Rating = styled.div`
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    height: 30%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
export const RatingIcon = styled.div`
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin: 10px;
    color:  yellow;
    white-space: pre-wrap;
    font-size: ${props=> props.theme.textSizeTitle};
    @media (max-width: 180px) {
        font-size: ${props=> props.theme.textSizeTextM500};
    }
`;
export const RatingText = styled.div`
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    align-items: center;
    justify-content: center;
    color:  yellow;
    font-size: ${props=> props.theme.textSizeL};
`;

export const Genres = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const GenresText = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: 100;
    font-size: ${props=> props.theme.textSizeL};
`;

export const Details = styled.button`
    cursor: pointer;
    border: solid;
    width: 100%;
    margin: 0px 0px;
    height: 40px;
    flex: 0 0 auto;
    background-color:  ${props => props.theme.accentColor1};
    color: white;
    font-size: ${props=> props.theme.textSizeL};
    font-weight: 600;
    &:hover{
        background-color: rgba(104, 104, 104, 0.8);
    }
`;

export const Film = styled.div`
    cursor: pointer;
    display: flex;  
    flex-direction:column ;
    background-color: ${props => props.theme.iconColor};
    width: 100%;
    box-shadow: 0px 0px 5px ${props => props.theme.shadowColor};
    border-radius:0px;
    overflow: hidden;
    transition: all 0.3s ease;
    &:hover{
        box-shadow: 0px 15px 30px ${props => props.theme.shadowColor};
        transition: all 0.3s ease;
        & ${Card2}{
            transition: 0.3s;
            opacity: 1;
            pointer-events: all;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const Cards = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
    overflow: hidden;
`;

export const Card1 = styled.img` 
    aspect-ratio: 1/1/5;
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    object-fit: cover;
    box-sizing: border-box;
`;

export const Name = styled.div`
    flex: 0 0 auto;
    flex-wrap: normal;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font: small-caps bold 24px/1 sans-serif;
    font-size: ${props => props.theme.textSizeTextM};
    letter-spacing: 1px;
    overflow: visible;
    margin: 10px 0px 0px 0px;
    padding: 0px 10px;
    box-sizing: border-box;
    text-overflow: ellipsis;   
    white-space: normal;
    @media (max-width: 992px) and (min-width: 768px)  {
        font-size: ${props => props.theme.textSizeTextM900};
    }
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM700};
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM500};
    }
`;

export const Text = styled.div`
    margin: 10px 0px 10px 0px;
    padding: 0px 0px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex: 0 0 auto;
    overflow: hidden;
    word-wrap: break-word;
    word-break: break-all;
    width: 100%;
    font-weight: 600;
    font-size: smaller;
    font-family: 'Helvetica Neue Thin', 'Hevletica Neue';
`;
export const TextContainer = styled.div`
    display: flex;
    justify-content: space-between;  
background-color: ${props => props.theme.iconColor};

`;



