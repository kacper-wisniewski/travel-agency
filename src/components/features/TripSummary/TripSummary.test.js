import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () =>{
  it('should render without crashing', () => {
    const cost = 'cost-101';
    const tags = ['tag1', 'tag2', 'tag3'];
    const days = 7;
    const id = 'test-id';
    const name = 'name';
    const component = shallow(<TripSummary days={days} id={id} name={name} cost={cost} tags={tags} />);
    expect(component).toBeTruthy();
  });
  it('should render correct link', () => {
    const id = 'test-id';
    const expectedLink = `/trip/${id}`;
    const cost = 'cost-101';
    const tags = ['tag1', 'tag2', 'tag3'];
    const days = 7;
    const name = 'name';
    const component = shallow(<TripSummary days={days} id={id} name={name} cost={cost} tags={tags} />);
    expect(component.find('Link').prop('to')).toEqual(expectedLink);
  });
  it('should render correct image', () => {
    const image = 'image.jpg';
    const cost = 'cost-101';
    const name = 'name';
    const tags = ['tag1', 'tag2', 'tag3'];
    const id = 'test-id';
    const days = 7;
    const component = shallow(<TripSummary days={days} id={id} cost={cost} image={image} name={name} tags={tags} />);
    expect(component.find('img').prop('src')).toEqual(image);
    expect(component.find('img').prop('alt')).toEqual(name);    
  });
  it('should render correct props', () => {
    const cost = 'cost-101';
    const expectedCost = `from ${cost}`;
    const tags = ['tag1', 'tag2', 'tag3'];
    const days = 7;
    const expectedDays = `${days} days`;
    const id = 'test-id';
    const name = 'name';
    const expectedText = `${expectedDays}${expectedCost}`;
    const component = shallow(<TripSummary days={days} id={id} name={name} cost={cost} tags={tags} />);
    expect(component.find('.details').text()).toEqual(expectedText);
  });
});