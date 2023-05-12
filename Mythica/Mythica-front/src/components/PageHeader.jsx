import styled from 'styled-components'

const Header = styled.header`
  width: 100%;
  height: 10vh;
  background-color: #110F17;
  margin-bottom: 2px solid #2D2837;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Logo = styled.div`
  text-align: center;
  margin: auto 0 auto 2rem;
  
  & > h1 {
    color: #fff;
  }

  & > p {
    color: #fff;
  }
`
const DnD = styled.img`
  height: 100%;
  margin: auto 2rem auto 0;
`

function PageHeader() {
  return (
    <Header>
      <Logo>
        <h1>Mythica</h1>
        <p>seu melhor criador de fichas</p>
      </Logo>
      <DnD src="./src/img/DnDLogo.png" alt="Logo do Dungeons & Dragons" />
    </Header>
  )
}

export default PageHeader