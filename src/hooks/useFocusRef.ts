import React, { useEffect, useRef } from 'react';

function useFocusRef<T extends HTMLElement>(childIndex?: number) {
  const focusTargetRef = useRef<T>(null);

  const focusOnTarget = () => {
    if (!focusTargetRef.current) return;
    if (!childIndex) {
      focusTargetRef.current.focus();
      return;
    }
    const targetChildren = focusTargetRef.current.children[childIndex];
    if (targetChildren instanceof HTMLElement) targetChildren.focus();
  };

  useEffect(() => {
    focusOnTarget();
  }, [focusTargetRef]);

  return { focusTargetRef };
}

export default useFocusRef;
