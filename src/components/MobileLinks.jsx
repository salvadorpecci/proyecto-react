import Links from './Links'

export default function MobileLinks ({ isNavOpen, setIsNavOpen }) {
  const classes = `mobileLinks ${isNavOpen ? '' : 'none'}`
  return (
    <>
    <ul className={classes}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Links setIsNavOpen={setIsNavOpen} />
      </div>
    </ul>
    <style>
    {`
          .mobileLinks {
            background-color: hsl(var(--bg));
            position: absolute;
            width: 100%;
            height: 100vh;
            top: 0;
            left: 0;
            z-index: 10;
            display: grid;
            place-items: center;
          }  
          .none {
            display: none;
          }
    `}
    </style>
    </>
  )
}
