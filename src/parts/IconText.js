import React from 'react';
import Button from 'elements/Button';

export default function IconText() {
  return (
    window.location.pathname !== '/live-stream' ? (
      <Button className="brand-text-icon" href="" type="link">
        Stay<span className="text-gray-900">cation</span>
      </Button>
    ) : (
      <Button className="brand-text-icon" href="" type="link">
        JKT48<span className="text-gray-900">STREAM.</span>
      </Button>
    )
  )
}
