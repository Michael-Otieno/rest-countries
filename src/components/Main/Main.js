import './Main.css'

function Main(props){
  return (
    <div className={props.darkMode ? "mainDark" : ""}>
      Mains
    </div>
  )
}

export default Main;