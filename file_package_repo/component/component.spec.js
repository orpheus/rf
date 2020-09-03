import test from 'tape';
import React from 'react';
import { shallow } from 'enzyme';
import Placeholder_pascal from './component';
import sinon from 'sinon';

const sandbox = sinon.createSandbox();
// const onClickStub = sandbox.stub();

const fakeRequiredProps = {
  // onClick: onClickStub,
};

test('<Placeholder_pascal>', t => {
  let wrapper;

  t.equals(typeof Placeholder_pascal.propTypes, 'object', 'PropTypes are defined');

  wrapper = shallow(<Placeholder_pascal {...fakeRequiredProps} />);
  t.equals(wrapper.find('.Placeholder_kebab').length, 1, 'Placeholder_pascal is rendered');

  wrapper = shallow(<Placeholder_pascal {...fakeRequiredProps} className="fake-classname" />);
  t.equals(wrapper.find('.fake-classname').length, 1, 'Custom classname is added');

  t.end();
});
