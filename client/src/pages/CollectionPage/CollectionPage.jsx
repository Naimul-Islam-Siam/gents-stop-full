import React, { useContext } from 'react';
import './CollectionPage.scss';
import CollectionsContext from './../../contexts/Collections/CollectionsContext';
import CollectionItem from '../../components/CollectionItem/CollectionItem';


const CollectionPage = ({ match }) => {
   const collections = useContext(CollectionsContext);
   const collection = collections[match.params.collectionId];
   const { title, items } = collection;

   return (
      <div className="collection-page">
         <h2 className="title">{title.toUpperCase()}</h2>
         <div className="items">
            {
               items.map(item => (<CollectionItem key={item.id} item={item} />))
            }
         </div>
      </div>
   );
};


export default CollectionPage;