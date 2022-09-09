import * as Component from './styles'
import { NavBar } from '../../components/navBar/NavBar'

export const AddNewArt = () => {
  return (
    <>
      <NavBar />
      <Component.Container>
        <h1>New Art</h1>
        <h6>Art Info</h6>
        <form>
            <label>Art Name: </label>
            <input type='text'></input>
            <label>Art file: </label>
            <input type='file'></input>
        </form>
      </Component.Container>
    </>
  )
}
