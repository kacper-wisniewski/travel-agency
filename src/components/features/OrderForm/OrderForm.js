import React from 'react';
//import styles from './OrderForm.scss';
import {Grid, Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing.json';
import Button from '../../common/Button/Button';
import {formatPrice} from '../../../utils/formatPrice';
import {calculateTotal} from '../../../utils/calculateTotal';
import settings from '../../../data/settings';

const sendOrder = (options, tripCost, tripId, countryCode) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));
  const payload = {
    ...options,
    tripId,
    countryCode,
    totalCost,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  if(options.name != '' && options.contact != '' && options.startDate != '') {
    const fetchOptions = {
      cache: 'no-cache',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };
  
    fetch(url, fetchOptions)
      .then(function(response){
        return response.json();
      }).then(function(parsedResponse){
        console.log('parsedResponse', parsedResponse);
      });
  }
};

const OrderForm = ({options, tripCost, setOrderOption, tripId, countryCode}) => {
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
        <Button onClick={() => sendOrder(options, tripCost, tripId, countryCode)}>Order now!</Button>
      </Row>
    </Grid>
  );
};

OrderForm.propTypes = {
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
  tripCost: PropTypes.string,
  tripId: PropTypes.string,
  countryCode: PropTypes.string,
};
export default OrderForm;