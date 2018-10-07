const Anchor = ({ children, ...props }) => (
  <a {...props}>
    {children}

    <style jsx>{`
      a {
        color: currentColor;
        position: relative;
      }
      a:before {
        content: '';
        position: absolute;
        top: 0;
        left: -2px;
        right: -2px;
        bottom: 0;
        background: var(--yellow);
        z-index: -1;
        transform: rotate(-1deg) translateY(1px);
      }
    `}</style>
  </a>
);

export default Anchor;
