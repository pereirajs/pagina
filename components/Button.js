const Button = ({children, ...props}) => {
  let Component = 'a'
  const buttonProps = { ...props }

  if (!props.hasOwnProperty('href')) {
    Component = 'button'
    buttonProps.type = 'button'
  }

  return (
    <Component {...props}>
      {children}

      <style jsx>{`
        ${Component.toLowerCase()} {
          border: 0;
          background: var(--yellow);
          color: var(--dark-blue);
          padding: .8rem 1rem;
          border-radius: 3px;
          display: inline-block;
          font-size: .8rem;
          text-transform: uppercase;
          text-decoration: none;
          cursor: pointer;
        }
      `}</style>
    </Component>
  )
}

export default Button
