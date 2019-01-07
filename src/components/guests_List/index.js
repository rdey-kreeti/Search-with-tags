import React from 'react';

const GuestsList = ({data}) => {
  if (data.length) {
    return (
      <ul>
        {data.map((item, index) => <li key={index}>{item.name}</li>)}
      </ul>
    )
  } else {
    return (
      <section>No Matches Found</section>
    )
  }
}

export default GuestsList;