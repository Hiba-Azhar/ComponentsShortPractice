var today = new Date()
var time = today.getHours()
var greeting
var customstyle = {
  color: '',
}

if (time < 12) {
  greeting = 'Good Morning'
  customstyle.color = 'red'
} else if (time < 19) {
  greeting = 'Good Afternoon'
  customstyle.color = 'green'
} else {
  greeting = 'Good Night'
  customstyle.color = 'blue'
}

function Greeting() {
  return (
    <h1 className='heading' style={customstyle}>
      {greeting}
    </h1>
  )
}
export default Greeting
