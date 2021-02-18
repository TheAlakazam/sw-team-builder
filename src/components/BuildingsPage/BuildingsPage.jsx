import React from 'react';
import {Card, CardBody} from 'reactstrap';
import Buildings from '../../features/buildings/Buildings.jsx';

const BuildingsPage = () => {
  return (
    <Card>
      <CardBody>
        <Buildings/>
      </CardBody>
    </Card>
  );
};

export default BuildingsPage;
