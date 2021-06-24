import React from 'react'
import Skeleton from "react-content-loader";

function SkeletonRelated() {
  return (
    <Skeleton height={800} width={1000}>
      <rect x="0" y="20" rx="8" ry="8" width="200" height="200" />
      <rect x="0" y="250" rx="0" ry="0" width="200" height="18" />
      <rect x="0" y="275" rx="0" ry="0" width="120" height="20" />
      <rect x="240" y="20" rx="8" ry="8" width="200" height="200" />
      <rect x="240" y="250" rx="0" ry="0" width="200" height="18" />
      <rect x="240" y="275" rx="0" ry="0" width="120" height="20" />
      <rect x="470" y="20" rx="8" ry="8" width="200" height="200" />
      <rect x="470" y="250" rx="0" ry="0" width="200" height="18" />
      <rect x="470" y="275" rx="0" ry="0" width="120" height="20" />
      <rect x="690" y="20" rx="8" ry="8" width="200" height="200" />
      <rect x="690" y="250" rx="0" ry="0" width="200" height="18" />
      <rect x="690" y="275" rx="0" ry="0" width="120" height="20" />

      <rect x="0" y="340" rx="8" ry="8" width="200" height="200" />
      <rect x="0" y="570" rx="0" ry="0" width="200" height="18" />
      <rect x="0" y="595" rx="0" ry="0" width="120" height="20" />
      <rect x="240" y="340" rx="8" ry="8" width="200" height="200" />
      <rect x="240" y="570" rx="0" ry="0" width="200" height="18" />
      <rect x="240" y="595" rx="0" ry="0" width="120" height="20" />
      <rect x="470" y="340" rx="8" ry="8" width="200" height="200" />
      <rect x="470" y="570" rx="0" ry="0" width="200" height="18" />
      <rect x="470" y="595" rx="0" ry="0" width="120" height="20" />
      <rect x="690" y="340" rx="8" ry="8" width="200" height="200" />
      <rect x="690" y="570" rx="0" ry="0" width="200" height="18" />
      <rect x="690" y="595" rx="0" ry="0" width="120" height="20" />
    </Skeleton>
  )
}

export default SkeletonRelated
