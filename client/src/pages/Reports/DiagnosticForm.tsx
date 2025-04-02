import React, { useState } from 'react';
import TopBar from './TopBar';
import Grid from './Grid';

function DiagnosticForm() {

  return (
    <div className="bg-white rounded-lg pb-4 shadow-lg min-w-[800px]">
      <TopBar/>
      <Grid />
    </div>
  );
}

export default DiagnosticForm;