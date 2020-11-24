import styled from 'styled-components';

export const MenuItemContainer = styled.div`
   height: ${({ size }) => (size ? '380px' : '240px')};
   min-width: 30%;
   flex: 1 1 auto;
   display: flex;
   align-items: center;
   justify-content: center;
   border: 1px solid black;
   margin: 0 7.5px 15px;
   overflow: hidden;

   &:hover {
      cursor: pointer;

      & .background-image {
         transform: scale(1.2);
         transition: transform 3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      }
   }

   &:first-child {
      margin-right: 7.5px;
   }

   &:last-child {
      margin-left: 7.5px;
   }

   @media screen and (max-width: 800px) {
      height: 200px;
   }
`;