import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ReraRegistration from './ReraRegistration';
import ReraExtension from './ReraExtension';

function InsightBlog() {
    const {id} = useParams()

  return (
<div className=' pt-28 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50'>
{id === 'rera-registration' && <ReraRegistration />}
{id === 'rera-extension' && <ReraExtension />}
</div>
  );
}

export default InsightBlog;