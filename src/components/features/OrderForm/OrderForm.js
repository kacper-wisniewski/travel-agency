import React from 'react';
//import styles from './OrderForm.scss';
import {Grid, Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing.json';

const OrderForm = ({options, tripCost, setOrderOption}) => {
  console.log(options);
  console.log(pricing);
  return (
    <Grid>
      <Row>
        {pricing.map(optionData => (
          <Col md={4} key={optionData.id}>
            <OrderOption setOrderOption={setOrderOption} key={optionData.id} {...optionData} currentValue={options[optionData.id]}/>
          </Col>
        ))
        }
        <Col xs={12}>
          <OrderSummary baseCost={tripCost} tripOptions={options}/>
        </Col>
      </Row>
    </Grid>
  );
};

OrderForm.propTypes = {
  options: PropTypes.node,
  setOrderOption: PropTypes.func,
  tripCost: PropTypes.string,
};
export default OrderForm;