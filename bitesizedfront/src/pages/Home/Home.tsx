import * as Component from './styles'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.css'
import { NavBar } from '../../components/navBar/NavBar'
import { CarouselComponent } from '../../components/carousel/Carousel'

export const Home = () => {
  return (
    <>
      <NavBar />
      <CarouselComponent />
    </>
  )
}
