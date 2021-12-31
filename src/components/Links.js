import React, { useEffect } from 'react';

import LinkForm from 'components/LinkForm';
import { db } from 'services/firebase';

const Links = () => {
  const addOrEdit = async (linkObject) => {
    await db.collection('links').doc().set(linkObject);
    console.log('New task added');
  };

  const getLinks = () => {
    db.collection('links').onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
      });
    });
  };
  useEffect(() => {
    getLinks();
  }, []);

  return (
    <div>
      <LinkForm addOrEdit={addOrEdit} />
    </div>
  );
};

export default Links;
