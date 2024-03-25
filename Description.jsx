import React from 'react';

function Description({ item }) {
  const {web_description} = item

  return (
    <div>
      <h4>Package:</h4>
      <div dangerouslySetInnerHTML={{ __html: web_description }} />
    </div>
  );
}

export default Description;