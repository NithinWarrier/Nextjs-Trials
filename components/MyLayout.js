import Header from './Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
}

const headerStyle={
  margin : 20,
  padding: 20
}

export default function Layout(props) {
  return (
  <div>
    <div style={headerStyle}>
       <Header />
    </div>
    <div style={layoutStyle}>
      {props.children}
    </div>
  </div>
  )
}
