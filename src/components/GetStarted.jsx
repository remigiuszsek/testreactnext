import styles from '../style'
import { arrowUp } from '../assets'

// const [toggleColor, setToggleColor] = useState(false)
function change() {
  const get = document.getElementById('get')
  const started = document.getElementById('started')
  get.classList.add('make-white')
  started.classList.add('make-white')
}

function change2() {
  const get = document.getElementById('get')
  const started = document.getElementById('started')
  get.classList.remove('make-white')
  started.classList.remove('make-white')
}

function change3() {
  const cStroke = document.getElementById('c-stroke')
  cStroke.classList.remove("bg-blue-gradient")
}

function change4() {
  const cStroke = document.getElementById('c-stroke')
  cStroke.classList.add("bg-blue-gradient")
}

const GetStarted = () => (
  <div id="c-stroke" onMouseOver={change3} onMouseOut={change4} className={`${styles.flexCenter}  w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px]`}>
    <div onMouseOver={change} onMouseOut={change2} className={`${styles.flexCenter} get-started flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row items-center`}>
        <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
          <span id="get" className={`text-gradient`}>Get</span>
        </p>
        <img src={arrowUp} className="w-[23px] h-[23px] object-contain"/>
      </div>
      <p className="font-poppins font-medium text-[18px] leading-[23px]">
        <span id="started" className="text-gradient">Started</span>
      </p>
    </div>
  </div>
)

export default GetStarted