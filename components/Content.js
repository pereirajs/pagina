const Content = ({ children, light, component: Component, ...props }) => (
  <Component {...props}>
    {children}

    <style jsx>{`
      ${Component} {
        color: ${light ? '#fff' : 'var(--smoke-blue)'};
      }
      ${Component} :global(h1) {
        color: ${light ? '#fff' : 'var(--dark-blue)'};
        margin: 0 0 1rem;
        font-weight: bold;
      }
    `}</style>
  </Component>
);

Content.defaultProps = {
  component: 'div'
};

export default Content;
