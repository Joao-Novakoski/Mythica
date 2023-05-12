import styled from 'styled-components';

import Faq from '../components/Faq';
import PageHeader from '../components/PageHeader';
import useHttpGetMethod from '../Hooks/useHttpGetMethod';

const Page = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #1A1821;
`

function Classes() {
  const classes = useHttpGetMethod('/classes')

  return (
    <Page>
      <PageHeader />
      {classes && classes.map((Class) => (
        <Faq key={Class.name} data={Class} type='class'/>
      ))}
    </Page>
  )
}

export default Races