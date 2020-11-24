import styled from 'styled-components';
import CustomButton from './../CustomButton/CustomButton';

export const CollectionItemContainer = styled.div`
   width: 22vw;
   display: flex;
   flex-direction: column;
   height: 350px;
   align-items: center;
   position: relative;

   &:hover {
      .image {
         opacity: 0.8;
      }

      .add-to-cart-button {
         display: flex;
         opacity: 0.85;
         justify-content: center;
      }
   }

   @media screen and (max-width: 800px) {
      width: 43vw;
      
      &:hover {
         .image {
            opacity: unset;
         }

         .add-to-cart-button {
            opacity: unset;
         }
      }
   }
`;

export const BackgroundImage = styled.div`
   width: 100%;
   height: 95%;
   background-size: cover;
   background-position: center;
   margin-bottom: 5px;
   background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
   width: 100%;
   height: 5%;
   display: flex;
   justify-content: space-between;
   font-size: 18px;
`;

export const NameContainer = styled.span`
   width: 90%;
   margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
   width: 10%;
`;

export const AddButton = styled(CustomButton)`
   width: 80%;
   position: absolute;
   top: 250px;
   opacity: 0.7;
   display: none;

   @media screen and (max-width: 800px) {
      display: block;
      opacity: 0.7;
      min-width: unset;
      padding: 0 10px;
   }
`;