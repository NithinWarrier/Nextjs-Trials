import Link from 'next/link'

const linkStyle = {
  marginRight: 20
}

export default function Header() {
  return (
    <div>
      <Link href="/">
        <a className="movieBuzz">Movie<b>Buzz</b></a>
      </Link>
      <span className="subSection">
        <Link href="/"   >
          <a style={linkStyle}>News</a>
        </Link>

        <Link href="/"   >
          <a style={linkStyle}>Movies</a>
        </Link>

        <Link href="/"   >
          <a style={linkStyle}>TV</a>
        </Link>
      </span>

      <span className="Login"> 
        <a>login</a>
      </span>

      <style jsx>{`
        a{
          text-decoration: none;
          font-family: 'Montserrat';
          color: black;
        }

        .movieBuzz{
          font-size: 23pt;
        }

        .subSection{
          position: absolute;
          left: 50%;
          transform: translate(-50%);
          margin-top : 1%;
        }

        .Login{
          position: absolute;
          right: 3%;
          margin-top: 1%;
        }
      `}</style>
    </div>
  )
}
