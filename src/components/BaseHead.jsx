import React from 'react';

export default function BaseHead ({ title = 'Immerse the Nations', description = 'Immerse the Nations App for Outreach Teams' }) {
  return (
    <>
      <meta charSet='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <title>
        {title}
      </title>
      <meta name='description' content={description} />
    </>
  );
}
