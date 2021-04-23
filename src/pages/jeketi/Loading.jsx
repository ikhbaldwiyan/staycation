import React from 'react'
import PulseLoader from "react-spinners/PulseLoader";

export default function Loading() {
  return (
    <div style={{marginBottom: '8px', marginTop: '4px'}}>
      <PulseLoader
        size={12}
        color="teal"
      />
    </div>
  )
}
