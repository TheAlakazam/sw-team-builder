import React, {useEffect} from 'react';
import {FormGroup, Label} from 'reactstrap';
import {Input, Submit} from 'formstrap';
import {Formik, Form} from 'formik';
import {isLoading, fetchBuildings, selectBuildings} from './buildingSlice.js';
import {useSelector, useDispatch} from 'react-redux';

const Buildings = () => {
  const initialValues = {};
  const dispatch = useDispatch();
  const loading = useSelector(isLoading);
  const buildings = useSelector(selectBuildings);

  const onSubmit = (values, {setSubmitting}) => {
    setSubmitting(false);
  };

  useEffect(() => {
    dispatch(fetchBuildings());
  }, [dispatch]);

  if (!loading) {
    buildings.forEach((building) => {
      initialValues[building.name] = building.stat_bonus[0];
    });
    console.log(initialValues);
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        {buildings.map((building) => (
          <FormGroup key={building.id}>
            <Label>{building.name}</Label>
            <Input type='select' name={building.name} as='select'>
              {building.stat_bonus.map((stat) => (<option value={stat} key={building.name+stat}>{stat}</option>))}
            </Input>
          </FormGroup>
        ))}
        <Submit withSpinner>Save</Submit>
      </Form>
    </Formik>
  );
};

export default Buildings;
