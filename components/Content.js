const Content = ({ children, component: Component, ...props }) => (
  <Component {...props}>
    {children}

    <style jsx>{`
      ${Component} {
        color: var(--smoke-blue);
      }
      ${Component} :global(h1) {
        color: var(--dark-blue);
        margin: 0 0 1rem;
      }
    `}</style>
  </Component>
);

Content.defaultProps = {
  component: 'div'
}

export default Content;
