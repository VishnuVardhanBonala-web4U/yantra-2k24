import styled from "styled-components";

export const ProductsContainer = styled.div`
    width: 100vw;
    overflow-x: hidden;
    min-height: 100vh;
    padding: 3rem calc((100vw - 1300px)/2);
    background: #38352c;

    color: #fff;
`;

export const ProductWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
`;

export const ProductCard = styled.div`
    margin: 0 2rem;
    line-height: 2;
    width: 350px;
    
    margin-bottom: 2rem;
    border: solid 1px #fff;
    border-radius: 0.2rem;
    padding: 10px 10px 0px 10px;
    background: rgb(205,205,207);
    background: linear-gradient(90deg, rgba(205,205,207,1) 0%, rgba(234,245,249,1) 100%);
    box-shadow: 0 4px 8px 0 rgba(256, 256, 256, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const ProductImg = styled.img`
    height: 250px;
    min-width: 270px;
    margin-left: 0px;
    max-width: 100%;
    border-radius: 0.4rem;
    margin-bottom: 0;
    padding-bottom: 0;
`;

export const ProductsHeading = styled.h1`
    font-size: clamp(rem, 2.5vw, 3rem);
    text-align: center;
    margin-bottom: 1rem;
    margin-top: 0;
    padding-top: 0;
`;
export const ProductsPara = styled.p`
   font-size: clamp(rem, 2.5vw, 3rem);
    text-align: center;
    margin-bottom: 1rem;
    margin-top: 0;
    padding-top: 0;
    margin: 0 15vw 5vh 15vw;

    @media screen and (max-width: 800px) {
        margin: 0 5vw 5vh 5vw;
        font-size: clamp(0.8rem, 1.5vw, 3rem);
    }
    
`;

export const ProductTitle = styled.h2`
    font-weight: 400;
    font-size: 1.5rem;
    margin-top: 0;
    padding-top: 0;
    color: #114092;
    line-height: 0;
`;

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    text-align: center;
`;

export const ProductDesc = styled.p`
    margin-bottom: 1rem;
    color: black;
    text-align: justify;
    font-size: 0.8rem;
    
`;

export const ProductPrice = styled.p`
    margin-bottom: 0;
    font-size: 2rem;
    color: #000;
    line-height: 1;
    margin-top: 1rem;
    font-size: clamp(0.4rem, 0.8rem, 1rem);
`;

export const ProductButton = styled.button`
    font-size: 1rem;
    padding: 1rem 7rem;
    border: none;
    border-radius: 3px;
    background: #e31837;
    color: #fff;
    transition: 0.2s ease-out;

    &:hover {
        background: #ffc500;
        transition: 0.2s ease-out;
        cursor: pointer;
        color: #000;
    }
`;