import styled from 'styled-components';

export const Details = styled.section`
    display: flex; 
    width: 100%;
    flex: 0 0 auto;
    justify-content: center;
    background-color: ${props => props.theme.bachgroundColor};
    transition: 0.1s;
    position: relative;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 1200px;
    padding: 0px 20px;
    margin: 0px 0px;
    box-sizing: border-box;
    z-index: 1;
    @media (min-width: 1200px){
        width: 1200px;
    }
    @media (max-width: 1200px) and (min-width: 992px)  {
        width: 100%;
    }
    @media (max-width: 992px) and (min-width: 768px)  {
        padding: 0px 20px;   
        margin: 0px 0px;
        width: 100%;
    }
    @media (max-width: 768px) and (min-width: 576px)  { 
        padding: 0px 20px;   
        margin: 0px 0px;
        width: 100%;
    }
    @media (max-width: 576px)  {
        padding: 0px 20px;
        margin: 0px 0px;
        width: 100%;
    }
`;

export const Data = styled.div`
    display: grid;
    width: 100%;
    align-items: center;
    align-self: center;
    grid-template-columns: 1fr 2fr ;
    grid-gap: 20px;
    border-top: 1px solid ${props => props.theme.accentColor1};
    border-bottom: 1px solid ${props => props.theme.accentColor1};
    padding: 20px 0px;
    box-sizing: border-box; 
    @media (min-width: 1200px){   
    }
    @media (max-width: 1200px) and (min-width: 992px)  {     
    }
    @media (max-width: 992px) and (min-width: 768px)  {     
    }
    @media (max-width: 768px) and (min-width: 576px)  {    
    }
    @media (max-width: 576px)  {
        grid-template-columns: 1fr;
    }
`;


export const Image = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
`;
export const Img = styled.img`
    aspect-ratio: 1/1/4;
    display: flex;
    width: 100%;
    object-fit: cover;
    box-sizing: border-box;
    transition: 0.5s;
    box-shadow: 0px 15px 30px ${props=>props.theme.shadowColor};
    margin: 0px 0px 20px 0px;
`;

export const Buttons = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 0px;
    width: 100%;
    @media (max-width: 768px) and (min-width: 576px)  {
        grid-template-columns: 1fr  ;
    }
    @media (max-width: 576px)  {
        grid-template-columns: 1fr  ;
    }

`;

export const Button = styled.a`
    cursor: pointer;
    display: flex;
    width: 100%;
    height: 40px;
    align-items: center;
    justify-content: center;
    color:white;
    background-color: aqua;
    border: 0px;
    border-radius:10px;
    font-size: ${props=>props.theme.textSizeTextM};
    &:hover{
        opacity: 0.9;
    }
`;

export const Description = styled.div`
    display: grid;
    align-items: flex-start;
    align-self: flex-start;
    grid-template-columns: 1fr;
    grid-gap: 20px;
    font-feature-settings: "smcp", "zero";
    text-shadow: white 1px 0 10px;
`;

export const Title = styled.div`
    display: flex;
    font-size: ${props=> props.theme.textSizeTitle};
    letter-spacing: 1px;
    font-weight: 500;
    text-shadow: white 1px 0 10px;
`;
export const DescriptionFull = styled.div`
    display: flex;
    font-size: ${props=> props.theme.textSizeTextM};
    line-height: 25px;
    letter-spacing: 1px;

`;
export const Statistic = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap:20px;
    @media (max-width: 768px) and (min-width: 576px)  {
        grid-template-columns: 1fr 1fr  1fr 1fr;
    }
    @media (max-width: 576px)  {
        grid-template-columns: 1fr 1fr  ;
    }
`;
export const TorrentsTitle = styled.div`
    display: flex;
    width: 100%;
    flex: 0 0 auto;
    font-weight: 600;
    font-size: ${props=> props.theme.textSizeTextL};
    color: ${props=> props.theme.textColor};
    text-shadow: white 1px 0 6px;
`;

export const Torrents = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
`;

export const UserCommentsText = styled.div`
    display: flex;
    font-size: ${props=> props.theme.textSizeTitle};
    letter-spacing: 1px;
    font-weight: 700;
    width: 100%;
    justify-content: start;
    margin: 30px 0px 0px 0px;
    text-align: start;
    text-shadow: white 1px 0 10px;
`;


export const CommentSection = styled.div`
  margin:15px;
  margin-bottom: 24px;
  color: white;
  font-feature-settings: "smcp", "zero";
  text-shadow: white 1px 0 6px;
  
`;

export const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const UserNameInput = styled.input`
  display: flex;
  flex-direction: row;
  margin: 10px;    
  font-size: ${props=> props.theme.textSizeTextL700};
  @media (max-width: 484px) and (min-width: 336px)  {
    width: 150px;
    height: 70px;
    }
  @media (max-width: 336px)  {
        width: 100px;
        height: 70px;
    }
`;

export const CommentSubmitButton = styled.button`
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

export const CommentText = styled.ul`
  font-weight: 500;
  list-style: none;
  padding: 0px;  
  font-size: ${props=> props.theme.textSizeTextL700};
  color: ${props => props.theme.textColor};
  text-shadow: white 1px 0 10px;
`;

export const NameText = styled.ul`
  font-weight: 500;
  list-style: none;
  padding: 0px;  
  margin: 20px 4px 20px 0;
  font-size: ${props=> props.theme.textSizeTextL700};
  color: ${props => props.theme.textColor};
  text-shadow: white 1px 0 10px;
`;

export const CommentItem = styled.div`
  background-color: ${props=> props.theme.CardColor};
  padding: 8px 20px 8px 20px;
  margin-bottom: 8px;
  border-radius: 4px;
`;
export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  color: ${props => props.theme.textColor};
  text-shadow: white 1px 0 10px;
  
`;
export const CommentInf = styled.div`
  display: flex;
  flex-direction: row;
  color: ${props => props.theme.textColor};
  text-shadow: white 1px 0 10px;
  
`;
export const TextArea = styled.input`
display: flex;
width: 100%
height: 200%;
flex-direction: row;
margin: 10px;    
font-size: ${props=> props.theme.textSizeTextL700};
`;

export const InfoText = styled.div`
    display: flex;
    font: small-caps bold 24px/1 sans-serif;
    font-size: ${props => props.theme.textSizeTextL};
    letter-spacing: 1px;
    overflow: visible;
    color: ${props => props.theme.textColor};
    text-shadow: white 1px 0 10px;
`;