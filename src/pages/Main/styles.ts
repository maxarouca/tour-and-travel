import styled from 'styled-components'
import { shade } from 'polished'

interface ButtonProps {
  outlined?: boolean
}

export const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  padding: 5rem;
  /* text-align: center; */
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
`

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  width: 100%;
`

export const Logo = styled.a`
  /* width: 25rem; */
  /* margin-bottom: 2rem; */
`

export const Nav = styled.nav`
  margin-left: auto;
`

export const NavLink = styled.a`
  font-size: 16px;
  padding: 10px 20px;
  text-decoration: none;
  color: #b8becd;
  transition: color 0.2s;
  margin: 5px;

  &:hover {
    color: #000;
  }
`

export const Button = styled.a<ButtonProps>`
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 15px;
  margin: 5px;
  text-decoration: none;
  transition: all 0.2s;

  background-color: ${(props) => (props.outlined ? '#FFF' : '#fb8f1d')};
  color: ${(props) => (props.outlined ? '#fb8f1d' : '#FFF')};
  border: ${(props) => (props.outlined ? '1px solid #fb8f1d' : 'none')};

  &:hover {
    background-color: ${(props) =>
      props.outlined ? '#FFF' : `${shade(0.1, '#fb8f1d')}`};
    border-color: ${(props) =>
      props.outlined ? `${shade(0.2, '#fb8f1d')}` : 'transparent'};
    color: ${(props) => (props.outlined ? `${shade(0.2, '#fb8f1d')}` : '#FFF')};
  }
`

export const Hero = styled.section`
  margin-top: 70px;

  form {
    width: 50%;

    h1 {
      font-family: 'Playfair Display', serif;
      font-size: 64px;
      color: #000;
      margin-bottom: 50px;
      width: 400px;
    }

    h2 {
      color: #000;
      margin-bottom: 40px;
      position: relative;
      font-size: 22px;
      font-family: 'Inter', sans-serif;

      &::after {
        position: absolute;
        content: '';
        width: 30px;
        height: 2px;
        background-color: #000;
        top: calc(100% + 16px);
        left: 0px;
      }
    }

    select {
      width: 200px;
      padding: 10px;
      margin: 10px 10px 10px 0;
      border-radius: 6px;
      border: 0.8px solid #afb0b9;
      color: #4a4c53;
    }

    div {
      margin-bottom: 30px;
    }

    a {
      padding: 10px 40px;
      margin-left: 0px;
    }
  }

  img {
    width: 45%;
  }
`

export const About = styled.section`
  img {
    width: 45%;
  }

  div {
    width: 400px;
    margin-left: 100px;

    h2 {
      font-size: 36px;
      margin-bottom: 20px;
    }

    p {
      font-size: 17px;
      line-height: 30px;
      color: #7d7987;
      margin-bottom: 40px;
    }
  }
`
