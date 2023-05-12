import styled from 'styled-components';

import Faq from '../components/Faq';
import PageHeader from '../components/PageHeader';
import useHttpGetMethod from '../Hooks/useHttpGetMethod';

const Page = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #1A1821;
`

function Races() {
  const races = useHttpGetMethod('/races')

  return (
    <Page>
      <PageHeader />
      {races && races.map((race) => (
        <Faq key={race.name} data={race} type='race'/>
      ))}
    </Page>
  )
}

export default Races