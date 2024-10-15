import js from '../assets/images/js.png'
import node from '../assets/images/node.png'
import react from '../assets/images/react.png'
import python from '../assets/images/python.png'
import pandas from '../assets/images/Pandas.png'
import mongodb from '../assets/images/MongoDB.png'
import jupyter from '../assets/images/Jupyter.png'
import django from '../assets/images/Django.png'
import matplotlib from '../assets/images/Matplotlib.png'
import Postgres from '../assets/images/postgresSQL.png'
import Express from '../assets/images/Express.png'
import Numpy from '../assets/images/Numpy.png'
import Selenium from '../assets/images/Selenium.png'
import Tailwind from '../assets/images/Tailwind CSS.png'
import UserInteraction from './UserInteraction'
const Tools = () => {
  const [ref, isVisible] = UserInteraction({
    threshold: 0.1,
  });
  return (
    <div>
      <div ref={ref} className={`${isVisible ? 'animate-slideInUp' : 'opacity-0 translate-y-10'}`}>
        <div>
          <h2 className="text-center text-gray-900 text-3xl font-semibold mb-6">Tools I work with</h2>
        </div>
        <div className="flex size-16 gap-3 text-center mx-40 my-10">
          <img src={js} alt="icon" />
          <img src={react} alt="icon" />
          <img src={Tailwind} alt="icon" />
          <img src={node} alt="icon" />
          <img src={Express} alt="icon" />
          <img src={mongodb} alt="icon" />
          <img src={Postgres} alt="icon" />
          <img src={python} alt="icon" />
          <img src={pandas} alt="icon" />
          <img src={Numpy} alt="icon" />
          <img src={matplotlib} alt="icon" />
          <img src={django} alt="icon" />
          <img src={jupyter} alt="icon" />
          <img src={Selenium} alt="icon" />
        </div>
      </div>
    </div>
  )
}

export default Tools