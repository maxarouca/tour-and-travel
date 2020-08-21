import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Header>
      <S.Logo href="#">
        <img src="/img/logo.svg" alt="Logo Travel" />
      </S.Logo>
      <S.Nav>
        <S.NavLink href="">Home</S.NavLink>
        <S.NavLink href="">Destinations</S.NavLink>
        <S.NavLink href="">About</S.NavLink>
        <S.NavLink href="">Partner</S.NavLink>
        <S.Button outlined href="">
          Login
        </S.Button>
        <S.Button href="">Register</S.Button>
      </S.Nav>
    </S.Header>
    <S.Hero>
      <form action="">
        <h1>Explore and Travel</h1>
        <h2>Holiday finder</h2>
        <div>
          <select name="" id="">
            <option value="">Location</option>
          </select>
          <select name="" id="">
            <option value="">Activity</option>
          </select>
          <select name="" id="">
            <option value="">Grade</option>
          </select>
          <select name="" id="">
            <option value="">Date</option>
          </select>
        </div>
        <S.Button>Explore</S.Button>
      </form>
      <img src="/img/hero.png" alt="" />
    </S.Hero>

    <S.About>
      <img src="/img/section2.png" alt="" />

      <div>
        <h2>A new way to explore the world</h2>
        <p>
          For decades travellers have reached for Lonely Planet books when
          looking to plan and execute their perfect trip, but now, they can also
          let Lonely Planet Experiences lead the way
        </p>
        <S.Button>Learn More</S.Button>
      </div>
    </S.About>
  </S.Wrapper>
)

export default Main
