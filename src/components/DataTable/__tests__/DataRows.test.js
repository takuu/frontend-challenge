import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import DataRows from '../DataRows'

describe('PlayerList component', () => {
  it('Should render successfully', () => {
    const component = shallow(<DataRows />);
    expect(component.exists()).toEqual(true);
  });

  it('Should have div class name', () => {
    const component = shallow(<DataRows />);
    expect(component.find('.table-container').length).toEqual(1);
  });

  it('Should be empty', () => {
    const component = shallow(<DataRows />);
    expect(component.find('.table-row').length).toEqual(0);
  });

  it('Should not be empty', () => {
    const list = [
      { id: '1', name: 'test' },
      { id: '2', name: 'foo' },
    ];
    const columns = [{ name: 'name' }];
    const component = shallow(<DataRows data={list} columns={columns} />);
    expect(component.find('.table-row').length).toEqual(2);
  });
});