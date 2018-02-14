import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import DataTable from '../DataTable'

describe('DataTable component', () => {
  it('Should render successfully', () => {
    const component = shallow(<DataTable />);
    expect(component.exists()).toEqual(true);
  });

  it('Should have div class name', () => {
    const component = shallow(<DataTable />);
    expect(component.find('.table-container').length).toEqual(1);
  });

  it('Should be empty', () => {
    const component = shallow(<DataTable />);
    expect(component.find('.list-group-item').length).toEqual(0);
  });
});