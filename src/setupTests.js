import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

class LocalStorageMock {
  store = {};

  clear = () => {
    this.store = {};
  };

  getItem = name => (this.store[name] || null);

  setItem = (name, value) => {
    this.store[name] = value.toString() || 'undefined';
  };

  removeItem = (name) => {
    delete this.state[name];
  };
}

global.localStorage = new LocalStorageMock();
