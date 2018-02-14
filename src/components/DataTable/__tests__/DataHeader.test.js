import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import DataHeader from '../DataHeader'

describe('DataHeader component', () => {
  it('Should render successfully', () => {
    const component = shallow(<DataHeader />);
    expect(component.exists()).toEqual(true);
  });

  it('Should show row class', () => {
    const component = shallow(<DataHeader />);
    expect(component.find('.table-row').length).toEqual(1);
  });

  it('Should show multiple columns', () => {
    const columns = [{ name: 'name' }, { name: 'id'}];
    const component = shallow(<DataHeader columns={columns} />);
    expect(component.find('.num').length).toEqual(2);
  });

  it('Should show multiple static columns', () => {
    const columns = [{ name: 'name' }, { name: 'id'}];
    const component = shallow(<DataHeader columns={columns} isStatic={true} />);
    expect(component.find('.num').length).toEqual(2);
  });
});