const Anchor = ({ children, ...props }) => (
  <a {...props}>
    {children}

    <style jsx>{`
      a {
        color: var(--smoke-blue);
        position: relative;
        z-index: 1;
        margin: auto 10px;
        padding-left: 10px;
        padding-right: 10px;
        cursor: pointer;
      }
      a:before {
          margin: auto 10px;
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
