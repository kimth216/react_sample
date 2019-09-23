import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

const sample_Array = () =>{
  // YES
  const array = [1,2,3,4];
  const differentArray = [...array, 5];
  // 혹은 = array.concat(5)
  console.log(array !== differentArray); // true
};

const sample_Object = () =>{
// YES
  const object = {
    foo: 'hello',
    bar: 'world'
  };
  const differentObject = {
    ...object,
    baz: 'bye'
  };
  console.log(differentObject !== object); // true
};



class PhoneInfoList extends Component {
  static defaultProps = {
    data: [],
    onRemove: () => console.warn('onRemove not defined'),
    onUpdate: () => console.warn('onUpdate not defined'),
  };

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.data !== this.props.data;
  };

  render() {
    console.log('render PhoneInfoList');
    const { data, onRemove, onUpdate } = this.props;
    const list = data.map(
      info => (
        <PhoneInfo
          key={info.id}
          info={info}
          onRemove={onRemove}
          onUpdate={onUpdate}
        />)
    );

    return (
      <div>
        {list}
      </div>
    );
  }
}

export default PhoneInfoList;